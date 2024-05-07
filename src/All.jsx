
import Navbar from './components/Navbar/Navbar'
import Slideshow from './components/Slideshow/Slideshow'
import HeroSection from './components/Herosection/HeroSection'
import Cards from './components/Cards/Cards';
import Hero_2 from './components/Hero_2/Hero_2';
import Hero_3 from './components/Hero_3/Hero_3';
import Tribe from './components/Tribe/Tribe';
import Blogs from './components/Blogs/Blogs';
import Press from './components/Press/Press';
import Footer from './components/Footer/Footer';

const All = () => {
    return (
        <>
            <Navbar />
            <Slideshow />
            <HeroSection />
            <Cards />
            <Hero_2 />
            <Hero_3 />
            <Tribe />
            <Blogs />
            <Press />
            <Footer />
        </>
    )
}

export default All