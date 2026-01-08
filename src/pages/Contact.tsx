import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Apply to TechVenture Labs</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to accelerate your startup? Tell us about your vision and let's explore how we can help.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-2xl font-bold text-white mb-4">Application Received!</h2>
              <p className="text-slate-300">
                Thank you for applying to TechVenture Labs. Our team will review your application and get back to you within 5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  placeholder="jane@startup.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  placeholder="Startup Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  placeholder="https://startup.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Which program are you interested in? *
                </label>
                <select
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                >
                  <option value="">Select a program</option>
                  <option value="seed">Seed Accelerator ($150K)</option>
                  <option value="growth">Growth Track ($500K-2M)</option>
                  <option value="ai">AI Lab ($200K)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Tell us about your startup *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  placeholder="What problem are you solving? What's your traction? Why now?"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Pitch Deck URL
                </label>
                <input
                  type="url"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  placeholder="https://docsend.com/view/..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white py-4 rounded-lg font-semibold transition-all"
                >
                  Submit Application
                </button>
              </div>

              <p className="text-slate-500 text-sm text-center">
                By submitting, you agree to our privacy policy. We'll review your application within 5 business days.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold text-white mb-2">San Francisco HQ</h3>
              <p className="text-slate-400">123 Innovation Way<br />San Francisco, CA 94107</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-400">apply@techventurelabs.com<br />press@techventurelabs.com</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-400">+1 (415) 555-0123<br />Mon-Fri 9am-6pm PT</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
