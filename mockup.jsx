// Product Mockup — browser chrome + simulated SaaS dashboard
const ProductMockup = () => {
  const GOLD = '#FFBB00';

  const statCards = [
    { label: 'Reclamos Activos', value: '12', delta: '+3 esta semana', dotColor: '#3B82F6' },
    { label: 'Completados', value: '48', delta: '+12% vs anterior', dotColor: '#22C55E' },
    { label: 'Tiempo Promedio', value: '47s', delta: '-32% más rápido', dotColor: '#EC4899' },
    { label: 'Reservas Totales', value: '$1.2M', delta: '+$240K este mes', dotColor: GOLD },
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      perspective: '1200px',
    }}>
      {/* Gold halo behind */}
      <div style={{
        position: 'absolute',
        inset: '-60px',
        background: 'radial-gradient(ellipse at 30% 40%, rgba(255,187,0,0.07) 0%, transparent 60%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg) rotateZ(1deg)',
        transformOrigin: 'left center',
        boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 80px rgba(255,187,0,0.06)',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Browser chrome */}
        <div style={{
          background: '#161616',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          borderBottom: '1px solid #0A0A0A',
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF5F57' }} />
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFBB00' }} />
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#27C93F' }} />
          </div>
          <div style={{
            flex: 1,
            background: '#1E1E1E',
            borderRadius: 6,
            padding: '5px 12px',
            fontSize: 10,
            color: '#888',
            fontFamily: 'DM Mono, monospace',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <svg width="9" height="9" viewBox="0 0 16 16" fill="none" stroke="#666" strokeWidth="1.5">
              <path d="M5 7V5a3 3 0 016 0v2M3 7h10v6H3z" />
            </svg>
            claimrocks.com/hub
          </div>
        </div>

        {/* App content */}
        <div style={{ background: '#0A0A0A', padding: 0 }}>
          {/* App navbar */}
          <div style={{
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #161616',
          }}>
            <MiniLogo size={11} />
            <div style={{
              display: 'flex',
              gap: 18,
              fontSize: 10,
              fontWeight: 600,
              color: '#888',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>
              <span style={{ color: '#fff' }}>Hub</span>
              <span>Dashboard</span>
              <span>Reclamos</span>
            </div>
            <div style={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              background: '#1A1A1A',
              border: '1px solid rgba(255,187,0,0.4)',
              color: GOLD,
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>AA</div>
          </div>

          {/* Greeting */}
          <div style={{ padding: '20px 20px 14px' }}>
            <div style={{
              fontSize: 22,
              fontWeight: 700,
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              color: '#fff',
              marginBottom: 4,
              letterSpacing: '-0.02em',
            }}>Hola, Andrea.</div>
            <div style={{
              fontSize: 10,
              color: '#666',
              fontFamily: 'DM Mono, monospace',
            }}>Jueves · 15 de mayo, 2026</div>
          </div>

          {/* Stat cards */}
          <div style={{
            padding: '0 20px 16px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 8,
          }}>
            {statCards.map((s, i) => (
              <div key={i} style={{
                background: '#111111',
                border: '1px solid #1A1A1A',
                borderRadius: 8,
                padding: '10px 12px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginBottom: 6,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.dotColor }} />
                  <span style={{ fontSize: 8, color: '#888', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {s.label}
                  </span>
                </div>
                <div style={{
                  fontSize: 18,
                  fontWeight: 700,
                  fontFamily: 'DM Mono, monospace',
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  marginBottom: 2,
                }}>{s.value}</div>
                <div style={{ fontSize: 8, color: '#666', fontFamily: 'DM Mono, monospace' }}>{s.delta}</div>
              </div>
            ))}
          </div>

          {/* Agents section */}
          <div style={{ padding: '0 20px 22px' }}>
            <div style={{
              fontSize: 9,
              color: '#888',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>Agentes activos</div>

            <div style={{ display: 'grid', gap: 6 }}>
              <div style={{
                background: '#111111',
                border: '1px solid rgba(255,187,0,0.3)',
                borderRadius: 8,
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 0 30px rgba(255,187,0,0.05)',
              }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', marginBottom: 3 }}>
                    Hogar y Copropiedades
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
                    <span style={{ fontSize: 8, color: '#22C55E', fontWeight: 600 }}>Disponible</span>
                  </div>
                </div>
                <div style={{
                  fontSize: 14,
                  fontFamily: 'DM Mono, monospace',
                  color: GOLD,
                  fontWeight: 600,
                }}>87</div>
              </div>

              <div style={{
                background: '#0E0E0E',
                border: '1px solid #1A1A1A',
                borderRadius: 8,
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                opacity: 0.55,
              }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#888', marginBottom: 3 }}>
                    Transporte y Carga
                  </div>
                  <div style={{ fontSize: 8, color: '#555', fontWeight: 600 }}>Próximamente</div>
                </div>
                <div style={{
                  fontSize: 14,
                  fontFamily: 'DM Mono, monospace',
                  color: '#444',
                }}>—</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { ProductMockup });
