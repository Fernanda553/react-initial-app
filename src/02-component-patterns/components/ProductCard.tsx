import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { createContext, CSSProperties, ReactElement } from 'react'
import { Product, ProductContextProps} from '../interfaces/interfaces'

  export const ProductContext = createContext({} as ProductContextProps)

    const { Provider } = ProductContext

    export interface Props{
      product: Product
      children?: ReactElement | ReactElement[]
      className?: string
      style?: CSSProperties
      onChange?: () => void
  }

export const ProductCard = ({children, product , className, style, onChange}: Props) => {
    const { counter, increaseBy} = useProduct(onChange)

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
            <div
            className={`${ styles.productCard } ${className}`}
            style={style}
            >
        {children}
{/*         <ProductImage img={product.img}/>
       <ProductTitle title={product.title}/>
       <ProductButtons
       increaseBy={increaseBy}
       counter={counter}
       /> */}
    </div>
    </Provider>
  )
}
