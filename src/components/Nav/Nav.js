import '../Home/home.css'
import './nav.css';
import {ReactComponent as AppsIcon} from './imgs/AppsIcon.svg'
import MobileNav from './Mobilenav'
function Nav() {
  return (
    <nav>
    <MobileNav/>
    <div id="navdiv">
      <a href="https://www.google.com/gmail/about/#" className="c">Gmail</a>
      <a href="https://www.google.co.in/imghp?hl=en&tab=wi&ogbl" className="c">Images</a>
      <div className="appsDiv"><AppsIcon /></div>
      <div>
        <a href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=GAZAmgQ">
          <button type="submit" name="button">Sign In</button>
        </a>
      </div>
    </div>
    <div className="spacer"></div>
  </nav>
  );
}

export default Nav;
