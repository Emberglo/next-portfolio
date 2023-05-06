const supply = () => {
  return (
    <div className='w-full full-height flex flex-col items-center'>
      <h1 className='text-3xl my-6'>Supply Chain Applications</h1>
      <div className='flex flex-col items-center w-5/6 my-6'>
        <h2 className='text-xl'>Project Description</h2>
        <p className='py-3'>
            This project involved updating an interconnected suite of applications for an international supply chain company. These applications enable the shipping and distribution teams to manage the movement of inventory into, out of, and between warehouses.
        </p>
        <p className='py-3'>
            The main portion of the project was upgrading and expanding a mobile application used by truck drivers on delivery routes. This included updating the versions of Angular and Ionic that were used in the app, completely revamping the UI to be responsive to device sizes and make the app more user friendly. We also expanded the capablities of the app to be used for scanning product, insuring orders are accurately delivered, taking and uploading photos, and filing of reports. 
        </p>
        <p className='py-3'>
            The rest of the project involved work with three additional web apps. The upgrades to these apps make it easier for warehouse managers to track deliveries, be alerted of any issues in real time, and make it easier to view and access important data. 
        </p>
      </div>
      <div className='flex flex-col items-center w-5/6 my-6'>
        <h2 className='text-xl'>Technologies Used</h2>
        <p>This project was built with Ionic, Angular, C#, .Net, and Microsoft SQL Server.</p>
      </div>
    </div>
  )
}

export default supply
