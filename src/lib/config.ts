export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME || "MeantGo",
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || "hello@meantgo.app",
  privacyEmail: import.meta.env.VITE_PRIVACY_EMAIL || "privacy@meantgo.app",
  downloadUrl:
    import.meta.env.VITE_DOWNLOAD_URL ||
    import.meta.env.VITE_APP_STORE_URL ||
    import.meta.env.VITE_GOOGLE_PLAY_URL ||
    "#",
  appStoreUrl: import.meta.env.VITE_APP_STORE_URL || "#",
  googlePlayUrl: import.meta.env.VITE_GOOGLE_PLAY_URL || "#",
};
