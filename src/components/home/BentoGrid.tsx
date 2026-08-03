import { ExecutiveSummary } from './ExecutiveSummary'
import { CareerTimeline } from './CareerTimeline'
import { MetricsMatrix } from './MetricsMatrix'
import { LocationRadar } from './LocationRadar'

export function BentoGrid() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-16">
      <div className="grid grid-cols-12 gap-4 sm:gap-5">
        <ExecutiveSummary />
        <CareerTimeline />
        <MetricsMatrix />
        <LocationRadar />
      </div>
    </section>
  )
}
