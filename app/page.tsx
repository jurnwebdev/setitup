import SoftwareComponent from '@/components/SoftwareComponent'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="banner w-full h-[450px] bg-blue-50 flex flex-col justify-center items-center gap-2">
        <h1 className="title text-[60px] font-bold text-[#00203c]">Ready, Set, Download.</h1>
        <p className='text-[25px] font-light text-[#00203c]'>Tailor-Made Software for Your New Laptop</p>
        <button className='py-4 px-8 rounded hover:bg-[#6E97FD] text-white m-4 bg-[#00203c]'>
          <Link href="#softwares">Discover Softwares</Link>
        </button>
      </section>

      <SoftwareComponent />

      <section className='w-full flex justify-center items-center py-40 bg-blue-50'>
        <h1 className='text-center w-[650px] text-[23px] font-light'>Stay tuned for regular updates! As we discover the best software to run your PC, we'll keep adding more links. Your seamless laptop experience is our priority!</h1>
      </section>
    </>
  )
}
