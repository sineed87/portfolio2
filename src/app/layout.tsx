import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div data-scroll-container>
          {children}
        </div>
      </body>
    </html>
  );
}
