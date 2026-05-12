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

export interface ProofMetric {
  label: string;
  value: string;
  note: string;
}

export interface WorkflowItem {
  task: string;
  goal: string;
  eta: string;
  outcome: string;
}

export interface ScopeBucket {
  title: string;
  items: string[];
}

export type Theme = 'light' | 'dark';
