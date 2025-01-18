export interface ISelectedProduct{
	label: string
	value: string
	quantity: number
	unit: string
}

export interface IProduct {
	name: string
	unit: string
}

const fieldsForCheck = ['label', 'value', '	quantity', 'unit']

export const checkType = (arg: any): arg is ISelectedProduct => Object.keys(arg).every((value, index) => value === fieldsForCheck[index])