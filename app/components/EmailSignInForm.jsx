import React from 'react'
import TextField from './TextField'
import Button from './Button'

function EmailSignInForm({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className='space-y-2'>
                <TextField
                    id='email'
                    name='email'
                    type='email'
                    label='Sign in with your email'
                    placeholder='hello@me.com'
                    autoComplete='email'
                    required
                />
            </div>
            <Button
                type='submit'
                variant='outline'
                color='gray'
                className='mt-3 w-full'
            >
                Continue with email
            </Button>
        </form>
    )
}

export default EmailSignInForm