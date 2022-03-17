import styles from './Navbar.module.css'
import ActiveLink from 'components/ActiveLink'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
]
const Navbar = () => {
  return(
    <nav className={styles.menuContainer}>
      { menuItems.map(({ text, href }) => <ActiveLink key={href} href={href} text={text}/>)}
    </nav>
  )
}

export default Navbar
