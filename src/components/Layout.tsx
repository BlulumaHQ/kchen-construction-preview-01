import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
