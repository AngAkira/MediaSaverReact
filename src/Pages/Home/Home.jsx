import './Home.css'
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Buscador from "../../components/Buscador/Buscador.jsx";
import Post from "../../components/Posts/Post.jsx";


function Content(){
    return (<>
        <main className={"main-content"}>
            <Post/>

        </main>
    </>)
}


export default function Home(){
    return <>
        <div className={"layout"}>
            <Header/>
            <div className={"content"}>
                <Buscador/>
                <Content/>
            </div>
            <Footer/>
        </div>
    </>
}