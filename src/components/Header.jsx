import React from 'react'

const Header = () => {
  return (
    <div className=" fixed z-50 w-screen bg-slate-300 p-6 px-16 ">
    {/*Destop*/}
    <div className="hidden md:flex w-full h-full bg-red-600 "></div>
    {/*mobile*/}
    <div className="flex md:hidden w-full h-full bg-blue-600 " ></div>
    </div>
  )
}

export default Header