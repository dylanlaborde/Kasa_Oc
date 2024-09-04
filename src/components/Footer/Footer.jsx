import "./Footer.css"
import LOGO from '../../assets/LOGO.png'

function Footer() {
  return (
      <footer>
        <img src={LOGO} alt="kasa logo" />
        <span>© 2020 Kasa. All rights reserved</span>      
      </footer>
  )
}

export default Footer