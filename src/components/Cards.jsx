import React from 'react'

function Cards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold lg:text-4xl md:text-xl sm:text-4xl sm:pt-1 text-4xl px-2 pt-10'>Sun's Out, BOGO's Out</p>
                <p className='px-2 md:pt-0 pt-2'>Through 10/25</p>
                <button className='sm:bottom-4 border-white bg-white text-black px-4 absolute bottom-12 mx-2'>Order Now</button>  
            </div>
            <img className='rounded-xl' src="https://images.pexels.com/photos/9811805/pexels-photo-9811805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold lg:text-4xl md:text-xl sm:text-4xl sm:pt-1 text-4xl px-2 pt-10'>We Deliver Delicious Food</p>
                <p className='px-2 md:pt-0  pt-2'>Through 10/25</p>
                <button className='sm:bottom-4 border-white bg-white text-black px-4 absolute bottom-12 mx-2'>Order Now</button>  
            </div>
            <img className='rounded-xl' src="https://images.pexels.com/photos/9811805/pexels-photo-9811805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>   
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold lg:text-4xl sm:text-4xl sm:pt-1 md:text-xl text-4xl px-2 pt-10'>New Added Resturant's</p>
                <p className='px-2 md:pt-0 '>Through 10/25</p>
                <button className='sm:bottom-4 border-white bg-white text-black px-4 absolute bottom-12 mx-2'>Order Now</button>  
            </div>
            <img className='rounded-xl' src="https://images.pexels.com/photos/9811805/pexels-photo-9811805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>      
    </div>
  )
}

export default Cards