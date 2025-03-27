import { Link } from 'react-router-dom'
import '../styles/Home.css'
import '../styles/main.css'

function Home(){
    return(
        <>
        <div class="home-content">
            <h1 class="title">Welcome</h1>
            <h2 class="sub-title">to my <Link to="/about">portfolio</Link>.</h2>

        </div>
        </>
    );
}

export default Home;