
import About from "./about/about"
import Services from './services/services';
import Prefooter from './components/prefooter';
import Projects from './components/projects';
import Gallery from './components/gallery';
import People from './components/people';


const images = [
    '/services.jpg',
    '/services2.jpg',
    '/services3.jpg',
    '/services4.jpg',
    '/services5.jpg',
    '/services6.jpg',
    '/services7.jpg',

  ];
export default function Home(){
    return (
    <section>
        <About/>
        <Projects/>
        <Services images = {images}/>
        <Gallery/>
        <People/>
        <Prefooter/>
    </section>
    )
}