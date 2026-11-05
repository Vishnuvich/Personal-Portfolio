const principles = [
  {
    k: 'Build and grow under one roof',
    t: 'I write the code and run the campaigns myself, so nothing is lost between design, engineering and marketing.',
  },
  {
    k: 'Measure from day one',
    t: 'Tracking is designed into every build, so decisions come from numbers and not guesses.',
  },
  {
    k: 'Own your assets',
    t: 'Content lives in a CMS you control, not locked in anyone’s tooling.',
  },
  {
    k: 'Keep learning in public',
    t: 'I write down what I figure out, on the blog and on Medium.',
  },
]

export default function Principles() {
  return (
    <section className="sec" id="approach">
      <div className="wrap">
        <h2 style={{ maxWidth: '14ch' }}>How I work</h2>
        <div className="cmp principles">
          {principles.map((p) => (
            <div className="r" key={p.k}>
              <span className="k">{p.k}</span>
              <span className="t">{p.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
