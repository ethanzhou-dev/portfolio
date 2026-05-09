import { motion, type Variants } from 'framer-motion';
import { LiquidBackground } from './components/LiquidBackground';
import { GlassCard } from './components/GlassCard';
import { Dock } from './components/Dock';
import './index.css';

function App() {
  const projects = [
    { title: '生成回声', tags: 'WebGL, 音频响应' },
    { title: '空间交互界面', tags: 'AR, 交互设计' },
    { title: '流体排版', tags: '字体设计, Three.js' },
    { title: '数据雕塑', tags: '数据可视化, 生成艺术' },
  ];

  // Animation variants
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

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
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{ 
            minHeight: '70vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center' 
          }}
        >
          <motion.div variants={fadeUpVariant}>
            <GlassCard style={{ padding: '56px', maxWidth: '640px' }}>
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: 700, 
                marginBottom: '20px', 
                letterSpacing: '-0.03em',
                lineHeight: 1.1
              }}>
                你好，我是周易辉。
              </h1>
              <p style={{ 
                fontSize: '1.25rem', 
                color: 'rgba(255, 255, 255, 0.85)', 
                lineHeight: 1.6,
                fontWeight: 300
              }}>
                艺术与科技专业大二学生。 <br/>
                探索数字美学、交互设计与流体体验的交汇点。
              </p>
            </GlassCard>
          </motion.div>
        </motion.section>

        {/* Archive / Portfolio Grid */}
        <motion.section 
          id="archive" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ marginTop: '40px', scrollMarginTop: '100px' }}
        >
          <motion.h2 
            variants={fadeUpVariant}
            style={{ 
              fontSize: '2.25rem', 
              marginBottom: '40px', 
              fontWeight: 600,
              letterSpacing: '-0.02em'
            }}
          >
            作品归档
          </motion.h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {projects.map((project, i) => (
              <motion.div key={i} variants={fadeUpVariant}>
                <GlassCard className="project-card" style={{ padding: '24px', cursor: 'pointer', height: '100%' }}>
                  <div style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: '20px',
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About & Philosophy Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          style={{ marginTop: '120px' }}
        >
          <GlassCard style={{ padding: '56px', display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
            <div style={{ flex: '1 1 300px' }}>
              <h2 style={{ 
                fontSize: '2.25rem', 
                marginBottom: '32px', 
                fontWeight: 600,
                letterSpacing: '-0.02em' 
              }}>设计理念</h2>
              <div style={{ 
                fontSize: '1.15rem', 
                color: 'rgba(255, 255, 255, 0.85)', 
                lineHeight: 1.8,
                fontWeight: 300
              }}>
                <p style={{ marginBottom: '24px' }}>
                  我相信技术是现代艺术最强大的媒介。通过将代码与有机的视觉元素结合，我致力于创造充满生命力、直观且触动人心的界面。
                </p>
                <p>
                  目前就读于艺术与科技专业，专注于空间计算、生成艺术以及如“液态玻璃”等下一代 UI 范式。这份归档是我实验与创作的生动记录。
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.section>
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
