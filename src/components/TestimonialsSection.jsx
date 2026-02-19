function TestimonialsSection({ testimonials }) {
  return (
    <section className="testimonials">
      <h4>CLIENT TESTIMONIALS</h4>
      <div className="cards">
        {testimonials.map((item) => (
          <article key={item.name} className="card">
            <img src={item.image} alt={item.name} />
            <p>{item.text}</p>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
