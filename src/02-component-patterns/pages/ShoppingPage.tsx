import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { products } from '../data/products'

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div>

        <ProductCard
          key={product.id}
          product={product}
          className='bg-dark text-white'
        >
          <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle className='text-bold' />
          <ProductButtons
            className='custom-buttons'
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          />
        </ProductCard>

      </div>

    </div>
  )
}
