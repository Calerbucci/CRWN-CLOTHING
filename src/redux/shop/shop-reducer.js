import Shopdata from '../../pages/shop/Shopdata'
const INITIAL_STATE = {
    collections: Shopdata
}
    
  
  const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
         return state
    }
};

export default shopReducer;
