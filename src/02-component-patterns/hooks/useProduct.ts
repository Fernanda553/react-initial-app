import { useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/interfaces"

interface UseProductsArgs {
  product: Product
  onChange?: (args: OnChangeArgs) => void
}

 const useProduct = ({ onChange, product }: UseProductsArgs) => {
    const [counter, setCounter] = useState(0)

    const increaseBy = (value: number) => {
      const newValue = Math.max( counter + value, 0)
        setCounter(newValue)

       onChange && onChange({count: newValue, product: product })
    }

  return {
    counter,
    increaseBy
  }
}

export default useProduct