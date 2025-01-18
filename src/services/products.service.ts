import { $axios } from '../api'

const PRODUCTS_URL = '/products'

class ProductsService {
	// async getAll() {
	// 	const axiosInstance = $axios()
	// 	try {
	// 		const { data } = await axiosInstance.get(`${PRODUCTS_URL}`)
			
	// 		return data
	// 	} catch (error: any) {
	// 		const message = error.response?.data?.message || error.message;
			
	// 		throw new Error(message);
	// 	}
	// }
	
	async getAll() {
    const axiosInstance = $axios();
    return axiosInstance.get(PRODUCTS_URL);
  }
	
	async create(name: string) {
		const axiosInstance = $axios();
		return axiosInstance.post(PRODUCTS_URL, {name})
	}
}

export default new ProductsService()