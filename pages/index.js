import{ Navbar,Hero,AboutUs,Services, Contact, Footer} from '../components'

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
      </section>
      <Footer />
    </div>
  )
}
