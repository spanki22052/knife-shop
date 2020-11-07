import React, { useState } from 'react';
import classes from '../../styles/slider.module.scss';

const Slider = () => {

	let sliderArr = [1, 2];
	const [x, setX] = useState(0)
	const goLeft = () => {
		x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
	};
	const goRight = () => {
		x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
	};

	return (
		<div className={classes.slider}>
			{
				sliderArr.map((item, index) => {
					return (
						<div ley={index} className={classes.slide} style={{ transform: `translateX(${x}%)` }}>
							{item}
						</div>
					)
				})
			}
			<button className={classes.goLeft} onClick={goLeft}>
				Left
			</button>
			<button className={classes.goRight} onClick={goRight}>
				Right
			</button>
		</div>
	)
}

export default Slider;