const consulting = () => {
  return (
    <div className='w-full full-height flex flex-col items-center'>
      <h1 className='text-3xl my-6'>Consulting Company Website</h1>
      <div className='flex flex-col items-center w-5/6 my-6'>
        <h2 className='text-xl'>Project Description</h2>
        <p className='py-3'>
          This application is a one stop shop for everyone from recreational boaters to large government regulated fleets to track maintenance and increase reliablity. The application allows users to generate work orders, track parts inventory, set reminders for recurring maintenance, keep records of maintenance done to individual vessels and individual components on the vessel, and increase speed and ease of inspections.
        </p>
        <p className='py-3'>
        The legacy application was contracted for modernization and upgrades. The team upgraded the user interface, added new functionality, as well as integrated a new React application to further increase value to users. These upgrades resulted in a surge of new users to the platform.
        </p>
      </div>
      <div className='flex flex-col items-center w-5/6 my-6'>
        <h2 className='text-xl'>Technologies Used</h2>
      </div>
    </div>
  )
}

export default consulting
