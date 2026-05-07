import { LiquidBackground } from './components/LiquidBackground';
import { GlassCard } from './components/GlassCard';
import { Dock } from './components/Dock';
import './index.css';

function App() {
  const projects = [
    { title: 'Generative Echo', tags: 'WebGL, Audio Reactive' },
    { title: 'Spatial Interfaces', tags: 'AR, Interaction Design' },
    { title: 'Fluid Type', tags: 'Typography, Three.js' },
    { title: 'Data Sculptures', tags: 'Data Viz, Generative Art' },
  ];

  return (
    <>
      <LiquidBackground />
      
      <main style={{ 
        padding: '80px 5%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        paddingBottom: '160px',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Hero Section */}
        <section style={{ 
          minHeight: '70vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center' 
        }}>
          <GlassCard style={{ padding: '56px', maxWidth: '640px' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 700, 
              marginBottom: '20px', 
              letterSpacing: '-0.03em',
              lineHeight: 1.1
            }}>
              Hi, I'm Tzucet.
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.85)', 
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              Art & Technology Sophomore. <br/>
              Exploring the intersection of digital aesthetics, interaction, and fluid experiences.
            </p>
          </GlassCard>
        </section>

        {/* Archive / Portfolio Grid */}
        <section style={{ marginTop: '40px' }}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            marginBottom: '40px', 
            fontWeight: 600,
            letterSpacing: '-0.02em'
          }}>Archive</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {projects.map((project, i) => (
              <GlassCard key={i} className="project-card" style={{ padding: '24px', cursor: 'pointer' }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '16px',
                  marginBottom: '24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Subtle placeholder for project image */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 3s infinite linear'
                  }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', fontWeight: 500 }}>{project.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>{project.tags}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* About & Philosophy Section */}
        <section style={{ marginTop: '120px' }}>
          <GlassCard style={{ padding: '56px', display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
            <div style={{ flex: '1 1 300px' }}>
              <h2 style={{ 
                fontSize: '2.25rem', 
                marginBottom: '32px', 
                fontWeight: 600,
                letterSpacing: '-0.02em' 
              }}>Philosophy</h2>
              <div style={{ 
                fontSize: '1.15rem', 
                color: 'rgba(255, 255, 255, 0.85)', 
                lineHeight: 1.8,
                fontWeight: 300
              }}>
                <p style={{ marginBottom: '24px' }}>
                  I believe that technology is the most powerful medium for modern art. By combining code with organic visual elements, I aim to create interfaces that feel alive, intuitive, and deeply personal.
                </p>
                <p>
                  Currently studying Art & Tech, focusing on spatial computing, generative art, and next-generation UI paradigms like Liquid Glass. This archive is a living document of my experiments and creations.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>
      </main>

      <Dock />

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  );
}

export default App;
