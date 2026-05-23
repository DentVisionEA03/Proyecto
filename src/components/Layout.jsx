import { useState } from 'react'
import { Link } from 'react-router-dom'

function Layout({ children, isAdmin = false, onLogout  }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div>
      <div className="acc-bar">
        
        <button className="acc-btn" onClick={onLogout} style={{ background: '#e74c3c', border: 'none' }}>Salir</button>
      </div>

      <header id="main-header" style={styles.header}>
        <Link to="/home" className="logo" style={styles.logo} onClick={closeMenu}>DENT<span style={{ color: 'var(--primary)' }}>VISION</span></Link>
        
        <ul
          className={menuOpen ? 'nav-active' : ''}
          style={styles.navLinks}
          id="nav-menu"
        >
          <li><Link to="/home" style={styles.navLink} onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/servicios" style={styles.navLink} onClick={closeMenu}>Servicios</Link></li>
          <li><Link to="/especialistas" style={styles.navLink} onClick={closeMenu}>Especialistas</Link></li>
          <li><Link to="/contacto" style={styles.navLink} onClick={closeMenu}>Contacto</Link></li>
          <li><Link to="/citas" style={styles.navLink} onClick={closeMenu}>Citas</Link></li>
          {isAdmin && <li><Link to="/admin" style={styles.navLink} onClick={closeMenu}>Admin</Link></li>}
        </ul>

        <button
          aria-label="Abrir menu de navegacion"
          aria-expanded={menuOpen}
          className={`burger ${menuOpen ? 'toggle' : ''}`}
          style={styles.burger}
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </button>
      </header>

      {children}

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerCol}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>DentVision</h4>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Nos dedicamos a cuidar de tu sonrisa y de tu vista, combinando innovación y calidad humana.</p>
          </div>
          <div style={styles.footerCol}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Enlaces rápidos</h4>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ marginBottom: '8px' }}><Link to="/home" style={{ color: '#ddd', textDecoration: 'none' }}>Inicio</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/servicios" style={{ color: '#ddd', textDecoration: 'none' }}>Nuestros Servicios</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/especialistas" style={{ color: '#ddd', textDecoration: 'none' }}>Directorio de Especialistas</Link></li>
              <li style={{ marginBottom: '8px' }}><Link to="/citas" style={{ color: '#ddd', textDecoration: 'none' }}>Agendar cita</Link></li>
              {isAdmin && <li style={{ marginBottom: '8px' }}><Link to="/admin" style={{ color: '#ddd', textDecoration: 'none' }}>Panel administrativo</Link></li>}
            </ul>
          </div>
          <div style={styles.footerCol}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Contáctanos</h4>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Email: Admin@DentVision.com<br />Teléfono: +57 (601) 123 4567</p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2026 DentVision. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

const styles = {
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

export default Layout
