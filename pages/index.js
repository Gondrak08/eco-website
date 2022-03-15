import{ Navbar,Hero,AboutUs,Services,ShowCase, Contact, Footer} from '../components'

export default function Home() {
  return (
    <div  className="min-h-screen min-w-screen">
      <header>
        <Navbar />
        <Hero />
      </header>
      <section>
        <Services />
        <ShowCase />
        <AboutUs/>
      </section>
      <Footer />
    </div>
  )
}
