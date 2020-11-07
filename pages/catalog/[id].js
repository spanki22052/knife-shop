import Header from "../../components/nav";
import Sidebar from "../../components/sidebar";
import ProductList from "../../components/product";
import Footer from "../../components/footer";

export default function Home() {
	return (
		<div className="wrapper">
			<Header />
			<ProductList />
			<Sidebar />
			<Footer />
		</div>
	);
}
