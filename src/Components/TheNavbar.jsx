import icon from '../assets/fake-news.png'

export const TheNavbar = () => {
  return (
    <>
      <section>
         <div className='bg-ctm2'>
            <div className='p-2 px-7 flex justify-between items-center gap-x-2'>
               <div className='flex items-center'>
               <img src={icon} className='w-10 text-2xl ' alt="icon" />
               </div>
               <ul className='flex gap-x-2 text-white'>
                  <li className='font-semibold hover:text-teal-400 cursor-pointer'>Home</li>
                  <li className='font-semibold hover:text-teal-400 cursor-pointer'>About</li>
               </ul>
            </div>
         </div>
      </section>
    </>
  )
}
