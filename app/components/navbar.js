import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
      <div className="navbar flex h-[5vh] items-center justify-center text-xl gap-5 dark:text-[#a6ff00]">
          <Link href="/" style={{textDecoration:"none"}}>Home</Link>
          <Link href="/help" style={{textDecoration:"none"}}>Help</Link>
          <Link href="/about"style={{textDecoration:"none"}}>About</Link>
      </div>
  )
}

export default Navbar