import React from "react";
import classes from "../../styles/main.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { closeMenu as close } from "../../modules/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import SlideBlock from "./slideBlock";
import slide from "../slide";
import Link from "next/link";

const Main = () => {
	const slideProducts = [
		{
			img: "https://rhinelandcutlery.com/rl-content/uploads/2014/07/image-1.png",
			title: 'Нож "Бекас"',
			price: 1990,
		},
		{
			img: "https://rhinelandcutlery.com/rl-content/uploads/2014/07/image-1.png",
			title: 'Подушка "Бекас"',
			price: 1990,
		},
		{
			img: "https://rhinelandcutlery.com/rl-content/uploads/2014/07/image-1.png",
			title: 'Подушка "Бекас"',
			price: 1990,
		},
		{
			img: "https://rhinelandcutlery.com/rl-content/uploads/2014/07/image-1.png",
			title: 'Подушка "Бекас"',
			price: 1990,
		},
		{
			img: "https://rhinelandcutlery.com/rl-content/uploads/2014/07/image-1.png",
			title: 'Подушка "Бекас"',
			price: 1990,
		},
		{
			img: "https://rhinelandcutlery.com/rl-content/uploads/2014/07/image-1.png",
			title: 'Подушка "Бекас"',
			price: 1990,
		},
		{
			img: "https://rhinelandcutlery.com/rl-content/uploads/2014/07/image-1.png",
			title: 'Подушка "Бекас"',
			price: 1990,
		},
		{
			img: "https://rhinelandcutlery.com/rl-content/uploads/2014/07/image-1.png",
			title: 'Подушка "Бекас"',
			price: 1990,
		},
	];
	const dispatch = useDispatch();
	const menuState = useSelector((state) => state.menu.menuState);
	const closeMenu = () => {
		dispatch(close());
	};
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: true,
		className: classes.slider,
	};

	useEffect(() => {
		[".secondSlider", ".thirdSlider"].map((el) =>
			slide(document.querySelector(el))
		);
	}, []);

	return (
		<main
			onClick={() => {
				closeMenu();
				document.querySelector("body").classList.remove("lock");
			}}
			className={!menuState ? classes.main : classes.main + " " + classes.blur}
		>
			<Slider className={classes.slider} {...settings}>
				<img
					className={classes.slide}
					alt="slide"
					src="https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/$web_pdp_main_carousel_zoom_med$/190411134925/wusthof-classic-8-chefs-knife.jpg"
				/>
				<img
					className={classes.slide}
					alt="slide"
					src="https://rhinelandcutlery.com/rl-content/uploads/2014/07/image-1.png"
				/>
			</Slider>
			<div className={classes.main__btns}>
				<Link href="/catalog/knives">
					<a className={classes.btn}>Ножи</a>
				</Link>
				<Link href="/catalog/chehli">
					<a className={classes.btn}>Чехлы</a>
				</Link>
			</div>
			<div className={classes.main__sale}>
				<img
					className={classes.salephoto}
					src="https://ak.picdn.net/shutterstock/videos/30741688/thumb/10.jpg"
					alt="sale"
				/>
				<div className={classes.sale__links}>
					<div className={classes.salelink}>
						<a href="/">Матрасы</a>
						<img src="./arrow.svg"></img>
					</div>
					<div className={classes.salelink}>
						<a href="/">Подушки</a>
						<img src="./arrow.svg"></img>
					</div>
				</div>
			</div>
			<div className={classes.prodblock}>
				<div className={classes.link}>
					<div className={classes.txt}>Матрасы</div>
					<a href="/" className={classes.allprod}>
						Смотреть все товары
          </a>
				</div>
				<div className={classes.prodlist + " secondSlider"}>
					{slideProducts.map((item, id) => {
						return <SlideBlock item={item} linkTo="/product/123451Rocket" key={id} />;
					})}
				</div>
			</div>
			<Slider className={classes.slider} {...settings}>
				<img
					className={classes.slide}
					alt="slide"
					src="https://m.1obl.ru/upload/resize_cache/iblock/b73/827_465_2/b739c03115a04787958a7a95bb5f377f.jpg"
				/>
				<img
					className={classes.slide}
					alt="slide"
					src="https://brammels.com/wp-content/uploads/2015/10/Brogi-2.jpg"
				/>
			</Slider>
			<div className={classes.prodblock}>
				<div className={classes.link}>
					<div className={classes.txt}>Подушки</div>
					<a href="/" className={classes.allprod}>
						Смотреть все товары
          </a>
				</div>
				<div className={classes.prodlist + " thirdSlider"}>
					{slideProducts.map((item, id) => {
						return <SlideBlock item={item} linkTo="/product/123451Rocket" key={id} />;
					})}
				</div>
			</div>
		</main>
	);
};

export default Main;
