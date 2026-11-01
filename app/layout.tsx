import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SUPAY Dota 2 | Torneos', description: 'Administración de torneos y equipos de Dota 2 para SUPAY' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
