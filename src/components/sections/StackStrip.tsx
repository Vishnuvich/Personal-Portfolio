const stack = [
  'Next.js',
  'React',
  'Angular',
  'TypeScript',
  'Shopify',
  'Tailwind CSS',
  'Firebase',
  'Prisma',
  'Sanity',
  'Google Analytics',
]

export default function StackStrip() {
  return (
    <div className="stack">
      <div className="wrap">
        <b>I build with</b>
        <ul>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
