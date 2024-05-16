
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {

    const {name} = useParams();
    const navigate =  useNavigate();

    const GoBackHandler = () =>{
        // navigate('/user');
        navigate(-1);
    }

  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-5xl mb-3 text-red-500 m-5'>User Details</h1>
      
      <h1 className='text-4xl m-5 mt-3 text-blue-700'>Hii , 😘 {name}</h1>
      <button onClick={GoBackHandler} className='bg-red-500 px-3 py-2 rounded-md text-xs text-white m-5 mt-5'>Go Back</button>
    </div>
  )
}

export default UserDetail
