import cn from 'clsx'
import { Children, FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'

interface ILayout { 
	backLink?: string
}

const Layout: FC<PropsWithChildren<ILayout>> = (props = {backLink: '/'}) => {
	return (
		<section className={cn(styles.wrapper)}>
			{props.children && <div className={styles.container}>{props.children}</div>}
		</section>
	)
}

export default Layout