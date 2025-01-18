import { FC } from 'react'
import Layout from '../../layout/Layout'

import { useRecipeData } from '../../../hooks/useRecipeData'

import styles from './Recipe.module.scss'

const Recipe: FC = () => {
	const url = document.URL
	const id = url.split('/').pop();
	const recipe = useRecipeData(id ? id : '')
	// const recipe = {name: 'Самая лучшая говядина в сливочном соусе с картофелем под сыром запеченая в духовке', image: '', ingredients: [{name: 'moloko', quantity: 100, unit: 'ml'}, {name: 'muka', quantity: 1, unit: 'kg'}, {name: 'saxar', quantity: 2, unit: 'lojki'}], description: 'test'}
	return (
		<Layout>
			<div className={styles.recipe}>
				<h1>{recipe?.name}</h1>
				<img src={recipe?.image ? URL.createObjectURL(recipe?.image) : '/public/images/default.jpg'} alt='recipe image' />
				<p>
					<ul>
						{recipe?.ingredients.map((ingredient) => {
							return <li><pre>{ingredient.name} {ingredient.quantity} {ingredient.unit}</pre></li>
						})}
					</ul>
				</p>
				<p>{recipe?.description}</p>
			</div>
		</Layout>
	)
}

export default Recipe