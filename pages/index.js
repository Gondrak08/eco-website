import { Navbar, Hero, AboutUs, Clients, Workers,Services,ShowCase, NewsLetter,MapGoogle, Contact, Footer} from '../components'

export default function Home() {
  return (
    <div  className="min-h-screen min-w-screen">
      <header>
        <Navbar />
        <Hero />
      </header>
      <section>
        <Services />
        <AboutUs/>
        <Workers />
        <Clients/>
        <ShowCase />
        <MapGoogle />
        <NewsLetter />
        <Contact />
      </section>
      <Footer />
    </div>
  )
}
