import React, { useState } from 'react';
import classes from '../../styles/footer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu as close } from '../../modules/actions';

const Footer = () => {
	const [choosenCategoty, setCategory] = useState('');
	const dispatch = useDispatch();
	const menuState = useSelector(state => state.menu.menuState);
	const closeMenu = () => {
		dispatch(close());
	}
	const categorys = [
		{
			category: "О КОМПАНИИ",
			subcategory: ['История компании', 'Контакты', 'Правовая информация', 'Вакансии']
		},
		{
			category: "ПОКУПАТЕЛЯМ",
			subcategory: ['Оплата', 'Доставка', 'Возврат', 'Гарантия', 'Обработка данных']
		},
		{
			category: "ПАРТНЕРАМ",
			subcategory: ['Поставщикам', 'Стать партнером', 'Рекламные материалы']
		}
	]

	const categoryList = categorys.map((item, id) => {
		return (
			<li key={id} className={classes.categoryItem}>
				<div onClick={() => { choosenCategoty === item.category ? setCategory('') : setCategory(item.category) }}
					className={choosenCategoty !== item.category ? classes.categoryTitle : classes.categoryTitle + ' ' + classes.activeTitle}>
					{item.category}
					<div className={choosenCategoty !== item.category ? classes.categoryIcon : classes.categoryIcon + ' ' + classes.activeIcon}></div>
				</div>
				<div className={choosenCategoty !== item.category ? classes.subBlock : classes.subBlock + ' ' + classes.activeContent}>
					<ul className={classes.subCategory}>
						{item.subcategory.map((item2, idx) => {
							return (
								<li key={idx} className={classes.subCategoryItem}>
									{item2}
								</li>
							)
						})}
					</ul>
				</div>
			</li>
		)
	})

	return (
		<footer
			onClick={() => {
				closeMenu();
				document.querySelector("body").classList.remove("lock")
			}}
			className={
				!menuState ?
					classes.footer :
					classes.footer + ' ' + classes.blur
			}>
			<div className={classes.footer__content}>
				<div className={classes.contacts}>
					<div className={classes.phonesBlock}>
						<div className={classes.phones}>
							<div className={classes.phoneTitle}>
								Интернет-магазин
							</div>
							<div className={classes.phoneNumber}>
								8-800-555-35-35
							</div>
							<div className={classes.phoneSub}>
								круглосуточно
							</div>
						</div>
						<div className={classes.phones}>
							<div className={classes.phoneTitle}>
								Поддержка покупателей
							</div>
							<div className={classes.phoneNumber}>
								8-800-555-35-35
							</div>
							<div className={classes.phoneSub}>
								с 9:00 до 21:00
							</div>
						</div>
					</div>
					<div className={classes.social}>
						<div className={classes.socialTitle}>
							Социальные сети:
						</div>
						<img src='/instagram.svg'></img>
					</div>
					<div className={classes.cards}>
						<div className={classes.cardTitle}>
							Мы принимаем
						</div>
						<div className={classes.cardcons}>
							<img src='/visa.svg' />
							<img src='/mastercard.svg' />
						</div>
					</div>
				</div>
				<div className={classes.info}>
					<ul className={classes.category}>
						{categoryList}
					</ul>
				</div>
			</div>
			<div className={classes.footer__end}>
				<div className={classes.rules}>
					© 2020 DagObuv. Все права защищены.
				</div>
				<div className={classes.dev}>
					Разработка сайта: spanki, vgvsshi
				</div>
			</div>
		</footer>
	)
}

export default Footer