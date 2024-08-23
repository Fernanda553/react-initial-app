import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { createContext, CSSProperties, ReactElement } from 'react'
import { InitialValues, OnChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
  product: Product
  // children?: ReactElement | ReactElement[]
  children:() => JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (args: OnChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues}: Props) => {
  const { counter, increaseBy, maxCount } = useProduct({ onChange, product, value, initialValues })

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount
    }}
    >
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children()}
      </div>
    </Provider>
  )
}
