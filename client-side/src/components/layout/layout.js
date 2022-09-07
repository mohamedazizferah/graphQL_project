import Footer from "../footer/footer";
import NavBar from "../navbar/navBar";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
