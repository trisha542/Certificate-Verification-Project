import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer style={footerStyles.footer}>
            <div style={footerStyles.container}>
                
                <div style={footerStyles.column}>
                    <h4 style={footerStyles.heading}>Professionals</h4>
                    <ul style={footerStyles.list}>
                        <li><Link to="/services" style={footerStyles.link}>Certifications</Link></li>
                        <li><Link to="/faq" style={footerStyles.link}>Ambassadors</Link></li>
                        <li><Link to="/" style={footerStyles.link}>Ways to get certified</Link></li>
                        <li><Link to="/network" style={footerStyles.link}>Organizations</Link></li>
                    </ul>
                </div>

           
                <div style={footerStyles.column}>
                    <h4 style={footerStyles.heading}>Partners</h4>
                    <ul style={footerStyles.list}>
                        <li><Link to="/network" style={footerStyles.link}>Why Certify</Link></li>
                        <li><Link to="/services" style={footerStyles.link}>Our Service</Link></li>
                        <li><Link to="/admin" style={footerStyles.link}>Accreditation</Link></li>
                        <li><Link to="/network" style={footerStyles.link}>Partner Support</Link></li>
                    </ul>
                </div>

               
                <div style={footerStyles.column}>
                    <h4 style={footerStyles.heading}>CertiVerify Membership</h4>
                    <p style={{color: '#fff', fontSize: '14px', marginBottom: '15px'}}>Elevate your career</p>
                  <Link to="/join"><button style={footerStyles.ctaBtn}>Join now</button></Link>
                </div>
            </div>

            <hr style={footerStyles.divider} />

            <div style={footerStyles.container}>
              
                <div style={footerStyles.column}>
                    <h4 style={footerStyles.heading}>About us</h4>
                    <ul style={footerStyles.list}>
                        <li><Link to="/" style={footerStyles.link}>What we do</Link></li>
                        <li><Link to="/" style={footerStyles.link}>Vision & Core Values</Link></li>
                    </ul>
                </div>

                <div style={footerStyles.column}>
                    <h4 style={footerStyles.heading}>Support</h4>
                    <ul style={footerStyles.list}>
                        <li><Link to="/faq" style={footerStyles.link}>Help & Support</Link></li>
                        <li><Link to="/faq" style={footerStyles.link}>Privacy Policy</Link></li>
                    </ul>
                </div>

                <div style={footerStyles.column}>
                    <h4 style={footerStyles.heading}>FOLLOW US ON</h4>
                    <div style={footerStyles.socialIcons}>
                        <span style={footerStyles.icon}>f</span>
                        <span style={footerStyles.icon}>in</span>
                        <span style={footerStyles.icon}>yt</span>
                        <span style={footerStyles.icon}>𝕏</span>
                    </div>
                </div>
            </div>
            <p style={footerStyles.copyright}>© 2026 CertiVerify System. All Rights Reserved.</p>
        </footer>
    );
};

const footerStyles = {
    footer: { backgroundColor: '#1a2533', padding: '60px 40px 20px', marginTop: 'auto' },
    container: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' },
    column: { minWidth: '200px', marginBottom: '30px' },
    heading: { color: '#fff', borderBottom: '2px solid #e67e22', display: 'inline-block', paddingBottom: '5px', marginBottom: '20px', fontSize: '18px', textTransform: 'uppercase' },
    list: { listStyle: 'none', padding: 0 },
    link: { color: '#bdc3c7', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '10px' },
    ctaBtn: { backgroundColor: '#ff4d00', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' },
    divider: { border: '0.5px solid rgba(255,255,255,0.1)', margin: '40px 0' },
    socialIcons: { display: 'flex', gap: '15px' },
    icon: { width: '35px', height: '35px', borderRadius: '50%', border: '1px solid #fff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '14px' },
    copyright: { textAlign: 'center', color: '#7f8c8d', fontSize: '12px', marginTop: '40px' }
};

export default Footer;