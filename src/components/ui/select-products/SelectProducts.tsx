import { Dispatch, FC, useEffect } from 'react'

import { IProduct, ISelectedProduct } from '../../../shared/types/products/products.types'
import CreatableSelect from 'react-select/creatable'

import styles from './SelectProducts.module.scss'
import { useSelectProducts } from './useSelectProducts'

interface ISelectProducts {
	productsList?: IProduct[]
	selectedProducts: ISelectedProduct[]
	setSelectedProduct: Dispatch<React.SetStateAction<ISelectedProduct[]>>
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


const SelectProducts: FC<ISelectProducts> = ({selectedProducts, setSelectedProduct}) => {
	const {
			options,
			setOptions,
			values,
			createBaseOptions,
			handleChange,
			handleCreateOption,
			isPending
		} = useSelectProducts(selectedProducts, setSelectedProduct)
			
		useEffect(() => {
			// setOptions(createBaseOptions(productsList))
			setOptions(pidors1)
		}, [])
	
	return (
		<div>
			<CreatableSelect
				isDisabled={isPending}
				isLoading={isPending}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						color: 'black',
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						color: 'black'
					}),
				}}
				onChange={(newValues) => handleChange(newValues)}
				onCreateOption={(inputValue) => handleCreateOption(inputValue)}
				options={options}
				value={values}
				isMulti
				placeholder = 'Выберите продукты'
				form='search'
				inputId='products'
				id='products'
			/>
			
			<div className={styles.selectedProducts}>
				<ul>
					{!!selectedProducts.length && selectedProducts.map((product) => {
						return (
							<li key={product.label}>
								<span>{product.label}</span>
								<input 
									type='number' 
									defaultValue={product.quantity} 
									id={product.label} 
									onChange={(event) => {product.quantity = +event.target.value}}
								/>
								<span>{product.unit}</span>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default SelectProducts