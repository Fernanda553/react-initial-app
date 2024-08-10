import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

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
          <ProductCard.Title title={''}/>
          <ProductCard.Buttons/>
        </ProductCard>
        </div>
    </div>
  )
}
