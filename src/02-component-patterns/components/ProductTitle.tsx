import { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface Props {
  title?: string
  className?: string
  style?: CSSProperties
}

export const ProductTitle = ({ title, className }: Props) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={`${styles.productDescription} ${className}`}>{title || product.title}</span>
  )
}
