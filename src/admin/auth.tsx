import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AuthError, adminGet, clearToken, getToken, loginRequest } from "./api";

type AuthCtx = {
  authed: boolean;
  username: string | null;
  role: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(() => Boolean(getToken()));
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const logout = useCallback(() => {
    clearToken();
    setAuthed(false);
    setUsername(null);
    setRole(null);
  }, []);

  const login = useCallback(async (u: string, p: string) => {
    const data = await loginRequest(u, p);
    setUsername(data.username);
    setRole(data.role);
    setAuthed(true);
  }, []);

  // Confirm the stored token is still valid on mount.
  useEffect(() => {
    if (!authed) return;
    adminGet<{ username: string; role: string | null }>("/me")
      .then((d) => {
        setUsername(d.username);
        setRole(d.role);
      })
      .catch(() => logout());
  }, [authed, logout]);

  const value = useMemo(
    () => ({ authed, username, role, login, logout }),
    [authed, username, role, login, logout],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}

/* Data-fetching hook that bounces to login on auth failure. */
export function useAdminData<T>(path: string | null) {
  const { logout } = useAdminAuth();
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(Boolean(path));
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    if (!path) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    adminGet<T>(path)
      .then((d) => !cancelled && (setData(d), setLoading(false)))
      .catch((e) => {
        if (cancelled) return;
        if (e instanceof AuthError) return logout();
        setError(e.message);
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [path, nonce, logout]);

  const reload = useCallback(() => setNonce((n) => n + 1), []);
  return { data, error, loading, reload };
}
