import { TrendingUp, Building2, HardHat, HeartHandshake, BookOpen } from "lucide-react";
import type { IconName } from "@/lib/data";

const map = {
  chart: TrendingUp,
  building: Building2,
  hardhat: HardHat,
  heart: HeartHandshake,
  book: BookOpen,
} as const;

export function DirIcon({ name, className }: { name: IconName; className?: string }) {
  const I = map[name];
  return <I className={className} strokeWidth={1.4} />;
}
