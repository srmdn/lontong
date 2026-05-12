import type { ComparisonRow, ProofMetric, ScopeBucket, WorkflowItem } from './types';

export const TAGLINE = 'Alternatif cPanel untuk operator VPS modern.';

export const SUBHEADLINE = 'Workflow inti untuk domain, SSL, deploy, dan backup tanpa beban panel lama. Dibangun dengan Go dan Caddy untuk operasi yang ringan.';

export const INSTALL_COMMAND = 'curl -sSL https://raw.githubusercontent.com/username/lontong/main/install.sh | bash';

export const PROOF_METRICS: ProofMetric[] = [
  { label: 'Idle RAM', value: '< 100MB', note: 'Target pada VPS 1GB' },
  { label: 'Binary', value: 'Single Go', note: 'Tanpa runtime tambahan' },
  { label: 'HTTPS', value: 'Auto via Caddy', note: 'Provision SSL otomatis' },
  { label: 'Deploy Flow', value: 'Zero restart', note: 'Update config via API' },
];

export const WORKFLOW_ITEMS: WorkflowItem[] = [
  {
    task: 'Domain dan SSL',
    goal: 'Domain aktif dengan HTTPS default',
    eta: '2-3 menit',
    outcome: 'A record -> validasi -> sertifikat terpasang',
  },
  {
    task: 'Deploy Site',
    goal: 'Rilis aplikasi tanpa downtime panel',
    eta: '< 5 menit',
    outcome: 'Build hook, runtime profile, health check',
  },
  {
    task: 'Database',
    goal: 'Provision DB dan kredensial per aplikasi',
    eta: '1-2 menit',
    outcome: 'User terisolasi, template backup siap',
  },
  {
    task: 'Backup dan Restore',
    goal: 'Snapshot rutin dengan rollback cepat',
    eta: '< 10 menit',
    outcome: 'Retention policy, restore poin-per-waktu',
  },
  {
    task: 'Multi-user Access',
    goal: 'Pisahkan owner, maintainer, viewer',
    eta: '< 3 menit',
    outcome: 'Role-based access untuk tiap project',
  },
  {
    task: 'Observability',
    goal: 'Lacak health tanpa login SSH terus-menerus',
    eta: 'Real-time',
    outcome: 'CPU, memory, disk, error-rate panel',
  },
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Idle RAM (benchmark internal)',
    cpanel: '> 1GB',
    other: '~500MB - 1GB',
    lontong: '< 100MB',
  },
  {
    feature: 'Provision Domain + SSL',
    cpanel: '6-10 menit',
    other: '4-8 menit',
    lontong: '2-3 menit',
  },
  {
    feature: 'Deploy aplikasi kecil',
    cpanel: 'Manual step berat',
    other: 'Flow bervariasi',
    lontong: 'Template deploy cepat',
  },
  {
    feature: 'Perubahan config runtime',
    cpanel: 'Butuh restart service',
    other: 'Sering reload service',
    lontong: 'Update instan via API',
  },
];

export const MIGRATION_SCOPE: ScopeBucket[] = [
  {
    title: 'Works now',
    items: [
      'Domain binding dan SSL otomatis',
      'Deploy static + app service workflow',
      'Resource panel metrik dasar',
      'Backup dan restore per project',
    ],
  },
  {
    title: 'In progress',
    items: [
      'Importer struktur akun dari panel lama',
      'Email stack orchestration',
      'Wizard rollback pasca migrasi',
    ],
  },
  {
    title: 'Planned',
    items: [
      'Cluster node management',
      'High availability profile',
      'Advanced policy templates',
    ],
  },
];
