import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
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
          <ProductCard
          product={product}
          className="bg-dark text-white"
          >
        <ProductCard.Image className="custom-image"/>
        <ProductCard.Title className="text-bold"/>
        <ProductCard.Buttons className="custom-buttons"/>
          </ProductCard>

        <ProductCard
          product={product2}
          className="bg-dark text-white"
          >
          <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
          <ProductTitle className="text-bold"/>
          <ProductButtons className="custom-buttons"/>
        </ProductCard>
        </div>
    </div>
  )
}
