import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

const Page = async () => {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin?callbackUrl=/')
    }

    return (
        <section className='py-24'>
            <div className='container'>
                <h1 className='text-2xl font-bold'>Upgrade</h1>
            </div>
        </section>
    )
}

export default Page
