import { useForm, ValidationError } from '@formspree/react'

function OutreachForm() {
  const [state, handleSubmit] = useForm("contactForm...")
  if (state.succeeded) {
      return <p>Thanks for joining!</p>
  }
  return (
      <form 
      action='https://formspree.io/f/xleqgkgk'
      method='POST'
      onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <label>
        School
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default OutreachForm