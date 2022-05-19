import './home.css'
import googleImg from './imgs/google.png'
import Searchbar from '../Search Bar/Searchbar'
import LanguageDiv from '../Language Div/Languagediv'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Sectionbuttons from '../Section Buttons/Sectionbuttons'

function Home() {
  return (

   <div>
     <Nav/>
    <main>
      <center>
        <img src={googleImg} id="googleimg"/>
        <Searchbar/>
        <Sectionbuttons/>
        <LanguageDiv/>
      </center>
      <Footer/>
    </main>
   </div>

  );
}

export default Home;
