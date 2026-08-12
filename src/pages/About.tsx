import { useTextContent, useSEO } from '@duffcloudservices/cms-react'

export default function About() {
  const t = useTextContent('about')
  useSEO('about')

  return (
    <>
      {/* Hero */}
      <section 
        data-section="hero" 
        data-section-label="Hero Banner"
        className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 data-text-key="hero.title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('hero.title', 'About TechVenture Labs')}
          </h1>
          <p data-text-key="hero.subtitle" className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('hero.subtitle', "Since 2015, we've been on a mission to democratize access to startup resources and help founders build world-changing companies.")}
          </p>
        </div>
      </section>

      {/* Story */}
      <section 
        data-section="story" 
        data-section-label="Our Story"
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 data-text-key="story.title" className="text-3xl font-bold text-white mb-6">
                {t('story.title', 'Our Story')}
              </h2>
              <p data-text-key="story.paragraph1" className="text-slate-300 mb-4">
                {t('story.paragraph1', 'TechVenture Labs was founded by serial entrepreneurs who understood the challenges of building a startup from scratch. Having raised over $500M in their own ventures, they knew the difference the right support could make.')}
              </p>
              <p data-text-key="story.paragraph2" className="text-slate-300 mb-4">
                {t('story.paragraph2', 'Today, we operate from offices in San Francisco, New York, London, and Singapore, supporting founders across every continent.')}
              </p>
              <p data-text-key="story.paragraph3" className="text-slate-300">
                {t('story.paragraph3', 'Our model is simple: we invest in people first. Technology changes, markets shift, but great founders adapt and overcome.')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div data-text-key="stats.founded" className="text-4xl font-bold text-primary-400">
                    {t('stats.founded', '2015')}
                  </div>
                  <div data-text-key="stats.founded.label" className="text-slate-400 mt-1">
                    {t('stats.founded.label', 'Founded')}
                  </div>
                </div>
                <div className="text-center">
                  <div data-text-key="stats.offices" className="text-4xl font-bold text-primary-400">
                    {t('stats.offices', '4')}
                  </div>
                  <div data-text-key="stats.offices.label" className="text-slate-400 mt-1">
                    {t('stats.offices.label', 'Global Offices')}
                  </div>
                </div>
                <div className="text-center">
                  <div data-text-key="stats.team" className="text-4xl font-bold text-primary-400">
                    {t('stats.team', '50+')}
                  </div>
                  <div data-text-key="stats.team.label" className="text-slate-400 mt-1">
                    {t('stats.team.label', 'Team Members')}
                  </div>
                </div>
                <div className="text-center">
                  <div data-text-key="stats.portfolio" className="text-4xl font-bold text-primary-400">
                    {t('stats.portfolio', '150+')}
                  </div>
                  <div data-text-key="stats.portfolio.label" className="text-slate-400 mt-1">
                    {t('stats.portfolio.label', 'Portfolio Companies')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section 
        data-section="team" 
        data-section-label="Leadership Team"
        data-dynamic="true"
        className="py-20 bg-slate-800/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-text-key="team.title" className="text-3xl font-bold text-white text-center mb-12">
            {t('team.title', 'Leadership Team')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Alexandra Rivera', role: 'Managing Partner', bio: 'Former founder of CloudScale (exit: $340M). 15 years in tech.' },
              { name: 'James Mitchell', role: 'Partner, Growth', bio: 'Ex-Google Ventures. Led 40+ Series A rounds.' },
              { name: 'Dr. Priya Sharma', role: 'Partner, AI Lab', bio: 'Stanford AI PhD. Former Head of ML at Meta.' },
            ].map((person) => (
              <div key={person.name} className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                <p className="text-primary-400 mb-2">{person.role}</p>
                <p className="text-slate-400 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section 
        data-section="values" 
        data-section-label="Our Values"
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-text-key="values.title" className="text-3xl font-bold text-white text-center mb-12">
            {t('values.title', 'Our Values')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '💡', titleKey: 'values.innovation.title', descKey: 'values.innovation.desc', title: 'Innovation First', desc: 'We back ideas that push boundaries' },
              { icon: '🤝', titleKey: 'values.founder.title', descKey: 'values.founder.desc', title: 'Founder-Centric', desc: 'Your success is our only metric' },
              { icon: '🌍', titleKey: 'values.global.title', descKey: 'values.global.desc', title: 'Global Mindset', desc: 'Building for worldwide impact' },
              { icon: '⚡', titleKey: 'values.speed.title', descKey: 'values.speed.desc', title: 'Move Fast', desc: 'Speed wins in the startup game' },
            ].map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 data-text-key={value.titleKey} className="font-semibold text-white mb-2">
                  {t(value.titleKey, value.title)}
                </h3>
                <p data-text-key={value.descKey} className="text-slate-400 text-sm">
                  {t(value.descKey, value.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
