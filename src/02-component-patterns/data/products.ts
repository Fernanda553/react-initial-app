import { Product } from "../interfaces/interfaces"

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


  export const products: Product[] = [product, product2]