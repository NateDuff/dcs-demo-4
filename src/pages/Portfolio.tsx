export default function Portfolio() {
  const companies = [
    { name: 'DataFlow Analytics', category: 'Enterprise SaaS', status: 'Series B', raised: '$45M', year: 2019 },
    { name: 'CloudSecure', category: 'Cybersecurity', status: 'Acquired', raised: '$200M exit', year: 2018 },
    { name: 'MediTrack AI', category: 'Healthcare', status: 'Series A', raised: '$18M', year: 2021 },
    { name: 'FinFlow', category: 'Fintech', status: 'Series C', raised: '$120M', year: 2017 },
    { name: 'GreenRoute', category: 'Climate Tech', status: 'Series A', raised: '$22M', year: 2022 },
    { name: 'CodeMentor AI', category: 'EdTech', status: 'Series B', raised: '$35M', year: 2020 },
    { name: 'SupplyChain.io', category: 'Logistics', status: 'Series B', raised: '$52M', year: 2019 },
    { name: 'NeuralVoice', category: 'AI/ML', status: 'Unicorn', raised: '$180M', year: 2018 },
    { name: 'PropTech Pro', category: 'Real Estate', status: 'Series A', raised: '$15M', year: 2023 },
  ]

  const exits = [
    { company: 'CloudSecure', type: 'Acquisition', value: '$200M', acquirer: 'Cisco', year: 2023 },
    { company: 'ShopStream', type: 'IPO', value: '$1.2B', exchange: 'NASDAQ', year: 2022 },
    { company: 'DataVault', type: 'Acquisition', value: '$85M', acquirer: 'Microsoft', year: 2021 },
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            150+ companies building the future. 12 unicorns. $2.3B in follow-on funding.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-slate-800 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">12</div>
              <div className="text-slate-400 text-sm">Unicorns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">89%</div>
              <div className="text-slate-400 text-sm">Still Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">$2.3B</div>
              <div className="text-slate-400 text-sm">Follow-on Raised</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">15</div>
              <div className="text-slate-400 text-sm">Exits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Companies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div key={company.name} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg"></div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    company.status === 'Unicorn' ? 'bg-yellow-500/20 text-yellow-400' :
                    company.status === 'Acquired' ? 'bg-green-500/20 text-green-400' :
                    'bg-primary-500/20 text-primary-400'
                  }`}>
                    {company.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{company.name}</h3>
                <p className="text-slate-400 text-sm mb-3">{company.category}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">{company.raised}</span>
                  <span className="text-slate-500">Class of {company.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Exits */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Notable Exits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {exits.map((exit) => (
              <div key={exit.company} className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-2">
                  {exit.value}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{exit.company}</h3>
                <p className="text-slate-400 mb-4">
                  {exit.type} {exit.acquirer ? `by ${exit.acquirer}` : `on ${exit.exchange}`}
                </p>
                <span className="text-slate-500 text-sm">{exit.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
