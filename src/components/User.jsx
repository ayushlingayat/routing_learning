
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='w-1/2 m-auto mt-10'>
    <h1 className='text-5xl mb-3 text-red-500 m-5'>User Page</h1>
    

    <div className='flex w-1/2 flex-col mt-5'>
    <Link className='p-3 bg-blue-200 text-2xl mb-3 hover:bg-emerald-300' to='/user/ayushi'>Ayushi</Link>
    <Link className='p-3 bg-blue-200 text-2xl mb-3 hover:bg-emerald-300' to='/user/tina'>Tina</Link>
    <Link className='p-3 bg-blue-200 text-2xl mb-3 hover:bg-emerald-300' to='/user/riya'>Riya</Link>
    </div>
    


  </div>
  )
}

export default User
