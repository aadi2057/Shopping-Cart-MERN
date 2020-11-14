import { v4 as uuid } from "uuid";
import * as ActionTypes from "../actions/ActionTypes";

const initialState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Fruits" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Steak" },
    { id: uuid(), name: "Water" },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_ITEMS:
      return {
        ...state,
      };

    case ActionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ActionTypes.ADD_ITEM:
      return { ...state, items: [action.payload, ...state.items] };

    default:
      return state;
  }
}
