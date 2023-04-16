import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SessionProvider } from "next-auth/react";
import { ProductsProvider } from "../context/product_context";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}) {
  const isLoginPage = router.pathname === "/login" || router.pathname === '/register';
  const Layout = ({ children }) => (
    <div>
      {!isLoginPage && <NavBar />}
      <main>{children}</main>
      {!isLoginPage && <Footer />}
    </div>
  );
  return (
    <SessionProvider session={session}>
      <ProductsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductsProvider>
    </SessionProvider>
  );
}
