function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__copyrights">
        © 2021 Supersite, Powered by News API
      </div>
      <div className="footer__nav">
        <nav className="footer__links">
          <a className="footer__home" href="#home" onClick={props.onHomeClick}>
            Home
          </a>
          <a
            className="footer__practicum"
            href="https://practicum.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Practicum by Yandex
          </a>
        </nav>
        <div className="footer__social">
          <a
            className="footer__git"
            href="https://github.com/bogdan770"
            target="_blank"
            rel="noopener noreferrer"
          >
            {""}
          </a>
          <a
            className="footer__facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {""}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
