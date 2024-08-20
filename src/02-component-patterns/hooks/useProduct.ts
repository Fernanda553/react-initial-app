import { useEffect, useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/interfaces"

interface UseProductsArgs {
  product: Product
  onChange?: (args: OnChangeArgs) => void
  value?: number
}

 const useProduct = ({ onChange, product, value = 0 }: UseProductsArgs) => {
    const [counter, setCounter] = useState(value)

    const increaseBy = (value: number) => {
      const newValue = Math.max( counter + value, 0)
        setCounter(newValue)

       onChange && onChange({count: newValue, product: product })
    }

    useEffect((() => {
      setCounter(value)

    }),[value])

  return {
    counter,
    increaseBy
  }
}

export default useProduct