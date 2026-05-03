import type { ComparisonRow, DashboardStat } from './types';

export const TAGLINE = 'Kelola Server Tanpa Beban.';

export const SUBHEADLINE = 'Control panel open-source yang dibangun dengan Go dan Caddy. Ringan untuk VPS kecil, tangguh untuk traffic besar.';

export const INSTALL_COMMAND = 'curl -sSL https://raw.githubusercontent.com/username/lontong/main/install.sh | bash';

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Arsitektur',
    cpanel: 'Perl (Legacy)',
    other: 'Python / PHP',
    lontong: 'Go (Single Binary)',
  },
  {
    feature: 'Resource (RAM)',
    cpanel: 'Tinggi (> 1GB)',
    other: '~500MB - 1GB',
    lontong: 'Sangat Rendah (< 100MB)',
  },
  {
    feature: 'Web Server',
    cpanel: 'Apache (Berat)',
    other: 'OpenLiteSpeed',
    lontong: 'Caddy (Modern & Fast)',
  },
  {
    feature: 'HTTPS/SSL',
    cpanel: 'Manual / Certbot',
    other: 'Sering Error',
    lontong: 'Otomatis (Native Caddy)',
  },
  {
    feature: 'Config Update',
    cpanel: 'Restart Service',
    other: 'Reload Service',
    lontong: 'Instan via API (Zero Downtime)',
  },
  {
    feature: 'Biaya',
    cpanel: 'Berbayar Mahal',
    other: 'Freemium / Ads',
    lontong: '100% Gratis & Open Source',
  },
];

export const DASHBOARD_STATS: DashboardStat[] = [
  { label: 'CPU Usage', value: 23, unit: '%', max: 100, color: '#991B1B' },
  { label: 'Memory', value: 412, unit: 'MB', max: 2048, color: '#991B1B' },
  { label: 'Disk', value: 8.2, unit: 'GB', max: 20, color: '#991B1B' },
];