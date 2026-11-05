const skills = [
  'JavaScript',
  'TypeScript',
  'Angular',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Shopify',
  'Firebase',
  'Prisma ORM',
  'Auth.js',
  'Google Analytics',
  'Git',
]

const facts = [
  ['Based in', 'Kochi, Kerala, India'],
  ['Experience', '5+ years in software, now full-time in business'],
  ['Companies', 'Co-founder of several companies'],
  ['Writing', 'Medium and the blog'],
]

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap about-grid">
        <div>
          <h2>About me</h2>
          <div className="bio">
            <p>
              I’m Vishnu, from Kochi, Kerala. I started in software, learning to build for the web, and found I enjoyed
              the business side of what I was building even more.
            </p>
            <p>
              Today I split my time between my companies, my retail stores and the new brand I’m working on. I still
              write code, which is why I can build the systems my businesses run on.
            </p>
            <p>Outside work I like electronics and learning new tools.</p>
          </div>
        </div>
        <div>
          <ul className="facts">
            {facts.map(([k, v]) => (
              <li key={k}>
                <b>{k}</b>
                <span>{v}</span>
              </li>
            ))}
          </ul>
          <div className="skills" style={{ marginTop: 44 }}>
            <b>Technologies I work with</b>
            <ul className="chips">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
