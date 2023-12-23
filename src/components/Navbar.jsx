const Navbar = () => {
  return (
    <nav className="flex align-center justify-between font-primary font-bold">
      <div>logo</div>
      <ul className="flex items-center justify-around gap-16">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar