// app/manifest.ts
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Matrona Naty',
    short_name: 'Matrona Naty',
    description: 'Cuidado Materno y Prenatal',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#E84E89',
    background_color: '#ffffff',
    display: 'standalone',
  }
}