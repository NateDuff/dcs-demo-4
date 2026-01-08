import { Link } from 'react-router-dom'

export default function Programs() {
  const programs = [
    {
      name: 'Seed Accelerator',
      duration: '12 weeks',
      investment: '$150K',
      equity: '7%',
      icon: '🚀',
      description: 'Our flagship program for early-stage startups ready to scale. Includes intensive mentorship, workspace, and access to our investor network.',
      features: [
        '$150K investment for 7% equity',
        'Dedicated workspace in our SF office',
        'Weekly 1-on-1 with partners',
        'Legal, HR, and accounting support',
        'Demo Day with 200+ investors',
        'Lifetime alumni network access',
      ],
      nextCohort: 'March 2026',
    },
    {
      name: 'Growth Track',
      duration: '6 months',
      investment: '$500K-2M',
      equity: 'Negotiated',
      icon: '📈',
      description: 'For Series A companies looking to expand. Strategic mentorship, executive coaching, and international expansion support.',
      features: [
        'Investment range $500K-2M',
        'Executive leadership coaching',
        'Board advisory support',
        'International market entry help',
        'C-suite recruiting assistance',
        'Strategic partnership intros',
      ],
      nextCohort: 'Rolling applications',
    },
    {
      name: 'AI Lab',
      duration: '16 weeks',
      investment: '$200K',
      equity: '6%',
      icon: '🤖',
      description: 'Specialized program for AI/ML startups. Access to compute resources, AI research partnerships, and domain experts.',
      features: [
        '$200K investment for 6% equity',
        '$100K in GPU cloud credits',
        'Research lab access at Stanford',
        'AI ethics and safety guidance',
        'Technical co-founder matching',
        'Corporate pilot program pipeline',
      ],
      nextCohort: 'April 2026',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Programs</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Three distinct tracks designed to meet founders where they are and accelerate their journey to success.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, idx) => (
              <div key={program.name} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">{program.name}</h2>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm">{program.duration}</span>
                    <span className="bg-accent-500/20 text-accent-400 px-3 py-1 rounded-full text-sm">{program.investment}</span>
                    <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">{program.equity} equity</span>
                  </div>
                  <p className="text-slate-300 mb-6">{program.description}</p>
                  <div className="flex gap-4">
                    <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Apply Now
                    </Link>
                    <span className="text-slate-400 py-2">Next cohort: {program.nextCohort}</span>
                  </div>
                </div>
                <div className={`bg-slate-800/50 border border-slate-700 rounded-xl p-8 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="font-semibold text-white mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-slate-300">
                        <span className="text-primary-400 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'When are applications due?', a: 'Applications are reviewed on a rolling basis. Early applications have an advantage as spots fill up quickly.' },
              { q: 'Do I need a technical co-founder?', a: 'Not necessarily. We evaluate the founding team holistically and can help with co-founder matching.' },
              { q: 'Can international founders apply?', a: 'Absolutely! About 40% of our portfolio companies have international founders. We assist with visa sponsorship.' },
              { q: 'What stage should my startup be?', a: 'For Seed Accelerator: MVP or early traction. For Growth Track: Series A raised or imminent. For AI Lab: Working prototype.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
