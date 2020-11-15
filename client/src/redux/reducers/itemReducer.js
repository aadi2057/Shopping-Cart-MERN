import * as ActionTypes from "../actions/ActionTypes";

const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case ActionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case ActionTypes.ADD_ITEM:
      return { ...state, items: [action.payload, ...state.items] };

    case ActionTypes.ITEMS_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
}
