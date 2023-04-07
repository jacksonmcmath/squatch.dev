import "./globals.css";

export const metadata = {
  title: "squatch.dev",
  description: "Coming soon...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50">
        {children}
      </body>
    </html>
  );
}
