const products_reducer = (state, action) => {
    if(action.type === 'BLACK'){
        console.log('turnintoblack')
      return{...state, isBlack:true}
    }
    if(action.type === 'WHITE'){
        console.log('turnintowhite')
      return{...state, isBlack:false}
    }
    return state
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
export default products_reducer