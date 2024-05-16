
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className='mt-10 flex justify-center gap-10'>
    <NavLink style={(e)=>{
        return {
            color : e.isActive ? "blue" : " ",
            fontWeight : e.isActive ? "bold" : "italic"
        }
    }} to="/">Home</NavLink>

    <NavLink className={(e)=>{
        return [
            e.isActive? "text-blue-800" : " ",
            e.isActive? "font-bold" : "font-bold "
        ].join(" ");

    }} to="/user">User</NavLink>
    
    <NavLink style={(e)=>{
        return {
            color : e.isActive ? "blue" : " ",
            fontWeight : e.isActive ? "bold" : "italic"
        }
    }} to="/about">About</NavLink>
   </nav>
    </>
  )
}

export default Nav
