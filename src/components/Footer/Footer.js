import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer className="footer">
      <h5 className="footer__copyrights">
        © 2022 Supersite, Powered by News API
      </h5>
      <div className="footer__nav">
        <nav className="footer__links">
          <Link to="/" className="footer__home" onClick={props.onHomeClick}>
            Home
          </Link>
          <a
            className="footer__practicum"
            href="https://practicum.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Practicum
          </a>
        </nav>
        <div className="footer__social">
          <i
            className="footer__git"
            href="https://github.com/bogdan770"
            target="_blank"
            rel="noopener noreferrer"
          >
            {''}
          </i>
          <i
            className="footer__facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {''}
          </i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
