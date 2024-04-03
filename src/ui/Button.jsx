/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export default function Button({children,type, disabled = false, to , onClick }) {


  const base  = "text-sm bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed "
  const styles = {
    primary: base + ' py-3 px-4 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary: " text-sm uppercase font-semibold text-stone-400 inline-block border-2 border-stone-300 tracking-wide rounded-full hover:text-stone-800 hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring focus:text-stone-800 focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5",
    round:base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm'
  }
  if(to) return <Link className={styles[type]} to={to}>{children}</Link>
  if(onClick)   return (
    <button className={styles[type]} disabled={disabled} onClick={onClick}>{children}</button>
  )
  return (
    <button className={styles[type]} disabled={disabled}>{children}</button>
  )
}
