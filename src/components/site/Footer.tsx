import { site } from '@/content/site'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {site.name} · Kochi, Kerala, India</span>
        <nav aria-label="Elsewhere">
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={site.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={site.links.medium} target="_blank" rel="noreferrer">Medium</a>
        </nav>
        <span>Built with Next.js and Sanity.</span>
      </div>
    </footer>
  )
}
