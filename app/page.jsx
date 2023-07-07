import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import VideoCard from './components/VideoCard'

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
    <section className='py-18'>
      <div className='container mx-auto flex flex-col items-center max-w-3xl mt-8'>
        <h1 className='text-2xl font-bold'>Get insights from comments</h1>
        <div className="flex justify-center mt-6 mb-8 sm:mb-8">
          <input type="text" placeholder="Paste a Youtube video URL here..." className="input input-bordered" />
        </div>
        <div className='flex flex-col items-stretch'>
          <VideoCard />
          <div className="flex card bg-base-100 mb-4 sm:mb-8 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Overall Sentiment</h2>
              <p>Upgrade Option: If the user .</p>
            </div>
          </div>
          {/* Half-size cards */}
          <div className='flew flex-wrap sm:flex sm:flex-nowrap justify-center mb-4 sm:mb-8 space-x-0 sm:space-x-4'>
            <div className="w-full mb-4 sm:mb-8 sm:mb-0 sm:w-1/2 flex flex-col card bg-secondary shadow-xl h-48">
              <div className="card-body">
                <h2 className="card-title">Sentiment score</h2>
                <p>90%</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col card bg-base-100 shadow-xl h-48">
              <div className="card-body">
                <h2 className="card-title">Keywords</h2>
                <p>test - test - test</p>
              </div>
            </div>
          </div>


          {/* Viewer preferences */}
          <div className="flex card bg-base-100 mb-4 sm:mb-8 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Overall Sentiment</h2>
              <p>Upgrade Option: If the user .</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home