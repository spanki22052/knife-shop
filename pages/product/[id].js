import Product from "../../components/productPage";
import Header from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import SameProducts from "../../components/sameProducts";
import {useSelector} from 'react-redux';

export default function Home() {
	const data = useSelector((state) => state.data);
	const productList = data.productList;
  return productList.length>0 ? (
    <div className="wrapper">
      <Header />
      <Product />
      <Sidebar />
	  <SameProducts linkTo="1235124fresco" />
      <Footer />
    </div>
  ) : (null);
}
