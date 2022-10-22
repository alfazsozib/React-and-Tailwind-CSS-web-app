import React, { useState } from 'react'
import  {AiFillTag, AiOutlineClose, AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai'
import  {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends, FaWallet} from 'react-icons/fa';
import {MdFavorite, MdHelp} from 'react-icons/md';
function Navbar() {

  const [mobView, setMobView] = useState(false);

  return (
    <div className='max-w-[1640px]  mx-auto items-center flex justify-between p-3'>
        {/* Left Side */}
        <div className='flex items-center'>
        <div onClick={()=>setMobView(!mobView)}  className='cursor-pointer mt-1'>
            <AiOutlineMenu size={30}/>
        </div>
        <h1 className='text-xl sm:text-2xl lg:text-3xl px-2'>Khai <span className='font-bold'>Dai</span></h1>
        <div className='rounded-full p-1 hidden items-center bg-gray-200 lg:flex text-[12px]'>
            <p className= 'bg-black p-2 text-white rounded-full'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div>
        </div>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[250px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={30}/>
          <input className='bg-transparent p-2 w-full' type="text" placeholder='Search Foods' />
        </div>
        <button className='bg-black/90 hidden rounded-full text-white md:flex hover:bg-black/100 sm:flex items-center py-2'>
          <BsFillCartFill size={20} className='mx-1' /> Add 
        </button>
    {/* Mobile Menu */}
    {/* Overlay  */}
    {mobView ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>: ''}
        
    {/* Side Drawer Menu  */}
    <div className={mobView? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-400'}>
    <AiOutlineClose onClick={()=>setMobView(!mobView)} size={30} className="absolute right-4 top-3 cursor-pointer"/>
    <h2 className='text-2xl p-4' >Khai <span className='font-bold'>Dai</span></h2>

    <nav>
      <ul className='text-gray-800'>
        <li className='text-xl py-4 flex  items-center'><TbTruckDelivery size={25} className="mr-3 ml-4" />
        Orders
        </li>
        <li className='text-xl py-4 flex  items-center'><MdFavorite size={25} className="mr-3 ml-4" />
        Favourites
        </li>
        <li className='text-xl py-4 flex  items-center'><FaWallet size={28} className="mr-3 ml-4" />
        Wallet
        </li>
        <li className='text-xl py-4 flex  items-center'><MdHelp size={25} className="mr-3 ml-4" />
        Help
        </li>
        <li className='text-xl py-4 flex  items-center'><AiFillTag size={25} className="mr-3 ml-4" />
        Promotions
        </li>
        <li className='text-xl py-4 flex  items-center'><BsFillSaveFill size={25} className="mr-3 ml-4" />
        Best Ones
        </li>
        <li className='text-xl py-4 flex  items-center'><FaUserFriends size={25} className="mr-3 ml-4" />
        Invite Friends
        </li>
      </ul>
    </nav>

    </div>
    
    
    
    
    
    
    
  </div>
    
  )
}

export default Navbar