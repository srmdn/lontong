export interface ComparisonRow {
  feature: string;
  cpanel: string;
  other: string;
  lontong: string;
}

export interface DashboardStat {
  label: string;
  value: number;
  unit: string;
  max: number;
  color: string;
}

export type Theme = 'light' | 'dark';