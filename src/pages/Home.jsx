import Nav from "../components/Nav";
import '../styles/Home.css'
import '../styles/main.css'
import background from '../assets/Images/background.jpg'

function Home(){
    return(
        <>
        <img class="background-img" src={background} alt="" />
        </>
    );
}

export default Home;