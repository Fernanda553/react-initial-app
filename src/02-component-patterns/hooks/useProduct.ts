import { useEffect, useRef, useState } from 'react'
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces'

interface UseProductsArgs {
  product: Product
  onChange?: (args: OnChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductsArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)
  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0)

    // Aquí puedo poner una alerta al usuario de que esta llevando más articulos de los que se permiten
    if(initialValues?.maxCount) newValue = Math.min(newValue, initialValues?.maxCount)

    setCounter(newValue);

    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count ?? value)
  }

  useEffect(() => {
    isMounted.current = true
  }, [])

  useEffect(() => {
    if (!isMounted.current) return

    setCounter(initialValues?.count !== undefined ? initialValues.count : value)
  }, [value])


  return {
    counter,
    maxCountReached: !!initialValues?.count && initialValues.maxCount === counter ,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  }
}

export default useProduct
