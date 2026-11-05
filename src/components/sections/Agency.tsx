const rows = [
  {
    title: 'Performance marketing',
    body: 'Paid campaigns tied to tracking we can trust, so spend is judged on results.',
    chips: ['Meta and Google Ads', 'Conversion tracking', 'Landing pages'],
  },
  {
    title: 'Organic content and social',
    body: 'Content that earns consistent views and reach, and keeps a brand visible.',
    chips: ['Content strategy', 'Social media', 'Reach and growth'],
  },
  {
    title: 'Influencer campaigns',
    body: 'Creator-led campaigns that put a brand in front of the right audience.',
    chips: ['Creator partnerships', 'Campaign management'],
  },
  {
    title: 'SEO',
    body: 'Be found for what you sell, with search that compounds over time.',
    chips: ['Technical SEO', 'Content for search', 'Analytics reporting'],
  },
  {
    title: 'Ecommerce websites and Shopify',
    body: 'Fast, clear websites and Shopify stores built to turn visitors into customers.',
    chips: ['Next.js and React', 'Shopify themes', 'Page speed'],
  },
]

export default function Agency() {
  return (
    <section className="sec" id="agency">
      <div className="wrap svc-grid">
        <div className="svc-head">
          <h2>Eminent Business Studio</h2>
          <p>
            The digital agency I co-founded. We work mostly with ecommerce and retail brands, helping them grow online
            and win sales through organic content, performance marketing and influencer campaigns.
          </p>
        </div>
        <div className="rows">
          {rows.map((r) => (
            <div className="row" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
              <ul>
                {r.chips.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
