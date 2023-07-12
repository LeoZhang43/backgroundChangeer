import React, {useContext, useEffect, useReducer} from 'react'
import reducer from './products_reducer'

const intialState = {
    isBlack: true,
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, intialState)
    const turnBalck = () => {
        dispatch({type: 'BLACK'})
    }
    const turnWhite = () => {
        dispatch({type: 'WHITE'})
    }
    return(
        <ProductsContext.Provider value={{...state,turnBalck,turnWhite}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}