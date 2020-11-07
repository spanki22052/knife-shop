import Header from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Catalog from "../../components/catalog";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/catalog/sintetic");
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}
