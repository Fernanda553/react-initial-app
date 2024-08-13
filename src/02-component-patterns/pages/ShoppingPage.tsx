import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: '../images/coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCard product={product}>
        <ProductCard.Image/>
        <ProductCard.Title title={'Hola Mundo'}/>
        <ProductCard.Buttons/>
          </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark text-white"
          >
          <ProductImage className="custom-image text-bold"/>
          <ProductTitle />
          <ProductButtons className="custom-buttons"/>
        </ProductCard>
        </div>
    </div>
  )
}
