import { FC, FormEvent, useRef, useState } from 'react'

import Layout from '../../layout/Layout'
import SelectProducts from '../../ui/select-products/SelectProducts'
import { Form, Link } from 'react-router-dom'

import styles from './NewRecipe.module.scss'

import { ISelectedProduct } from '../../../shared/types/products/products.types'

import { useAllProducts } from '../home/search-recipes/useAllProducts'
import { useNewRecipePage } from './useNewRecipePage'


const NewRecipe: FC = () => {
	const productsList = useAllProducts()
	const [selectedImage, setSelectedImage] = useState<File | null>(null)
	const [selectedProducts, setSelectedProducts] = useState<ISelectedProduct[]>([])
	
	const {handleSubmit, formRef} = useNewRecipePage(selectedProducts)
	
	return (
		<Layout>
			<div className={styles.newRecipe}>
				<Link to={'/'}>Вернуться к выбору рецепта</Link>
				<h1>Создайте свой рецепт</h1>
				<Form method='post' onSubmit={(event) => handleSubmit(event)} ref={formRef}>
					<label className={styles.name}>
						<span>Название:</span>
						<input type='text' name='name' placeholder='Введите название рецепта' required/>
					</label>
					<label className={styles.image}>
						<span>Изображение готового блюда</span>
						<input type='file' name='image' onChange={(event) => event.target.files ? setSelectedImage(event.target.files[0]) : '' }/>
						<img src={selectedImage ? URL.createObjectURL(selectedImage) : '/public/images/default.jpg'} alt="recipe image" />
					</label>
					<SelectProducts
						productsList={productsList}
						selectedProducts={selectedProducts} 
						setSelectedProduct={setSelectedProducts} 
					/>
					<label className={styles.description}>
						<span>Описание</span>
						<textarea required name='description' cols={135} rows={30}></textarea>
					</label>
					<button type='submit'>Create</button>
				</Form>
			</div>
		</Layout>
	)
}

export default NewRecipe