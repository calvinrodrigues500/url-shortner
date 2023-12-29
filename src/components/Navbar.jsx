import siteLogo from '../assets/images/site-logo.png';

const Navbar = () => {
  return (
    <nav className="flex align-center justify-center lg:justify-between font-primary font-bold">
      <div>
        <img
          src={siteLogo}
          alt="TinyTrace"
          className="w-40 lg:w-full"
          />
      </div>
      <ul className="hidden lg:flex items-center justify-around gap-10 lg:gap-16">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar