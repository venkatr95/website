import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'

const inputClass =
  'w-full rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-white/40 dark:bg-black/20 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none transition-colors focus:border-indigo-400 dark:focus:border-cyan-400'

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry')
  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [message, setMessage] = useState('')

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: 'bottom-left',
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  })

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          Thanks for getting in touch!
        </h3>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full bg-zinc-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-zinc-900"
        >
          Back to the top
        </button>
        <ToastContainer />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        placeholder="Email"
        id="email"
        type="email"
        name="email"
        className={inputClass}
        onChange={(e) => verifyEmail(e.target.value)}
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        required
        placeholder="Send a message to get started."
        id="message"
        name="message"
        rows={4}
        className={inputClass}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={() => setIsHuman(true)} />
      <button
        type="submit"
        disabled={state.submitting || !validEmail || !message || !isHuman}
        className="self-start rounded-full bg-zinc-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-40 transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Submit
      </button>
      <ToastContainer />
    </form>
  )
}
