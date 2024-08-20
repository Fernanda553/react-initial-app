import { useState } from "react"
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/interfaces"
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: '../images/coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffe Mug - Meme',
  img: '../images/coffeemug2.png'
}


const products: Product[] = [product, product2]

interface ProductInCart extends Product{
  count: number
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({})

  const onProductCountChange = ({count, product}: {count: number, product: Product}) => {

    setShoppingCart(oldShoppingCart => {

      if(count === 0){
        const {[product.id]: toDelete, ...rest} = oldShoppingCart

        return rest
      }

      return {
        ...oldShoppingCart,
        [product.id]: {...product, count}
      }
    })
  }

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          {products.map( product => (
       <ProductCard
       key={product.id}
       product={product}
       className="bg-dark text-white"
       onChange={onProductCountChange}
       >
       <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
       <ProductTitle className="text-bold"/>
       <ProductButtons
       className="custom-buttons"
       style={{
        display:'flex',
        justifyContent: 'center'
       }}
       />
     </ProductCard>
          ))}

        </div>

        <div className="shopping-cart">

        { Object.entries(shoppingCart).map(([key, product]) => (
                  <ProductCard
                  key={key}
                  product={product}
                  className="bg-dark text-white"
                  style={{ width:'100px' }}
                  value={product.count}
                  >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                  <ProductTitle className="text-bold"/>
                  <ProductButtons className="custom-buttons"/>
                </ProductCard>
        ))}

        </div>

    </div>
  )
}
