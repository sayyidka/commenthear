import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'

const Home = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <section className='py-24'>
        <div className='container'>
          <h1 className='text-2xl font-bold'>Welcome to CommentHear</h1>
        </div>
      </section>
    )

  }

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>Get insights from comments</h1>
      </div>
    </section>
  )
}

export default Home