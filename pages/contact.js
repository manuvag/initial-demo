import AppLayout from 'components/layouts/AppLayout'
import Link from 'next/link'

const Contact = () => {
  return (
    <AppLayout title='Contact | Emmanuel'>

      <h1>Contact Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">Inicio</Link>
      </h1>

    </AppLayout>
  )
}

export default Contact
