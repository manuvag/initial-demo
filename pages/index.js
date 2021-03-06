import AppLayout from 'components/layouts/AppLayout'
import Link from 'next/link'

const Home = () => {
  return (
    <AppLayout title='Home | Emmanuel'> 
      <h1>Home Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/about">About</Link>
      </h1>
    </AppLayout>
  )
}

export default Home
