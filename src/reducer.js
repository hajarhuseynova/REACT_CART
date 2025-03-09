import {
  CLEAR_CART,
  DISPLAY_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
} from './actions'

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() }
  }
  if (action.type === LOADING) {
    return { ...state, loading: true }
  }
  if (action.type === DISPLAY_CART) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]))
    return { ...state, loading: false, cart: newCart }
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart)
    newCart.delete(action.payload.id)
    return { ...state, cart: newCart }
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart)
    const itemID = action.payload.id
    const item = newCart.get(itemID)
    const newItem = { ...item, amount: item.amount + 1 }
    newCart.set(itemID, newItem)
    return { ...state, cart: newCart }
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart)
    const itemID = action.payload.id
    const item = newCart.get(itemID)
    if (item.amount === 1) {
      newCart.delete(itemID)
      return { ...state, cart: newCart }
    }
    const newItem = { ...item, amount: item.amount - 1 }
    newCart.set(itemID, newItem)
    return { ...state, cart: newCart }
  }
  throw new Error(`no metchin action type ${action.type}`)
}

export default reducer
