import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import LandingPage from './components/template/LandingPage'
import AnalysePage from './components/analyse/AnalysePage'

const Home = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <LandingPage />
    )
  }

  return (
    <AnalysePage />
  )
}

export default Home