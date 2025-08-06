// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html >
      <body>
        <div data-scroll-container>
          {children}
        </div>
      </body>
    </html>
  );
}
