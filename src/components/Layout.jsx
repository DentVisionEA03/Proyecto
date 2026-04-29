function Layout({ children, onLogout, onToggleContrast, onChangeFontSize }) {
  return (
    <div>
      <div className="acc-bar">
        <button className="acc-btn" onClick={onToggleContrast}>Alto Contraste</button>
        <button className="acc-btn" onClick={() => onChangeFontSize(1)}>A+</button>
        <button className="acc-btn" onClick={() => onChangeFontSize(-1)}>A-</button>
        <button className="acc-btn" onClick={onLogout} style={{ background: '#e74c3c', border: 'none' }}>Salir</button>
      </div>

      <header id="main-header" style={styles.header}>
        <a href="#" className="logo" style={styles.logo}>DENT<span style={{ color: 'var(--primary)' }}>VISION</span></a>
        
        <ul style={styles.navLinks} id="nav-menu">
          <li><a href="#" style={styles.navLink}>Inicio</a></li>
          <li><a href="#" style={styles.navLink}>Servicios</a></li>
          <li><a href="#" style={styles.navLink}>Especialistas</a></li>
          <li><a href="#" style={styles.navLink}>Contacto</a></li>
        </ul>

        <div className="burger" style={styles.burger} onClick="toggleMenu()">
          <div></div>
          <div></div>
          <div></div>
        </div>
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
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#ddd', textDecoration: 'none' }}>Inicio</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#ddd', textDecoration: 'none' }}>Nuestros Servicios</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#ddd', textDecoration: 'none' }}>Directorio de Especialistas</a></li>
              <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#ddd', textDecoration: 'none' }}>Preguntas Frecuentes</a></li>
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