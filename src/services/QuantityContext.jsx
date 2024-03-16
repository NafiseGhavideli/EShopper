import { createContext, useState } from "react";

const QuantityContext = createContext()

export default QuantityContext ;

export const QuantityProvider = ({children}) => {
    const [quantity , setQuantity] = useState(0)


return (
    <QuantityContext.Provider value={{quantity,setQuantity}}>
        {children}
    </QuantityContext.Provider>
)
}