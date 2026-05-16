const services = [
  {
    title: "Custom Software",
    description:
      "Purpose-built platforms, internal tools, dashboards, and customer-facing web apps.",
  },
  {
    title: "AI-Powered Tools",
    description:
      "Practical AI assistants, data workflows, content systems, and product features.",
  },
  {
    title: "Workflow Automation",
    description:
      "Connected operations across CRMs, spreadsheets, APIs, notifications, and approvals.",
  },
  {
    title: "Product Engineering",
    description:
      "Modern architecture, UX-minded delivery, scalable codebases, and shipping discipline.",
  },
  {
    title: "Technical Consulting",
    description:
      "Roadmaps, audits, vendor selection, build-versus-buy decisions, and execution support.",
  },
  {
    title: "Cloud & Integration",
    description:
      "Reliable deployments, third-party integrations, API layers, and production foundations.",
  },
];

const process = [
  {
    title: "Discover the business workflow",
    description:
      "We map the current process, business goals, constraints, and the systems already in play.",
  },
  {
    title: "Design the solution architecture",
    description:
      "We shape the product experience, data flow, AI layer, integrations, and delivery roadmap.",
  },
  {
    title: "Build in focused delivery cycles",
    description:
      "We move in practical sprints with visible progress, clear decisions, and production-quality engineering.",
  },
  {
    title: "Launch, measure, and improve",
    description:
      "We help release the system, monitor what matters, and evolve it as the business grows.",
  },
];

const signals = [
  "Strategy",
  "Software",
  "AI systems",
  "Automation",
  "Integrations",
  "Consulting",
  "Product delivery",
  "Cloud",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="noise" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Yamboo Studio home">
          <span className="grid h-9 w-9 place-items-center rounded bg-[#171717] text-sm font-semibold text-white">
            YS
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-[#171717] uppercase">
            Yamboo Studio
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-[#4d4e48] md:flex">
          <a className="transition hover:text-[#171717]" href="#services">
            Services
          </a>
          <a className="transition hover:text-[#171717]" href="#approach">
            Approach
          </a>
          <a className="transition hover:text-[#171717]" href="#contact">
            Contact
          </a>
        </nav>
        <a
          className="rounded bg-[#171717] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#244b47]"
          href="#contact"
        >
          Book a consultation
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-28 lg:pt-20">
        <div>
          <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-[#2f6b63] uppercase">
            Product studio and technology partner
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-[#171717] sm:text-6xl lg:text-7xl">
            Yamboo Studio
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-[#3f403b] sm:text-2xl sm:leading-9">
            Your technology partner for modern software, AI, and automation.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#65665f] sm:text-lg">
            We help businesses design, build, and scale custom digital products,
            AI-powered tools, and workflow automation systems.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded bg-[#171717] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#244b47]"
              href="#contact"
            >
              Book a consultation
            </a>
            <a
              className="rounded border border-[#171717]/15 bg-white/55 px-6 py-3.5 text-center text-sm font-semibold text-[#171717] transition hover:border-[#244b47]/35 hover:bg-white"
              href="#services"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="studio-panel relative rounded-lg border border-[#171717]/10 bg-white/70 p-4 backdrop-blur">
          <div className="rounded-md border border-[#171717]/10 bg-[#f9faf7] p-4">
            <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#68736b] uppercase">
                  Solution workspace
                </p>
                <h2 className="mt-2 text-xl font-semibold text-[#171717]">
                  Operating system for growth
                </h2>
              </div>
              <div className="rounded bg-[#244b47] px-3 py-2 text-xs font-semibold text-white">
                Live build
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-[#171717] p-5 text-white">
                <p className="text-xs uppercase tracking-[0.16em] text-white/55">
                  AI workflow
                </p>
                <p className="mt-8 text-4xl font-semibold">42%</p>
                <p className="mt-2 text-sm text-white/65">
                  Less manual review time
                </p>
              </div>
              <div className="rounded-md border border-[#171717]/10 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#7b766d]">
                  Integration map
                </p>
                <div className="mt-8 grid grid-cols-3 gap-2">
                  {["CRM", "API", "ERP", "DB", "AI", "Ops"].map((item) => (
                    <span
                      className="rounded border border-[#171717]/10 bg-[#f6f8f6] py-2 text-center text-xs font-semibold text-[#3f403b]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-md border border-[#171717]/10 bg-white p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-[#171717]">
                  Product engineering sprint
                </p>
                <p className="text-sm text-[#65665f]">Week 03</p>
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  ["Workflow model", "92%"],
                  ["AI prompt layer", "78%"],
                  ["Admin dashboard", "64%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-xs text-[#65665f]">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-2 rounded bg-[#dfe7df]">
                      <div
                        className="h-2 rounded bg-[#2f6b63]"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#171717]/10 bg-[#171717] py-5 text-white">
        <div className="flex w-max gap-4 whitespace-nowrap marquee">
          {[...signals, ...signals].map((signal, index) => (
            <span
              className="rounded border border-white/12 px-5 py-2 text-sm text-white/72"
              key={`${signal}-${index}`}
            >
              {signal}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28" id="services">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#2f6b63] uppercase">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#171717] sm:text-5xl">
            Strategy, software, AI, and automation under one roof.
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-[#171717]/10 bg-[#171717]/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article className="bg-[#f6f8f6] p-7" key={service.title}>
              <p className="text-sm font-semibold text-[#2f6b63]">
                0{index + 1}
              </p>
              <h3 className="mt-10 text-xl font-semibold text-[#171717]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#65665f]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e4ebe4] px-5 py-20 sm:px-8 lg:py-28" id="approach">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#2f6b63] uppercase">
              Approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#171717] sm:text-5xl">
              Expert-led delivery without the agency theatre.
            </h2>
          </div>
          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                className="grid gap-5 rounded-lg border border-[#171717]/10 bg-[#f6f8f6]/75 p-5 sm:grid-cols-[72px_1fr]"
                key={step.title}
              >
                <span className="text-sm font-semibold text-[#2f6b63]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-[#171717]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#65665f]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28" id="contact">
        <div className="grid gap-12 rounded-lg border border-[#171717]/10 bg-white/65 p-6 backdrop-blur sm:p-10 lg:grid-cols-[1fr_0.78fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#2f6b63] uppercase">
              Book a consultation
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#171717] sm:text-5xl">
              Bring the business problem. We will help shape the technical path.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#65665f]">
              Share what you are trying to improve, automate, or build. We will
              follow up with a focused next step.
            </p>
          </div>
          <form className="grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-[#3f403b]">
              Name
              <input
                className="h-12 rounded border border-[#171717]/12 bg-[#f6f8f6] px-4 text-[#171717] outline-none transition focus:border-[#2f6b63]"
                placeholder="Your name"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#3f403b]">
              Email
              <input
                className="h-12 rounded border border-[#171717]/12 bg-[#f6f8f6] px-4 text-[#171717] outline-none transition focus:border-[#2f6b63]"
                placeholder="you@company.com"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#3f403b]">
              What are you building?
              <textarea
                className="min-h-32 rounded border border-[#171717]/12 bg-[#f6f8f6] px-4 py-3 text-[#171717] outline-none transition focus:border-[#2f6b63]"
                placeholder="A custom platform, AI workflow, automation system..."
              />
            </label>
            <button
              className="mt-2 rounded bg-[#171717] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#244b47]"
              type="button"
            >
              Request consultation
            </button>
          </form>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[#171717]/10 px-5 py-8 text-sm text-[#65665f] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Yamboo Studio</p>
        <p>Modern software, AI, and automation.</p>
      </footer>
    </main>
  );
}
