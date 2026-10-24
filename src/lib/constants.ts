import type { ServiceItem, CompanyInfo } from '../types';

export const COMPANY: CompanyInfo = {
  name: 'PT CAHAYA RESTU AMANAH',
  tagline: 'Birojasa STNK Seluruh Indonesia',
  admin1: '08817111177',
  admin2: '08812111177',
  address: 'Sidotopo RT 16 RW 06, Mojosari, Mojokerto (depan Polres Mojokerto)',
  operationalHours: 'Senin–Sabtu, 08.00–16.00 WIB',
  holidayNote: 'Minggu dan hari libur nasional tutup'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Proses Pajak',
    description: 'Pengurusan pembayaran Pajak Kendaraan Bermotor (PKB) tahunan untuk kendaraan roda dua maupun roda empat tepat waktu dan terpercaya.',
    badge: 'Populer'
  },
  {
    id: 2,
    title: 'Ganti STNK 5 Tahunan',
    description: 'Layanan perpanjangan masa berlaku STNK 5 tahunan beserta proses cek fisik kendaraan sesuai prosedur Samsat resmi.',
    badge: 'Berkala'
  },
  {
    id: 3,
    title: 'Balik Nama (BBN-KB)',
    description: 'Pengalihan kepemilikan kendaraan bermotor dari pemilik sebelumnya ke pemilik baru dengan berkas lengkap dan legalitas terjamin.',
    badge: 'Legalitas'
  },
  {
    id: 4,
    title: 'Mutasi Kendaraan',
    description: 'Pengurusan mutasi keluar dan mutasi masuk antar daerah, kabupaten/kota, maupun antar provinsi di seluruh Indonesia.',
    badge: 'Lintas Wilayah'
  },
  {
    id: 5,
    title: 'Duplikat STNK',
    description: 'Bantuan pengurusan penerbitan STNK baru pengganti akibat hilang atau rusak dengan melampirkan surat kehilangan resmi kepolisian.',
  },
  {
    id: 6,
    title: 'Duplikat BPKB',
    description: 'Prosedur penerbitan BPKB pengganti secara resmi melalui Polda sesuai mekanisme regulasi yang berlaku.',
  },
  {
    id: 7,
    title: 'Rubah Bentuk & Ganti Warna',
    description: 'Legalisasi perubahan spesifikasi teknis kendaraan (rubah bentuk bodi atau rubah warna) pada identitas resmi STNK & BPKB.',
  },
  {
    id: 8,
    title: 'Uji KIR Kendaraan',
    description: 'Layanan kepengurusan uji berkala kelaikan jalan (KIR) untuk kendaraan niaga, angkutan barang, dan angkutan penumpang.',
    badge: 'Niaga'
  },
  {
    id: 9,
    title: 'SIM Baru & Perpanjangan',
    description: 'Informasi dan pendampingan prosedur perpanjangan maupun pembuatan Surat Izin Mengemudi sesuai kategori.',
  }
];

export const NAV_ITEMS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Dokumentasi', href: '#dokumentasi' },
  { label: 'Berita', href: '#berita' },
  { label: 'Kontak', href: '#kontak' },
];

export const WHATSAPP_BASE_URL_1 = `https://wa.me/628817111177`;
export const WHATSAPP_BASE_URL_2 = `https://wa.me/628812111177`;

export function getWhatsAppConsultationUrl(serviceName?: string, adminNumber: 1 | 2 = 1): string {
  const base = adminNumber === 1 ? WHATSAPP_BASE_URL_1 : WHATSAPP_BASE_URL_2;
  const message = serviceName
    ? `Halo Admin PT Cahaya Restu Amanah, saya ingin konsultasi mengenai layanan ${serviceName}. Mohon informasi persyaratan dan prosedurnya.`
    : `Halo Admin PT Cahaya Restu Amanah, saya ingin konsultasi mengenai layanan pengurusan dokumen kendaraan.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}
