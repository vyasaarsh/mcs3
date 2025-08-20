interface PageHeroProps {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary opacity-90"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
