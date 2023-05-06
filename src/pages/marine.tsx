const marine = () => {
  return (
    <div className='w-full full-height flex flex-col items-center'>
      <h1 className='text-3xl my-6'>Marine Maintenance Management Application</h1>
      <div className='flex flex-col items-center w-5/6 my-6'>
        <h2 className='text-xl'>Project Description</h2>
        <p className='py-3'>
          This application is a one stop shop for everyone from recreational boaters to large government regulated fleets to track maintenance and increase reliablity. The application allows users to generate work orders, track parts inventory, set reminders for recurring maintenance, keep records of maintenance done to individual vessels and individual components on the vessel, and increase speed and ease of inspections.
        </p>
        <p className='py-3'>
          This was a legacy application that was contracted for UI and functionality improvements. The UI was completely updated to a modern and responsive interface. Dashboards were added to provide users a quick and easy way to view critical information that was previously scattered and difficult to find. New functionality was added to make the application more useful to current users and to attract new users. Live tracking via sattelite was integrated through auxillary equipment and an external API. User controllable permissions were added so that fleet managers can grant subordinate employees access to only the features they are responsible for. A React application was integrated to allow fleet managers to create custom forms so employees can track information important to the organization or to regulators.
        </p>
      </div>
      <div className='flex flex-col items-center w-5/6 my-6'>
        <h2 className='text-xl'>Technologies Used</h2>
        <p>This project was primarily a PHP applicaiton. A React application was added later that used GraphQL. </p>
      </div>
    </div>
  )
}

export default marine
