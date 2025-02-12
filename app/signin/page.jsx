'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import EmailSignInForm from '../components/EmailSignInForm'
import GoogleSignInButton from '../components/GoogleSignInButton'


const SignInPage = () => {

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()  // Prevent page refresh
    const email = event.target.email.value  // Get the email entered by the user
    signIn('email', { email, callbackUrl })  // Initiate sign in
  }

  return (
    <section className='flex min-h-full overflow-hidden pt-16 sm:py-28'>
      <div className='mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6'>
        <div className='relative mt-12 sm:mt-16'>
          <h1 className='text-center text-2xl font-medium tracking-tight text-gray-900'>
            Sign in to your account
          </h1>
        </div>
        <div className='sm:rounded-5xl -mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:p-24'>
          <EmailSignInForm handleSubmit={handleSubmit} />
          <div className='mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
            or
          </div>
          <GoogleSignInButton />
        </div>
      </div>
    </section>
  )
}

export default SignInPage
