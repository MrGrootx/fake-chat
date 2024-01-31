import icon from '../assets/fake-news.png'

export const TheNavbar = () => {
  return (
    <>
      <section>
         <div className='container mx-auto'>
            <div className='flex justify-between'>
               <img src={icon} className='w-14' alt="icon" />
               <h3>Fake Chat</h3>
            </div>
         </div>
      </section>
    </>
  )
}
