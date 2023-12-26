import { Navbar, UrlShortner } from "../components"

const Home = () => {
  return (
    <div 
      className="flex flex-col align-cneter h-full">
        <Navbar />
        <UrlShortner />
    </div>
  )
}

export default Home