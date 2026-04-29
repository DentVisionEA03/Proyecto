import { useState } from 'react'
import Layout from './Layout'

function Home() {
  const [fontSize, setFontSize] = useState(16)
  const [contrastMode, setContrastMode] = useState(false)

  const toggleContrast = () => {
    setContrastMode(!contrastMode)
  }

  const changeFontSize = (action) => {
    setFontSize(prev => prev + (action * 2))
  }

  const handleLogout = () => {
    window.location.href = '/'
  }

  const styles = {
    container: {
      fontSize: `${fontSize}px`,
      backgroundColor: contrastMode ? '#000' : 'var(--light)',
      color: contrastMode ? '#fff' : 'var(--dark)',
    },
    root: {
      '--primary': contrastMode ? '#ffff00' : '#00a8b5',
      '--secondary': contrastMode ? '#ffffff' : '#004d84',
      '--dark': contrastMode ? '#000000' : '#333',
      '--light': contrastMode ? '#000000' : '#f4f7f6',
      '--white': contrastMode ? '#000000' : '#ffffff',
      '--header-bg': contrastMode ? '#000000' : 'rgba(255, 255, 255, 0.95)',
    },
    hero: {
      height: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
      background: 'linear-gradient(135deg, rgba(0,77,132,0.1) 0%, rgba(0,168,181,0.1) 100%)',
    },
    heroTitle: {
      color: 'var(--secondary)',
      marginBottom: '10px',
      fontSize: '2.5rem',
    },
    heroText: {
      fontSize: '1.2rem',
      maxWidth: '600px',
    },
    btnPrincipal: {
      backgroundColor: 'var(--primary)',
      color: 'var(--white)',
      padding: '12px 25px',
      textDecoration: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      marginTop: '20px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      padding: '60px 5%',
      background: 'var(--white)',
    },
    featureCard: {
      background: 'var(--light)',
      padding: '30px',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    },
    featureTitle: {
      color: 'var(--secondary)',
      marginBottom: '15px',
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      background: 'var(--secondary)',
      color: 'var(--white)',
      padding: '50px 5%',
      textAlign: 'center',
      gap: '30px',
    },
    statBox: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '42px',
      margin: '0 0 5px 0',
      color: 'var(--primary)',
    },
    header: {
      background: 'var(--header-bg)',
      padding: '15px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      zIndex: 1000,
    },
    logo: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: 'var(--secondary)',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      gap: '25px',
      listStyle: 'none',
      margin: 0,
    },
    navLink: {
      textDecoration: 'none',
      color: 'var(--dark)',
      fontWeight: '600',
      fontSize: '14px',
    },
    burger: {
      display: 'none',
      cursor: 'pointer',
      flexDirection: 'column',
      gap: '5px',
    },
    footer: {
      background: '#2c3e50',
      color: 'var(--white)',
      padding: '50px 5% 20px',
    },
    footerContent: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '40px',
      marginBottom: '30px',
    },
    footerCol: {
      flex: 1,
      minWidth: '250px',
    },
    footerBottom: {
      textAlign: 'center',
      borderTop: '1px solid #444',
      paddingTop: '20px',
      fontSize: '13px',
    },
  }

  return (
    <div style={{ ...styles.container, ...styles.root }}>
      <Layout 
        onLogout={handleLogout}
        onToggleContrast={toggleContrast}
        onChangeFontSize={changeFontSize}
      >
        {/* Hero Section */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>Innovación en salud dental y visual</h1>
          <p style={styles.heroText}>Atención integral y de calidad para toda tu familia en un solo lugar.</p>
          <button style={styles.btnPrincipal} onClick={() => alert('Funcionalidad de agenda de citas')}>
            Agenda tu cita
          </button>
        </section>

        {/* Features Section */}
        <section style={styles.features}>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Salud Dental</h3>
            <p>Odontología general, ortodoncia y estética dental con tecnología de vanguardia y profesionales calificados.</p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Salud Visual</h3>
            <p>Exámenes de optometría, diagnóstico preventivo y un amplio catálogo de monturas para todas las edades.</p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Atención sin Esperas</h3>
            <p>Accede directamente a especialistas de forma rápida y sin trámites complejos.</p>
          </div>
        </section>

        {/* Stats Section */}
        <section style={styles.stats}>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>+50K</h2>
            <p>Pacientes Atendidos</p>
          </div>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>+120</h2>
            <p>Especialistas Aliados</p>
          </div>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>15</h2>
            <p>Sedes a nivel nacional</p>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Home