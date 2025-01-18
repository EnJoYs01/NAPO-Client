import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { routes } from './routes.data'
import NotFound from '../components/screens/not-found/NotFound'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<NotFound />} >
			{routes.map(route => {
				return (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component/>}
					/>
				)
			})}
		</Route>
	)
)