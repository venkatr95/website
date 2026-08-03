import { GlassCard } from '../ui/GlassCard'
import emailIcon from '../../assets/email-icon.svg'
import { Form } from '../form/Form'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <GlassCard className="p-8 sm:p-12">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Contact
        </h2>
        <p className="mt-3 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
          Have a product problem worth talking through, or an opportunity to discuss? Reach out.
        </p>
        <a
          href="mailto:be41zehe@gmail.com"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          <img src={emailIcon} alt="" className="h-4 w-4" />
          be41zehe@gmail.com
        </a>

        <div className="mt-8">
          <Form />
        </div>
      </GlassCard>
    </section>
  )
}
