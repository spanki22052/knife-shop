import Head from 'next/head';
import Header from '../components/nav';
import Sidebar from '../components/sidebar';
import Main from '../components/main';
import Footer from '../components/footer';

export default function Home() {
	return (
		<div className='wrapper'>
			<Header />
			<Main />
			<Sidebar />
			<Footer />
		</div>
	)
}
