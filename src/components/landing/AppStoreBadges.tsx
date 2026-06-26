import { DownloadAppButton } from "@/components/DownloadAppButton";

type Props = {
  className?: string;
};

export function AppStoreBadges({ className = "" }: Props) {
  return <DownloadAppButton className={className} />;
}
