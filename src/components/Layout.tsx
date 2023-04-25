import Nav from '@/components/Nav';
import Meta from '@/components/Meta';

const Layout = ({children}: {children: any}) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
