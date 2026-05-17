// Main App — composition
const App = () => {
  // Inject Google Fonts
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div data-screen-label="01 Hero">
          <Hero />
        </div>
        <div data-screen-label="02 Problema">
          <Problema />
        </div>
        <div data-screen-label="03 Calculadora">
          <CalculatorSection />
        </div>
        <div data-screen-label="04 Cómo funciona">
          <ComoFunciona />
        </div>
        <div data-screen-label="05 Intercambio">
          <Intercambio />
        </div>
        <div data-screen-label="06 Por qué ClaimRocks">
          <PorQue />
        </div>
        <div data-screen-label="07 FAQ">
          <FAQ />
        </div>
        <div data-screen-label="08 CTA Fundador">
          <FounderCTA />
        </div>
        <Footer />
      </main>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .problem-grid { grid-template-columns: 1fr !important; }
          .phases-grid { grid-template-columns: 1fr 1fr !important; }
          .lines-grid { grid-template-columns: 1fr 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .footer-top { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-stats .hero-stat-cell { border-right: 1px solid #181818 !important; }
          .hero-stats .hero-stat-cell:nth-child(2n) { border-right: none !important; }
          .hero-stats .hero-stat-cell:nth-child(1),
          .hero-stats .hero-stat-cell:nth-child(2) { border-bottom: 1px solid #181818 !important; }
        }
        @media (max-width: 720px) {
          .navbar-links { display: none !important; }
          .phases-grid, .lines-grid { grid-template-columns: 1fr !important; }
          .exchange-grid { grid-template-columns: 1fr !important; }
          .exchange-divider { display: none !important; }
          .benefits-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
          .footer-top { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
