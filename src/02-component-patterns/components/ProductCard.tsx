import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import useProduct from '../hooks/useProduct'
import { Dispatch, ReactElement, useContext } from 'react'
import { createContext } from 'vm'

interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
}

interface Product {
    id: string,
    title: string,
    img?: string
}

interface ProductContextProps {
    value: number
    increaseBy: (value: number) => void
    product: Product
}

   const ProductContext = createContext({} as ProductContextProps)

   const { Provider } = ProductContext

export const ProductImage = ({img = ''}) => {
    return (
        <img
        className={styles.productImg}
        src={img ? img : noImage}
        alt='Product'/>
    )
}

export const ProductTitle = ({title}: {title: string}) => {
    return(
        <span className={styles.productDescription}>{title}</span>
    )
}


export const ProductButtons = () => {
    const {increaseBy, counter } = useContext(ProductContext)

    return(
        <div className={styles.buttonsContainer}>
        <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
        > - </button>
        <div className={styles.countLabel}>{counter}</div>
        <button
        className={styles.buttonAdd}
        onClick={() => increaseBy(+1)}
        > + </button>
    </div>
    )
}

export const ProductCard = ({children, product }: Props) => {
    const { counter, increaseBy} = useProduct()

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
            <div className={styles.productCard}>
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

ProductCard.Title   = ProductTitle
ProductCard.Image   = ProductImage
ProductCard.Buttons = ProductButtons
