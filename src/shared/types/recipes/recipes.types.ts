export interface IRecipe {
	name: string
	description: string
	image?: File
	ingredients: IIngredient[]
}

export interface IIngredient {
	name: string
	quantity: number
}