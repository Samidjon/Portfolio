function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© {new Date().getFullYear()} Samid Normuradov</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;