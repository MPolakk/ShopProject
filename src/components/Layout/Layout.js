import NavBar from './NavBar'; 
import Footer from './Footer'; 


function Layout(props) {
  return (
    <div>
      <NavBar />
      <main >{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
