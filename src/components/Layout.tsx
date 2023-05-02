import Nav from '@/components/Nav';
import Meta from '@/components/Meta';

const Layout = ({children}: {children: any}) => {
  return (
    <>
      <Meta />
      <Nav />
      <>
        <main>
          {children}
        </main>
      </>
    </>
  )
}

export default Layout
