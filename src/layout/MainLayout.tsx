export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const footerLinks = [
    { name: 'Impressum', url: '/impressum' },
    { name: 'Datenschutz', url: '/datenschutz' },
    { name: 'Kontakt', url: '/kontakt' },
  ]

  return (
    <main className="min-h-screen flex flex-col relative">
      {children}
      <footer className="z-10 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
            {footerLinks.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <a
                  href={link.url}
                  className="text-white/80 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="text-white/40 mx-4 hidden sm:inline">•</span>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-xs text-white/60">
            © {new Date().getFullYear()} Alle Rechte vorbehalten
          </div>
        </div>
      </footer>
    </main>
  )
}
