const initialState = [] ;
 // it updates the object state and returns the updated state 
const reducer = (cart , action) => {
  switch (action.type) {
    case "INCREMENT": {
      let found = false ;
      const newCart = cart.map (item => {
        if (item.meal.id === action.meal.id) {
          found = true ;
          return {meal : item.meal , quantity : item.quantity + 1} ;
        }
        else {
          return item ;
        }
      }) ;
      if (!found) {
        return [...cart , {meal: action.meal , quantity: 1}] ;
      }
      else {
        return newCart ;
      }
    }
      case "DECREMENT" :{
        let shouldBeDeleted = false ;
        const newCart = cart.map (item => {
          if (item.meal.id === action.meal.id) {
            if (item.quantity === 1) {
              shouldBeDeleted = true ;
            }
            return {meal : item.meal , quantity : item.quantity - 1} ;
          }
          else {
            return item;
          }
        }) ;
        if (shouldBeDeleted) {
          return newCart.filter (item => item.meal.id !== action.meal.id) ;
        }
        else {
          return newCart ;
        }
      }
      default : break
  
  }

}
export {reducer , initialState} ;