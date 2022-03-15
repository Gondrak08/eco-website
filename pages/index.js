import{ Navbar,Hero,AboutUs,Services,ShowCase, NewsLetter, Contact, Footer} from '../components'

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
        <AboutUs />
        <NewsLetter />
      </section>
      <Footer />
    </div>
  )
}
