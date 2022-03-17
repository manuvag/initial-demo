import AppLayout from 'components/layouts/AppLayout'
import DarkLayout from 'components/layouts/DarkLayout'
import Link from 'next/link'

const About = () => {
  return (
    <AppLayout title='About | Emmanuel'>
      <DarkLayout>
        <h1>About Page</h1>

        <h2 className={'title'}>
          Ir a <Link href="/">Inicio</Link>
        </h2>
      </DarkLayout>
    </AppLayout>
  )
}

export default About
