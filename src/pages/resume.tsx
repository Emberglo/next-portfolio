import Job from "@/components/Job";
import job from '../../job';
import Link from "next/link";

const resume = () => {
  return (
    <div className='w-full my-2 flex flex-col items-center'>
      <h1 className='text-3xl'>Resume</h1>
      <p className='w-5/6 my-6'>A passionate software developer with a track record of delivering enterprise-level full stack applications, collaborating with a team to achieve and surpass goals, and crafting visually stunning and intuitive user interfaces.</p>
      <h2 className='text-2xl mt-6'>Work Experience</h2>
      {jobs.map((job: job) => (
        <Job job={job} key={job.id} />
      ))}
      <h2 className='text-2xl my-6'>Skills</h2>
      <div className='w-5/6 flex flex-row justify-around my-6'>
         <ul>
            <li>
                HTML
            </li>
            <li>
                CSS
            </li>
            <li>
                SASS
            </li>
            <li>
                JavaScript
            </li>
            <li>
                TypeScript
            </li>
         </ul>
         <ul>
            <li>
                Angular
            </li>
            <li>
                React
            </li>
            <li>
                NextJS
            </li>
            <li>
                Vue
            </li>
            <li>
                Ionic
            </li>
         </ul>
         <ul>
            <li>
                SQL
            </li>
            <li>
                NoSQL
            </li>
            <li>
                PHP
            </li>
            <li>
                C#
            </li>
            <li>
                .Net
            </li>
         </ul>
      </div>
      <h2 className='text-2xl my-6'>Education</h2>
      <div className='w-5/6 my-6'>
        <div className='flex justify-between text-xl'>
            <Link href='https://boisecodeworks.com/' target='_blank'>CodeWorks</Link>
            <p>10/2020 - 01/2021</p>
        </div>
        <p className='my-3 mx-3'>
            A comprehensive 500-hour training program that offers immersion in multiple tech stacks, equipping students to build real-world applications using a diverse set of technologies such as JavaScript, TypeScript, NodeJS, Vue, C#, .Net, MySQL, and more.
        </p>
      </div>
    </div>
  )
}

const jobs = [
    {
        title: 'Software Engineer',
        company: 'MadeLabs',
        dates: '2/2021 - 9/2023',
        bullet1: 'Independent Contractor',
        bullet2: 'Worked on several teams with other developers, product owners, project managers, business analysts, and clients using agile principles to ensure high quality code on multiple projects',
        bullet3: 'Projects are summarized on their respective pages and have used several tech stacks including PHP, React, Angular, Ionic, SQL Server, C#, Amazon Web Services and others',
        id: 1
    },
    {
        title: 'Product & Merchandise Coordinator',
        company: 'Zamzows',
        dates: '5/2015 - 3/2020',
        bullet1: 'Increased store sales by 7% and profitability by 3% in one year through in store initiatives',
        bullet2: 'Coached employees to gain knowledge and leadership skills resulting in promotions within the company',
        bullet3: 'Assisted with implementation and refinement of a new Point of Sale and Inventory Management System',
        id: 2
    }
]

export default resume
