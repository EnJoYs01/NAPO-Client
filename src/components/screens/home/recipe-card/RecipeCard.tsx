import { FC } from 'react'
import styles from './RecipeCard.module.scss'
import { Link } from 'react-router-dom'

interface IRecipeCard {
	name: string
	id: string
	imageUrl?: string
}

const RecipeCard: FC<IRecipeCard> = ({name, id, imageUrl = '/public/images/default.jpg'}) => {
	
	return (
		<Link to={`/recipe/:${id}`} className={styles.card}>
			<img src={imageUrl} alt="pidor" />
			<span>{name}</span>
		</Link>
	)
}

export default RecipeCard