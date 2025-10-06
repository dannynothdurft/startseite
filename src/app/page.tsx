"use client"
import { useState, useEffect } from 'react';
import { Search, MessageCircle, ShoppingCart, Youtube, Mail, Linkedin, Home } from 'lucide-react';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showHomepageInfo, setShowHomepageInfo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSetAsHomepage = () => {
    setShowHomepageInfo(true);
  };

  const getSeasonalBackground = () => {
    const month = new Date().getMonth() + 1;

    if (month >= 3 && month <= 5) {
      return 'https://images.pexels.com/photos/1086188/pexels-photo-1086188.jpeg?auto=compress&cs=tinysrgb&w=1920';
    } else if (month >= 6 && month <= 8) {
      return 'https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&w=1920';
    } else if (month >= 9 && month <= 11) {
      return 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1920';
    } else {
      return 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1920';
    }
  };

const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
  if (searchQuery.trim()) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(url, "_blank");
  }
};

  const shortcuts = [
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://web.whatsapp.com', color: 'bg-green-500' },
    { name: 'Amazon', icon: ShoppingCart, url: 'https://amzn.to/4nzkspZ', color: 'bg-orange-500' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com', color: 'bg-red-500' },
    { name: 'Gmail', icon: Mail, url: 'https://mail.google.com', color: 'bg-blue-500' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com', color: 'bg-[#0a66c2]' },
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const footerLinks = [
    { name: 'Impressum', url: '#impressum' },
    { name: 'Datenschutz', url: '#datenschutz' },
    { name: 'Hilfe', url: '#hilfe' },
    { name: 'Kontakt', url: '#kontakt' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${getSeasonalBackground()})` }}
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="absolute top-6 left-8">
          <button
            onClick={handleSetAsHomepage}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30
                     backdrop-blur-md rounded-full transition-all duration-200 text-white text-sm"
          >
            <Home size={18} />
            <span>Als Startseite festlegen</span>
          </button>
        </div>

        <div className="absolute top-6 right-8 text-right">
          <div className="text-4xl font-light text-white drop-shadow-lg">{formatTime(currentTime)}</div>
          <div className="text-sm text-white/90 mt-1 drop-shadow-md">{formatDate(currentTime)}</div>
        </div>

    {showHomepageInfo && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-auto">
    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] p-8 overflow-y-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500 p-3 rounded-xl">
          <Home className="text-white" size={28} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Als Startseite festlegen
        </h2>
      </div>

      <div className="space-y-6 text-gray-700">
        <p className="text-base">
          Um diese Seite als Startseite in Ihrem Browser festzulegen, folgen Sie bitte den Anweisungen für Ihren Browser:
        </p>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
  <div className="bg-gray-50 p-4 rounded-xl">
    <h3 className="font-semibold text-gray-800 mb-2">Google Chrome</h3>
    <ol className="list-decimal list-inside space-y-1 text-sm">
      <li>Klicken Sie auf die drei Punkte (⋮) oben rechts</li>
      <li>Wählen Sie &quot;Einstellungen&quot;</li>
      <li>Unter &quot;Darstellung&quot; finden Sie &quot;Startseite anzeigen&quot;</li>
      <li>Aktivieren Sie die Option und geben Sie die URL ein</li>
    </ol>
  </div>

  <div className="bg-gray-50 p-4 rounded-xl">
    <h3 className="font-semibold text-gray-800 mb-2">Mozilla Firefox</h3>
    <ol className="list-decimal list-inside space-y-1 text-sm">
      <li>Klicken Sie auf die drei Linien (≡) oben rechts</li>
      <li>Wählen Sie &quot;Einstellungen&quot;</li>
      <li>Unter &quot;Startseite&quot; finden Sie die Optionen</li>
      <li>Wählen Sie &quot;Benutzerdefinierte Adressen&quot; und fügen Sie die URL ein</li>
    </ol>
  </div>

  <div className="bg-gray-50 p-4 rounded-xl">
    <h3 className="font-semibold text-gray-800 mb-2">Microsoft Edge</h3>
    <ol className="list-decimal list-inside space-y-1 text-sm">
      <li>Klicken Sie auf die drei Punkte (⋯) oben rechts</li>
      <li>Wählen Sie &quot;Einstellungen&quot;</li>
      <li>Unter &quot;Beim Start&quot; wählen Sie &quot;Diese Seiten öffnen&quot;</li>
      <li>Klicken Sie auf &quot;Neue Seite hinzufügen&quot; und geben Sie die URL ein</li>
    </ol>
  </div>

  <div className="bg-gray-50 p-4 rounded-xl">
    <h3 className="font-semibold text-gray-800 mb-2">Safari (Mac)</h3>
    <ol className="list-decimal list-inside space-y-1 text-sm">
      <li>Öffnen Sie Safari → Einstellungen</li>
      <li>Wählen Sie den Tab &quot;Allgemein&quot;</li>
      <li>Unter &quot;Neue Fenster öffnen mit&quot; und &quot;Neue Tabs öffnen mit&quot;</li>
      <li>Wählen Sie &quot;Homepage&quot; und geben Sie die URL ein</li>
    </ol>
  </div>
</div>


        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
          <p className="text-sm text-blue-800">
            <strong>Aktuelle URL:</strong> {window.location.href}
          </p>
        </div>
      </div>

      <button
        onClick={() => setShowHomepageInfo(false)}
        className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium
                 py-3 px-6 rounded-xl transition-colors duration-200"
      >
        Verstanden
      </button>
    </div>
  </div>
)}


        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-20">
       <form onSubmit={handleSearch} className="w-full max-w-2xl mb-16">
  <div className="relative">
    <Search 
      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 z-10" 
      size={24} 
    />
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Google durchsuchen"
      className="w-full pl-16 pr-6 py-4 text-lg border-2 border-gray-200 rounded-full
                 focus:outline-none focus:border-blue-400 transition-colors shadow-md
                 hover:shadow-lg bg-white text-gray-800 z-0 relative"
    />
  </div>
</form>


          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-4xl">
            {shortcuts.map((shortcut) => (
              <a
                key={shortcut.name}
                href={shortcut.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 rounded-2xl
                         hover:bg-white/20 transition-all duration-200 group backdrop-blur-sm"
              >
                <div className={`${shortcut.color} p-4 rounded-2xl shadow-lg
                              group-hover:scale-110 transition-transform duration-200`}>
                  <shortcut.icon className="text-white" size={32} />
                </div>
                <span className="mt-3 text-sm font-medium text-white drop-shadow-md">{shortcut.name}</span>
              </a>
            ))}
          </div>
        </div>

        <footer className="relative z-10 py-6 px-4">
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
      </div>
    </div>
  );
}

export default HomePage
