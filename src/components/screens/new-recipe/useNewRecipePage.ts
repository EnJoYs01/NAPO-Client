import { FormEvent, useMemo, useRef, useState } from 'react'

import { useAllProducts } from '../home/search-recipes/useAllProducts'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { ISelectedProduct } from '../../../shared/types/products/products.types'
import { IIngredient, IRecipe } from '../../../shared/types/recipes/recipes.types'

import RecipesService from '../../../services/recipes.service'

export const useNewRecipePage = (selectedProducts: ISelectedProduct[]) => {
	const navigate = useNavigate()
	
	const {mutate, isPending} = useMutation({
		mutationKey: ['create recipe'],
		mutationFn: (newRecipe: IRecipe) => RecipesService.createNew(newRecipe),
		onSuccess: (data) => {
			navigate(`/recipes/:${data.data.id}`)
		}
	})
	
	const formRef = useRef(null)
	
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (formRef.current) {
			const formData = new FormData(formRef.current)
			const name = formData.get('name')
			const description = formData.get('description')
			const img: any = formData.get('image')
			const ingredients: IIngredient[] = selectedProducts.map((product) => {return {name: product.label, quantity: product.quantity}})
			if (typeof name === 'string' && typeof description === 'string') {
				const newRecipe: IRecipe = {name, description, image: img, ingredients: ingredients}
				mutate(newRecipe)
			}
		}	
	}
	
	return useMemo(() => {
		return {
			handleSubmit,
			formRef
		}
	}, [isPending])
}