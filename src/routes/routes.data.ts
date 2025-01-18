import Home from '../components/screens/home/Home'
import NewRecipe from '../components/screens/new-recipe/NewRecipe'
import Recipe from '../components/screens/recipe/Recipe'

export const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/recipe/:id',
		component: Recipe
	},
	{
		path: '/new-recipe',
		component: NewRecipe
	},
]