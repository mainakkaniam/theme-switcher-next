"use client"
import { useTheme } from 'next-themes'
import React from 'react'

const Template = ({ pagename }) => {
  const { theme, setTheme } = useTheme();
  
  const handleToggle = () => {
    if (theme === "light")
      setTheme("dark");
    else
      setTheme("light");
  }

  return (
    <div className="main h-[95vh] flex justify-center items-center">
        <div className="toggler flex items-center flex-col gap-[2vh]">
              <div className="text-[5vw] flex gap-[2vw]">
                  This is <span className="text-[#9434ec]">{pagename}</span> Page
          </div>
        <button className="px-5 py-[10px] bg-[#9434ec] text-white text-xl border-none rounded cursor-pointer"
        onClick={handleToggle}>
                  Toggler
              </button>
        </div>
      </div>
  )
}

export default Template