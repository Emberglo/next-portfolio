const consulting = () => {
  return (
    <div className='w-full full-height flex flex-col items-center'>
      <h1 className='text-3xl my-6'>Consulting Company Website</h1>
      <div className='flex flex-col items-center w-5/6 my-6'>
        <h2 className='text-xl'>Project Description</h2>
        <p className='py-3'>
          This project was a website for a technology consulting firm. Their primary goal is to use technology to support and improve their clients. This website is intended to convey their expertise and personality to potential clients. It also functions as a recruitment tool for potential employees of the firm. It demonstrates the culture and values to candidates.
        </p>
      </div>
      <div className='flex flex-col items-center w-5/6 my-6'>
        <h2 className='text-xl'>Technologies Used</h2>
        <p>This project was a React application. It also had an integration of Wordpress for the job postings page to enable applicant tracking, other metrics tracking, and SEO optimization.</p>
      </div>
    </div>
  )
}

export default consulting
