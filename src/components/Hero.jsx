function Hero({ links }) {
  return (
    <header className="hero">
      <nav className="topbar">
        <img src="/logo.svg" alt="Sunnyside" className="logo" />
        <ul className="menu">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li><a href="#" className="contact">Contact</a></li>
        </ul>
      </nav>

      <h1>WE ARE CREATIVES</h1>
      <img src="/icon-arrow-down.svg" alt="Scroll down" className="arrow" />
    </header>
  )
}

export default Hero
