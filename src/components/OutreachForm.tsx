/* Formspree only allows 50 submissions each month while using the free version */
import './OutreachForm.css'
import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

interface FormData {
  school: string
  fullName: string
  position: string
  email: string
  message: string
}

let errorMessage: JSX.Element

function OutreachForm() {
  const { handleSubmit, control, reset } = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)
  const [isFieldEmpty, setIsFieldEmpty] = useState(false)

  isFieldEmpty ? errorMessage = <p className='error-message'>Error: Please Fill Out Required Fields</p> : errorMessage = <></>
  

  /* onSubmit function is responsible for sending a POST request to the Formspree endpoint
   with the form data when the form is submitted. It uses fetch for the network request and includes 
   error handling using try-catch to manage potential issues during the submission process */
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true)
    if (!data.fullName || !data.email || !data.message) {
      setIsFieldEmpty(true)
      setIsLoading(false)
      return
    }
    setIsFieldEmpty(false)
    try {
      const response = await fetch('https://formspree.io/f/xleqgkgk', { // await is used to wait while the formspree endpoint is 'fetched'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specifies that the request body is in JSON format.
        },
        body: JSON.stringify(data), // Converts the form data (data variable) to a JSON string and sends it as the request body.
      })

      /* Checks if the HTTP response status is in the 200-299 range (indicating success).
      If successful, logs a success message. Otherwise, logs an error message. */
      if (response.ok) { // .ok holds a Boolean value indicatting about status ^^
        console.log('Form submitted successfully')
        // Reset the form after successful submission using react-hook-form reset
        reset()
      } else {
        console.error('Error submitting form')
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error) // catches errors that might occur in try block
    }
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='outreach-form'>
      <div className='four-field-container'>
        <div className='field-container'>
          <label className='form-field'>
            SCHOOL: 
            </label>
            <Controller
              name="school"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} className='input-field' placeholder='Enter School'/>}
            />
        </div>

        <div className='field-container'>
          <label className='form-field'>
            FULL NAME:<span style={{ color: "red" }}>&#42;</span>
            </label>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} className='input-field' placeholder='Enter Full Name'/>}
            />
        </div>

        <div className='field-container'>
          <label className='form-field'>
            POSITION:
            </label>
            <Controller
              name="position"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} className='input-field' placeholder='Enter Position'/>}
            />
        </div>

        <div className='field-container'>
          <label className='form-field'>
            EMAIL:<span style={{ color: "red" }}>&#42;</span>
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} type="email" className='input-field' placeholder='Enter Email'/>}
            />
        </div>
      </div>

      <div className='field-container-message'>
          <label className='form-field'>
            MESSAGE:<span style={{ color: "red" }}>&#42;</span>
            </label>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => <textarea {...field} className='message-field' placeholder='Enter Message'/>}
            />
      </div>

      <button type="submit" className='form-button' disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</button>
      {errorMessage}
    </form>
  )
}

export default OutreachForm