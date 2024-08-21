import { useEffect, useRef, useState } from 'react'
import { OnChangeArgs, Product } from '../interfaces/interfaces'

interface UseProductsArgs {
  product: Product
  onChange?: (args: OnChangeArgs) => void
  value?: number
}

const useProduct = ({ onChange, product, value = 0 }: UseProductsArgs) => {
  const [counter, setCounter] = useState(value)
  const isControlled = useRef(!(onChange == null))

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product })
    }

    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)

    ;(onChange != null) && onChange({ count: newValue, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy
  }
}

export default useProduct
