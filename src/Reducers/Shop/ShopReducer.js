import { UPDATE_COLLECTIONS } from "../../Actions/Shop/ShopConstant";

const INIT_STATE = {
  collections: null
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
