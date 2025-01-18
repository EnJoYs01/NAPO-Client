import styles from "./Home.module.scss"

import Layout from '../../layout/Layout'

import SearchRecipes from './search-recipes/SearchRecipes'
import { useAllProducts } from './search-recipes/useAllProducts'

const Home = () => {
  const productsList = useAllProducts()
  
  return (
    <Layout>
      <div className={styles.home}>
        <h1><pre>
          НЕ ЗНАЕТЕ ЧТО ПРИГОТОВИТЬ?  —   ТОГДА ВЫ ПО АДРЕСУ: <br />
          НАЙДЕМ ДЛЯ ВАС ПОДХОДЯЩИЙ РЕЦЕПТ ИЗ ИМЕЮЩИХСЯ У ВАС ПРОДУКТОВ
           </pre>
        </h1>
        
        <SearchRecipes productsList={productsList} />        
        
      </div>
    </Layout>
  )
}

export default Home