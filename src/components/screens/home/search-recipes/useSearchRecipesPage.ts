import { useMemo, useState } from 'react'
import { IProduct, ISelectedProduct } from '../../../../shared/types/products/products.types'
import { MultiValue } from 'react-select'
import { useMutation } from '@tanstack/react-query'
import productsService from '../../../../services/products.service'

interface IOption {
  label: string
	value: string
	unit: string
}

export const useSearchRecipesPage = () => {
	const [options, setOptions] = useState<IOption[]>([])
	const [values, setValues] = useState<IOption[]>([])
	const [selectedProducts, setSelectedProducts] = useState<ISelectedProduct[]>([])
	
	const {mutate, isPending, isSuccess} = useMutation({
		mutationKey: ['add product'],
		mutationFn: ({
			productName
		}: {productName: string}) => productsService.create(productName)
	})
	
	const createOption = (label: string, unit: string): IOption => ({
		label,
		value: label,
		unit
	});

	const createBaseOptions = (productsList: IProduct[]) => 
		productsList.map((product) => createOption(product.name, product.unit))

	const handleChange = (newValues: MultiValue<IOption>): void => {
			if (newValues.length === 0){      
				setSelectedProducts([])
				setValues([])
			}
			else if (newValues.length > selectedProducts.length) {
				const newProduct: ISelectedProduct = {...newValues[newValues.length - 1], quantity: '0'}
				const newSelectedProducts: ISelectedProduct[] = [...selectedProducts, newProduct]
				
				if (Array.isArray(newValues)) {
					setValues(newValues)
				}
				setSelectedProducts(newSelectedProducts)
			}
			else if (newValues.length < selectedProducts.length) {
				const currentSelectedProducts = newValues.map((product) => product.label)
				let excludedProduct= ''
				
				for (const product of selectedProducts) {
					if (!currentSelectedProducts.includes(product.label)) {
						excludedProduct = product.label
					}
				}
				setSelectedProducts(selectedProducts.filter((product) => product.label !== excludedProduct))
			}
			
			if (Array.isArray(newValues)) {
				setValues(newValues)
			}
	}
		
	const handleCreateOption = (inputValue: string): void => {
		mutate({productName: inputValue})
		
		if (isSuccess) {
			let newProductUnit = prompt('Введите единицу измерения для нового продукта (шт, кг и тд)', 'шт')
			if (!newProductUnit) {
				newProductUnit = prompt('Введите единицу измерения для нового продукта(шт, кг и тд)', 'шт')
			}
			else {
				const newProduct = createOption(inputValue, newProductUnit);
				const newSelectedProduct: ISelectedProduct = {...newProduct, quantity: '0'}
				
				setOptions((prev) => [...prev, newProduct])
				setSelectedProducts((prev) => [...prev, newSelectedProduct])
			}
		}
	};
	
	const handleSearch = () => {
		
	}
	
	return useMemo(() => {
		return {
			options,
			setOptions,
			values,
			selectedProducts,
			createOption,
			createBaseOptions,
			handleChange,
			handleCreateOption,
			isPending
		}
	}, [isPending, options, values, selectedProducts])
}