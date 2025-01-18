export const useRecipeData = (id: string) => {
	if (localStorage.getItem('recipes') !== null) {
		const recipesString = localStorage.getItem('recipes')
		if (recipesString !== null) 
		{
			const recipes = JSON.parse(recipesString)
			const foundRecipe = recipes.find((recipe) => recipe.id === id)
			if (foundRecipe) {
				return foundRecipe
			}
			else {
				console.log(`Рецепт с id ${id} не найден!`)
				
				return null
			}
		}
	}
}