const services = [
  {
    title: "Custom Software",
    description:
      "Production-grade platforms, operational systems, dashboards, and customer-facing web apps.",
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

const approachSteps = [
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

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "#contact" },
];

const serviceNumberStyles = [
  "text-[#c45a2c]",
  "text-[#2f5f8f]",
  "text-[#171717]",
  "text-[#c45a2c]",
  "text-[#2f5f8f]",
  "text-[#171717]",
];

const serviceCardStyles = [
  "border-[#171717]/10 bg-white/76",
  "border-[#171717]/10 bg-white/76",
  "border-[#171717]/10 bg-white/76",
  "border-[#171717]/10 bg-white/76",
  "border-[#171717]/10 bg-white/76",
  "border-[#171717]/10 bg-white/76",
];

const approachNumberStyles = [
  "text-[#c45a2c]",
  "text-[#2f5f8f]",
  "text-[#171717]",
  "text-[#c45a2c]",
];

const processStats = [
  { value: "01", label: "Map the workflow" },
  { value: "02", label: "Design the system" },
  { value: "03", label: "Build the product" },
];

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
const bookingEmbedUrl = bookingUrl ? getBookingEmbedUrl(bookingUrl) : undefined;
const contactFormAction =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "mailto:hello@yamboostudio.com";

function getBookingEmbedUrl(url: string) {
  try {
    const embedUrl = new URL(url);

    if (embedUrl.hostname.includes("calendly.com")) {
      embedUrl.searchParams.set("hide_gdpr_banner", "1");
      embedUrl.searchParams.set("primary_color", "171717");
    }

    if (embedUrl.hostname.includes("cal.com")) {
      embedUrl.searchParams.set("theme", "light");
      embedUrl.searchParams.set("layout", "month_view");
    }

    return embedUrl.toString();
  } catch {
    return url;
  }
}

export default function Home() {
  const currentYear = new Date().getFullYear();

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
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="rounded bg-[#171717] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#2b2b2b]"
          href="#book"
        >
          Book a consultation
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-28 lg:pt-20">
        <div>
          <p className="mb-5 inline-flex rounded bg-[#f3e8dc] px-3 py-2 text-sm font-semibold tracking-[0.2em] text-[#8b3f22] uppercase">
Product-led engineering studio          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-[#171717] sm:text-6xl lg:text-7xl">
            Yamboo Studio
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-7 text-[#3f403b] sm:text-xl sm:leading-8">
Your strategic partner for technology consulting, product engineering and AI automation          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded bg-[#171717] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
              href="#book"
            >
              Book a consultation
            </a>
            <a
              className="rounded border border-[#171717]/15 bg-white/55 px-6 py-3.5 text-center text-sm font-semibold text-[#171717] transition hover:border-[#171717]/35 hover:bg-white"
              href="#services"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="studio-panel relative rounded-lg border border-[#171717]/10 bg-white/75 p-4 backdrop-blur">
          <div className="rounded-md border border-[#171717]/10 bg-[#faf9f5] p-4">
            <div className="flex items-center justify-between pb-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c45a2c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2f5f8f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#171717]" />
              </div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#65665f] uppercase">
                Studio system
              </p>
            </div>

            <div className="min-h-[440px] rounded-md bg-[#171717] p-5 text-white">
              <div className="grid h-full min-h-[400px] gap-3 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-between rounded-md bg-[#f3e8dc] p-5 text-[#171717]">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-[#8b3f22] uppercase">
                      Operating view
                    </p>
                    <p className="mt-8 text-5xl font-semibold leading-none">
                      3
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#3f403b]">
                      Product, AI, and automation working as one system.
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <div className="hero-slide grid gap-2">
                      {["Plan", "Build", "Scale", "Launch", "Improve", "Plan"].map(
                        (item, index) => (
                          <div
                            className="flex items-center justify-between rounded border border-[#171717]/10 bg-white/70 px-3 py-2 text-xs font-semibold"
                            key={`${item}-${index}`}
                          >
                            <span>{item}</span>
                            <span
                              className={[
                                "h-2 w-2 rounded-full",
                                index % 3 === 0 && "bg-[#c45a2c]",
                                index % 3 === 1 && "bg-[#2f5f8f]",
                                index % 3 === 2 && "bg-[#171717]",
                              ]
                                .filter(Boolean)
                                .join(" ")}
                            />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-md border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold tracking-[0.16em] text-white/55 uppercase">
                        System map
                      </p>
                      <p className="text-xs font-semibold text-[#d9c7b3]">
                        Live model
                      </p>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {["Product", "AI", "Ops"].map((item, index) => (
                        <div
                          className={[
                            "hero-float rounded p-3 text-xs font-semibold",
                            index === 0 && "bg-[#c45a2c] text-white",
                            index === 1 && "bg-[#2f5f8f] text-white",
                            index === 2 && "bg-white text-[#171717]",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          key={item}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 grid gap-3">
                      {[
                        ["Workflow model", "86%"],
                        ["AI assistance", "64%"],
                        ["Automation layer", "78%"],
                      ].map(([label, value], index) => (
                        <div key={label}>
                          <div className="mb-2 flex justify-between text-xs text-white/55">
                            <span>{label}</span>
                            <span>{value}</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/10">
                            <div
                              className={[
                                "hero-progress h-2 rounded-full bg-[#d9c7b3]",
                                index === 1 && "hero-progress-delay-1",
                                index === 2 && "hero-progress-delay-2",
                              ]
                                .filter(Boolean)
                                .join(" ")}
                              style={{ width: value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-md bg-white p-4 text-[#171717]">
                    <p className="text-sm font-semibold">
                      Production-grade software, AI tools, and automation
                      systems for growing businesses.
                    </p>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {["Secure", "Scalable", "Useful"].map((item) => (
                        <span
                          className="rounded border border-[#171717]/10 bg-[#faf9f5] px-2 py-2 text-center text-xs font-semibold text-[#65665f]"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#171717]/10 bg-[#171717] py-5">
        <div className="flex w-max gap-4 whitespace-nowrap marquee">
          {[...signals, ...signals].map((signal, index) => (
            <span className="rounded border border-white/12 px-5 py-2 text-sm text-white/72" key={`${signal}-${index}`}>
              {signal}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#171717] uppercase">
              How we think
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#171717] sm:text-5xl">
              Visualizing the system before building it.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#65665f]">
              We turn business workflows into product maps, AI workflows, and
              automation logic before implementation begins.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {processStats.map((stat) => (
              <div
                className="rounded-lg border border-[#171717]/10 bg-white/70 p-5"
                key={stat.label}
              >
                <p className="text-5xl font-semibold leading-none text-[#171717]">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-5 text-[#65665f]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-[#171717]/10 bg-white/70 p-5 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Workflow blueprint",
                label: "Map",
                detail: "People, steps, data, and systems.",
                color: "bg-[#c45a2c]",
                surface: "bg-[#fbf4ec]",
                blockOne: "bg-[#f3e8dc]",
                blockTwo: "bg-[#fff8ef]",
                blockThree: "bg-[#c45a2c]",
              },
              {
                title: "Solution architecture",
                label: "Shape",
                detail: "Product surface, AI layer, and integrations.",
                color: "bg-[#2f5f8f]",
                surface: "bg-[#f0f5f8]",
                blockOne: "bg-[#e2edf3]",
                blockTwo: "bg-white",
                blockThree: "bg-[#2f5f8f]",
              },
              {
                title: "Delivery roadmap",
                label: "Ship",
                detail: "Milestones, risks, ownership, and launch path.",
                color: "bg-[#171717]",
                surface: "bg-[#f4f3ee]",
                blockOne: "bg-[#e7e3da]",
                blockTwo: "bg-white",
                blockThree: "bg-[#171717]",
              },
            ].map((item, index) => (
              <div className={["relative min-h-64 rounded-md p-5", item.surface].join(" ")} key={item.title}>
                <div className="flex items-center justify-between">
                  <span className={["h-3 w-3 rounded-full", item.color].join(" ")} />
                  <span className="text-xs font-semibold text-[#65665f]">
                    0{index + 1}
                  </span>
                </div>
                <div className="mt-10 h-24 rounded border border-[#171717]/10 bg-white/72 p-3">
                  <div className="h-2 w-2/3 rounded-full bg-[#171717]/20" />
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className={["h-10 rounded", item.blockOne].join(" ")} />
                    <div className={["h-10 rounded", item.blockTwo].join(" ")} />
                    <div className={["h-10 rounded", item.blockThree].join(" ")} />
                  </div>
                </div>
                <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-[#8b3f22] uppercase">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#171717]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#65665f]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl scroll-mt-6 sm:scroll-mt-8" id="services">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#171717] uppercase">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#171717] sm:text-5xl">
            Capabilities for serious software projects.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              className={[
                "min-h-64 rounded-lg border p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_60px_rgba(17,24,39,0.08)]",
                serviceCardStyles[index],
              ]
                .filter(Boolean)
                .join(" ")}
              key={service.title}
            >
              <div className="flex items-center justify-between">
                <p className={["text-sm font-semibold", serviceNumberStyles[index]].join(" ")}>
                  0{index + 1}
                </p>
                <span
                  className={[
                    "h-2 w-8 rounded-full",
                    index % 3 === 0 && "bg-[#c45a2c]",
                    index % 3 === 1 && "bg-[#2f5f8f]",
                    index % 3 === 2 && "bg-[#171717]",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              </div>
              <h3 className="mt-16 text-2xl font-semibold text-[#171717]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#65665f]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f1ece3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="scroll-mt-6 sm:scroll-mt-8" id="approach">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#171717] uppercase">
              Approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#171717] sm:text-5xl">
              Expert-led delivery without the agency theatre.
            </h2>
          </div>
          <div className="grid gap-4">
            {approachSteps.map((step, index) => (
              <div
                className="grid gap-5 rounded-lg border border-[#171717]/10 bg-[#f6f8f6]/75 p-5 sm:grid-cols-[72px_1fr]"
                key={step.title}
              >
                <span className={["text-sm font-semibold", approachNumberStyles[index]].join(" ")}>
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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 rounded-lg border border-[#171717]/10 bg-[#f8f2e8] p-6 backdrop-blur sm:p-10 lg:grid-cols-[0.72fr_1fr] lg:p-12">
          <div className="scroll-mt-6 sm:scroll-mt-8" id="book">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#171717] uppercase">
              Book a consultation
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#171717] sm:text-5xl">
              Bring the business problem. We will help shape the technical path.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#65665f]">
              A focused consultation is best when you already have a workflow,
              product idea, automation opportunity, or technical decision to
              unpack.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-[#3f403b]">
              {["Product and workflow fit", "AI and automation opportunities", "Build path, scope, and next steps"].map(
                (item, index) => (
                  <div className="flex items-center gap-3" key={item}>
                    <span
                      className={[
                        "h-2 w-2 rounded-full",
                        index === 0 && "bg-[#c45a2c]",
                        index === 1 && "bg-[#2f5f8f]",
                        index === 2 && "bg-[#171717]",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#171717]/10 bg-white">
            {bookingEmbedUrl ? (
              <iframe
                className="h-[680px] w-full border-0"
                src={bookingEmbedUrl}
                title="Book a consultation with Yamboo Studio"
              />
            ) : (
              <div className="grid min-h-[520px] content-between p-6 sm:p-8">
                <div>
                  <p className="text-sm font-semibold tracking-[0.16em] text-[#171717] uppercase">
                    Calendar
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[#171717]">
                    Consultation availability
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-[#65665f]">
                    Booking will open here once the scheduling link is connected.
                    Until then, enquiries can come through the contact form.
                  </p>
                </div>
                <a
                  className="rounded bg-[#171717] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
                  href="#contact"
                >
                  Send an enquiry
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 rounded-lg border border-[#171717]/10 bg-[#fbf8f1] p-6 backdrop-blur sm:p-10 lg:grid-cols-[0.85fr_1fr] lg:p-12">
          <div className="scroll-mt-6 sm:scroll-mt-8" id="contact">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#171717] uppercase">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#171717] sm:text-5xl">
              Prefer to send a message first?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#65665f]">
              Tell us what you are trying to improve, automate, or build. We
              will review it and come back with a practical next step.
            </p>
          </div>
          <form
            action={contactFormAction}
            className="grid gap-4 rounded-lg border border-[#171717]/10 bg-white/72 p-5 sm:p-7"
            encType="text/plain"
            method="post"
          >
            <label className="grid gap-2 text-sm font-medium text-[#3f403b]">
              Name
              <input
                className="h-12 rounded border border-[#171717]/12 bg-white px-4 text-[#171717] outline-none transition placeholder:text-[#65665f]/55 focus:border-[#c45a2c]"
                name="name"
                placeholder="Your name"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#3f403b]">
              Email
              <input
                className="h-12 rounded border border-[#171717]/12 bg-white px-4 text-[#171717] outline-none transition placeholder:text-[#65665f]/55 focus:border-[#c45a2c]"
                name="email"
                placeholder="you@company.com"
                required
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#3f403b]">
              Company
              <input
                className="h-12 rounded border border-[#171717]/12 bg-white px-4 text-[#171717] outline-none transition placeholder:text-[#65665f]/55 focus:border-[#c45a2c]"
                name="company"
                placeholder="Company name"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#3f403b]">
              Project type
              <select
                className="h-12 rounded border border-[#171717]/12 bg-white px-4 text-[#171717] outline-none transition focus:border-[#c45a2c]"
                name="project_type"
              >
                <option>Custom software</option>
                <option>AI-powered tool</option>
                <option>Workflow automation</option>
                <option>Technical consulting</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#3f403b]">
              Message
              <textarea
                className="min-h-36 rounded border border-[#171717]/12 bg-white px-4 py-3 text-[#171717] outline-none transition placeholder:text-[#65665f]/55 focus:border-[#c45a2c]"
                name="message"
                placeholder="A custom platform, AI workflow, automation system..."
                required
              />
            </label>
            <button
              className="mt-2 rounded bg-[#171717] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[#171717]/10 px-5 py-8 text-sm text-[#65665f] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {currentYear} Yamboo Studio</p>
        <p>Modern software, AI, and automation.</p>
      </footer>
    </main>
  );
}
