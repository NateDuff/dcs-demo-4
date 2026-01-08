export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About TechVenture Labs</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Since 2015, we've been on a mission to democratize access to startup resources and help founders build world-changing companies.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-slate-300 mb-4">
                TechVenture Labs was founded by serial entrepreneurs who understood the challenges of building a startup from scratch. Having raised over $500M in their own ventures, they knew the difference the right support could make.
              </p>
              <p className="text-slate-300 mb-4">
                Today, we operate from offices in San Francisco, New York, London, and Singapore, supporting founders across every continent.
              </p>
              <p className="text-slate-300">
                Our model is simple: we invest in people first. Technology changes, markets shift, but great founders adapt and overcome.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-400">2015</div>
                  <div className="text-slate-400 mt-1">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-400">4</div>
                  <div className="text-slate-400 mt-1">Global Offices</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-400">50+</div>
                  <div className="text-slate-400 mt-1">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-400">150+</div>
                  <div className="text-slate-400 mt-1">Portfolio Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '💡', title: 'Innovation First', desc: 'We back ideas that push boundaries' },
              { icon: '🤝', title: 'Founder-Centric', desc: 'Your success is our only metric' },
              { icon: '🌍', title: 'Global Mindset', desc: 'Building for worldwide impact' },
              { icon: '⚡', title: 'Move Fast', desc: 'Speed wins in the startup game' },
            ].map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
