import AppLayout from 'components/layouts/AppLayout'
import Link from 'next/link'

const Pricing = () => {
  return (
    <AppLayout title='Pricing | Emmanuel'> 
      <h1>Pricing Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">Inicio</Link>
      </h1>
    </AppLayout>
  )
}

export default Pricing
