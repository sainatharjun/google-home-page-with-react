import '../Home/home.css'
import './searchbar.css'
import {ReactComponent as SearchIcon} from './imgs/search.svg'
import {ReactComponent as MicIcon} from './imgs/micIcon.svg'

function Searchbar() {
  return (

        <div className="maindiv-container">
          <div id="maindiv">
            <span style={{lineHeight:20+'px'}}><SearchIcon style={{height:20+'px',marginTop:3.5+'px',marginLeft:-2+'px'}}/></span>
            <span id="inputspan"><input id="searchInput" type="text" name="search"/></span>
            <span><MicIcon style={{width:25+'px',margin:1+'px '+1+'%'}}/></span>
          </div>
        </div>



  );
}

export default Searchbar;
