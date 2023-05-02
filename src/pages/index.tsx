import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google'
import Me from '../../public/me.jpg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='full-height w-full my-auto flex flex-col items-center justify-center'>
      <Image src={Me} alt='image of Ryan' height='200' width='200' className='rounded-full mb-6'></Image>
      <h1 className='my-2 text-3xl'>Hi! I&#39;m Ryan.</h1>
      {/* <h2 className='my-2 text-xl'>Software Developer</h2> */}
      <p className='my-2 w-3/4'>I am a software developer based in Boise, Idaho. I have experience working on the front and back end of websites and applications in multiple tech stacks. My favorite work to do is build beautiful and functional front ends that make big impacts on businesses and users. This site is built with NextJS and TailwindCSS, and I have experience in Angular, PHP, C#, and others.</p>
      <p className='my-4 text-xl'>Check out my work and contact me here:</p>
      <div className='flex flex-row'>
        <button className='bg-transparent hover:bg-[#a86225] text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mx-2 w-[95px]'>
          <Link href='https://github.com/Emberglo' target='_blank'>
            Github
          </Link>
        </button>
        <button className='bg-transparent hover:bg-[#a86225] text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mx-2 w-[95px]'>
          <Link href='https://www.linkedin.com/in/ryanccarpenter/' target='_blank'>
            LinkedIn
          </Link>
        </button>
      </div>
    </div>
  )
}
