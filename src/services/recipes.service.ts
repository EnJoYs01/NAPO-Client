import { $axios } from '../api'
import { IRecipe } from '../shared/types/recipes/recipes.types'

const RECIPES_URL = '/recipes'

class RecipesService {
	async getByAvailableProducts (availableProducts: any) {
		const axiosInstance = $axios();
		return axiosInstance.post(RECIPES_URL, availableProducts)
	}
	
	async createNew(newRecipe: IRecipe) {
		const axiosInstance = $axios();
		return axiosInstance.post(RECIPES_URL, newRecipe)
	}
}

export default new RecipesService()