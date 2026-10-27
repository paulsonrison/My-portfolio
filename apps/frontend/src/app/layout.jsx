import "./globals.css";

export const metadata = {
  title: "My port folio",
  description: "An engineering portfolio in development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
