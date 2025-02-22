import img1 from '../utils/pngwing.com.png'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {
    const dispatch= useDispatch()
    const handleToggle = () => {
        dispatch(toggleMenu())
    }

  return (
    <div className='grid grid-flow-col p-1 px-4 col-span-12 justify-between items-center shadow-lg'>
      <div className='flex col-span-1' onClick={handleToggle}>
        <img className='h-6 hover:cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/we/sidebar-2.png" alt="sidebar" />
        <img className='h-6 ml-5' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="youtube" />
      </div>
        <div className=' col-span-10 flex justify-center'>
            <input className='border-gray-300 border-2 p-1 rounded-l-full w-1/3 pl-3' type="text" placeholder="Search" />
            <button className='border-gray-300 border-l-0 rounded-r-full border-2 p-1'>Search</button>
        </div>
      <div className='col-span-1'>
        <img className='h-6' src={img1} alt="profile" />
      </div>
    </div>
  )
}

export default Header
