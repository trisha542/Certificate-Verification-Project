import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import VerifyCertificate from './Verify';
import AdminDashboard from './Admin';
import Login from './Login';
import FAQ from './FAQ'; 
import Network from './Network';
import Services from './Services';
import CertificateView from './CertificateView'; 
import Footer from './Footer';
import JoinNow from './JoinNow';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <ScrollToTop /> 
      
      <div style={styles.appWrapper}>
        
        <aside style={{
          ...styles.sidebar,
          width: isMenuOpen ? '280px' : '0px',
          opacity: isMenuOpen ? 1 : 0,
          padding: isMenuOpen ? '20px' : '0px',
          visibility: isMenuOpen ? 'visible' : 'hidden'
        }}>
          <div style={styles.sidebarHeader}>
             <h2 style={styles.brand}>CertiVerify</h2>
          </div>
          
          <ul style={styles.sideNav}>
            <li style={styles.navItem}><Link to="/" style={styles.sideLink} onClick={() => setIsMenuOpen(false)}>🏠 Home Portal</Link></li>
            <li style={styles.navItem}><Link to="/services" style={styles.sideLink} onClick={() => setIsMenuOpen(false)}>📜 Our Services</Link></li>
            <li style={styles.navItem}><Link to="/network" style={styles.sideLink} onClick={() => setIsMenuOpen(false)}>🌍 Regional Network</Link></li>
            <li style={styles.navItem}><Link to="/admin" style={styles.sideLink} onClick={() => setIsMenuOpen(false)}>🛡️ Admin Dashboard</Link></li>
            <li style={styles.navItem}><Link to="/faq" style={styles.sideLink} onClick={() => setIsMenuOpen(false)}>❓ Help & FAQ</Link></li>
            {isAuthenticated && (
              <li style={styles.navItem}>
                <button onClick={handleLogout} style={styles.sideLogout}>🚪 Logout</button>
              </li>
            )}
          </ul>
        </aside>

        <div style={{
          ...styles.mainWrapper,
          marginLeft: isMenuOpen ? '280px' : '0px'
        }}>
          
          <header style={styles.topHeader}>
            <div style={styles.headerLeft}>
              <button onClick={toggleMenu} style={styles.menuToggle}>
                {isMenuOpen ? '✕ Close Menu' : '☰ Open Options'}
              </button>
            </div>

            <div style={styles.headerCenter}>
              <div style={styles.headerInfo}>Official Verification System</div>
            </div>

            <div style={styles.headerRight}>
              <div title="Notifications" style={styles.iconCircle}>🔔</div>
              <div title="Language" style={styles.headerLang}>EN | US ▾</div>
              
              <div style={styles.profileSection} onClick={() => alert("Profile Settings Coming Soon!")}>
                <span style={styles.profileText}>Manage Profile</span>
                <div style={styles.avatarIcon}>👤</div>
              </div>
            </div>
          </header>

          <div style={styles.contentArea}>
            <Routes>
              <Route path="/" element={<VerifyCertificate />} />
              <Route path="/join" element={<JoinNow />} />
              <Route path="/services" element={<Services />} />
              <Route path="/network" element={<Network />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/certificate/:id" element={<CertificateView />} />
              <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
              <Route 
                path="/admin" 
                element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />} 
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

const styles = {
  appWrapper: { display: 'flex', minHeight: '100vh', backgroundColor: '#f4f7f6' },
  sidebar: {
    backgroundColor: '#03244cff',
    color: '#fff',
    position: 'fixed',
    height: '100vh',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    zIndex: 1000,
    boxShadow: '4px 0 10px rgba(0,0,0,0.1)',
  },
  sidebarHeader: { borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px', paddingBottom: '10px' },
  brand: { fontSize: '24px', letterSpacing: '2px', color: '#fff' },
  sideNav: { listStyle: 'none', padding: 0 },
  navItem: { margin: '15px 0' },
  sideLink: { 
    color: '#fff', 
    textDecoration: 'none', 
    fontSize: '16px', 
    display: 'block',
    padding: '12px 15px',
    borderRadius: '8px',
    transition: 'background 0.3s',
    backgroundColor: 'rgba(255,255,255,0.05)'
  },
  sideLogout: {
    marginTop: '20px',
    width: '100%',
    padding: '12px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '16px'
  },
  mainWrapper: { 
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    transition: 'all 0.3s ease',
    minHeight: '100vh' 
  },
  topHeader: {
    height: '65px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 30px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 900
  },
  headerLeft: { display: 'flex', alignItems: 'center', flex: 1 },
  headerCenter: { flex: 1, textAlign: 'center' },
  headerRight: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    flex: 1, 
    gap: '20px' 
  },
  menuToggle: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  headerInfo: { fontWeight: 'bold', color: '#7f8c8d' },
  headerLang: { fontSize: '12px', fontWeight: 'bold', color: '#2c3e50', cursor: 'pointer' },
  iconCircle: { fontSize: '18px', cursor: 'pointer', opacity: 0.7 },
  profileSection: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '10px', 
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '20px',
  },
  profileText: { fontSize: '14px', fontWeight: '500', color: '#2c3e50' },
  avatarIcon: { 
    width: '35px', 
    height: '35px', 
    backgroundColor: '#03244c', 
    color: 'white', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    fontSize: '18px'
  },
  contentArea: { padding: '20px', flex: 1 }
};

export default App;