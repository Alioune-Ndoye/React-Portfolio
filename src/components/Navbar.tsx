import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#2e4057',
      color: 'white'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Alioune Ndoye
      </div>
      
      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
        </li>
        <li>
          <Link to="/resume" style={{ color: 'inherit', textDecoration: 'none' }}>Resume</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}