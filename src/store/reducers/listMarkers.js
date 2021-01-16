import { STORE_DATA } from "../constants";

const initialState = {
  items: [],
};

const listMarkers = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default listMarkers;
