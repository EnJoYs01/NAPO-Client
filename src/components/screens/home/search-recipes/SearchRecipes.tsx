import { FC, useState } from 'react'

import styles from './SearchRecipes.module.scss'

import { Link } from 'react-router-dom'
import { IProduct, ISelectedProduct } from '../../../../shared/types/products/products.types'

import RecipeCard from '../recipe-card/RecipeCard'
import SelectProducts from '../../../ui/select-products/SelectProducts'

interface ISearchRecipes {
	productsList?: IProduct[]
}

interface IOption {
  label: string
	value: string
	unit: string
}

const pidors1: IOption[] = [
	{label: 'test1', value: 'test1', unit: 'kg'},
	{label: 'test2', value: 'test2', unit: 'kg'},
	{label: 'test3', value: 'test3', unit: 'kg'}    
]

const SearchRecipes: FC<ISearchRecipes> = ({productsList = []}) => {
	const [selectedProducts, setSelectedProducts] = useState<ISelectedProduct[]>([])
	
	return (
		<div className={styles.select}>
			
			<SelectProducts 
				productsList={productsList} 
				selectedProducts={selectedProducts} 
				setSelectedProduct={setSelectedProducts}
			/>
			
			<div className={styles.buttonLinkContainer}>
				<button>Search</button>
				<span>Не нашли нужный рецепт? — <Link to={'/new-recipe'}>Создайте</Link> его сами!</span>
			</div>
			
			<div className={styles.cardsContainer}>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>		
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>		
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			<RecipeCard name='Вкуснейшие куриные крылья барбекю с рисом' id=''/>
			
			</div>			
		</div>
	)
}

export default SearchRecipes