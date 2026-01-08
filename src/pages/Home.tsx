import { Link } from 'react-router-dom'
import { useTextContent, useSEO } from '@duffcloudservices/cms-react'

export default function Home() {
  const t = useTextContent('home')
  useSEO('home')

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-slate-900 to-accent-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-down">
            {t('hero.title', 'Launch Your ')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              {t('hero.highlight', 'Tech Startup')}
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
            {t('hero.subtitle', 'TechVenture Labs accelerates innovation. We provide funding, mentorship, and resources to turn your vision into a thriving business.')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-400">
            <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105">
              {t('hero.cta.primary', 'Apply to Our Program')}
            </Link>
            <Link to="/programs" className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105">
              {t('hero.cta.secondary', 'Learn More')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: t('stats.startups', '150+'), label: t('stats.startups.label', 'Startups Launched') },
              { value: t('stats.funding', '$2.3B'), label: t('stats.funding.label', 'Funding Raised') },
              { value: t('stats.success', '89%'), label: t('stats.success.label', 'Success Rate') },
              { value: t('stats.unicorns', '12'), label: t('stats.unicorns.label', 'Unicorns Created') },
            ].map((stat, index) => (
              <div key={stat.label} className={`text-center animate-fade-in-up delay-${(index + 1) * 100}`}>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                  {stat.value}
                </div>
                <div className="text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 animate-fade-in">
            {t('programs.title', 'Our Programs')}
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto animate-fade-in delay-100">
            {t('programs.subtitle', 'Tailored acceleration tracks to match your startup\'s stage and needs')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Seed Accelerator',
                description: 'For early-stage startups ready to scale. 12-week intensive program with $150K investment.',
                icon: '🚀',
                features: ['$150K Investment', '12-Week Program', 'Office Space', 'Legal Support'],
              },
              {
                title: 'Growth Track',
                description: 'For Series A companies looking to expand. Strategic mentorship and network access.',
                icon: '📈',
                features: ['$500K-2M Investment', '6-Month Program', 'Global Network', 'Executive Coaching'],
              },
              {
                title: 'AI Lab',
                description: 'Specialized program for AI/ML startups. Access to compute resources and AI experts.',
                icon: '🤖',
                features: ['GPU Credits', 'AI Mentors', 'Research Partnership', 'Demo Days'],
              },
            ].map((program, index) => (
              <div 
                key={program.title} 
                className={`bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-primary-500/50 transition-all hover-lift animate-fade-in-up delay-${(index + 2) * 100}`}
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                <p className="text-slate-400 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="text-slate-300 flex items-center gap-2">
                      <span className="text-primary-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 animate-fade-in">
            {t('stories.title', 'Success Stories')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "TechVenture Labs was instrumental in our Series B. Their network opened doors we couldn't have accessed alone.",
                author: 'Sarah Chen',
                role: 'CEO, DataFlow Analytics',
                raised: 'Raised $45M Series B',
              },
              {
                quote: "The mentorship quality here is unmatched. Every advisor genuinely cares about your success.",
                author: 'Marcus Williams',
                role: 'Founder, CloudSecure',
                raised: 'Acquired for $200M',
              },
            ].map((testimonial, index) => (
              <div 
                key={testimonial.author} 
                className={`bg-slate-900 border border-slate-700 rounded-xl p-8 hover-lift animate-fade-in-up delay-${(index + 1) * 200}`}
              >
                <p className="text-xl text-slate-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                  <div className="text-primary-400 font-semibold text-sm">{testimonial.raised}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Build the Future?
          </h2>
          <p className="text-slate-400 text-lg mb-8 animate-fade-in-up delay-100">
            Applications for our Spring 2026 cohort are now open. Limited spots available.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 animate-fade-in-up delay-200"
          >
            Apply Now →
          </Link>
        </div>
      </section>
    </>
  )
}
