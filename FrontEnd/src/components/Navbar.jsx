import React from 'react'

const Navbar = () => {

    const navMenu = [
        { name : 'Home'},
        { name : 'About'},
        { name : 'Contact'},

    ]
 
    return (
      <section className='sticky top-0 left-0 right-0 bg-white'>
        <header className='container mx-auto flex justify-between items-center py-2 px-4'>
            <div>
                <img src="" alt="Logo" />
            </div>


              <ul className='flex items-center justify-center gap-x-7'>
                {
                    navMenu.map((navItem)=>(
                        <li><a href="/">{navItem.name}</a></li>
                    ))
                }
              </ul>


              <button className='px-6 py-2 rounded-full font-semibold text-base text-blue-600 border-2 border-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-500 shadow-sm'>Log in</button>
        </header>
      </section>
  )
}

export default Navbar