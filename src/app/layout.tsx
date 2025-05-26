// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Portfolio de Youssuf Helaly",
  description: "Portfolio de Youssuf Helaly, fullstack engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-900 text-white">
        <header>
          {/* your Bootstrap navbar */}
        </header>

        <main>{children}</main>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
