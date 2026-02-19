import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TestimonialsSection from './components/TestimonialsSection'
import {
  galleryImages,
  mainLinks,
  marketingBlocks,
  serviceBlocks,
  socials,
  testimonials
} from './data/content'

function App() {
  return (
    <div className="page">
      <Hero links={mainLinks} />

      <main>
        <section className="grid-two">
          {marketingBlocks.map((block) => (
            block.type === 'text'
              ? (
                <article
                  key={block.title}
                  className="text-block"
                >
                  <h2 className="text-block-title">{block.title}</h2>
                  <p className="text-block-text">{block.text}</p>
                  <a href="#" className={`text-block-link text-block-link--${block.accent}`}>
                    Learn more
                  </a>
                </article>
                )
              : <img key={block.src} src={block.src} alt={block.alt} className="cover-image" />
          ))}
        </section>

        <section className="grid-two services">
          {serviceBlocks.map((service) => (
            <article
              key={service.title}
              className={`service service-${service.type}`}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </section>

        <TestimonialsSection testimonials={testimonials} />

        <section className="gallery">
          {galleryImages.map((item) => (
            <img key={item.src} src={item.src} alt={item.alt} />
          ))}
        </section>
      </main>

      <Footer links={mainLinks} socials={socials} />
    </div>
  )
}

export default App
