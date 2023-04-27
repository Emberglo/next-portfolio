import React from 'react'
import job from '../../job';

const Job = ({job}: {job:job}) => {
  return (
    <div className='w-5/6 my-6'>
        <div className='w-full flex flex-row justify-between my-2 text-xl'>
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
            <p>{job.dates}</p>
        </div>
        <div className='w-full flex items-center'>
            <ul className='mx-3'>
                <li className='my-2'>
                    {job.bullet1}
                </li>
                <li className='my-2'>
                    {job.bullet2}
                </li>
                <li className='my-2'>
                    {job.bullet3}
                </li>
            </ul>
        </div>
      </div>
  )
}

export default Job
