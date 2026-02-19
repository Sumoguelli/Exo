function Footer({ links, socials }) {
  return (
    <footer className="footer">
      <img src="/logo.svg" alt="Sunnyside" className="logo footer-logo" />

      <ul className="footer-links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="socials">
        {socials.map((item) => (
          <a key={item.name} href={item.href} aria-label={item.name}>
            <img src={item.icon} alt="" />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
