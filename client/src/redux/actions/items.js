import * as ActionTypes from "./ActionTypes";

export const getItems = () => {
  return {
    type: ActionTypes.GET_ITEMS,
  };
};

export const deleteItem = (id) => {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: id,
  };
};

export const addItem = (item) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: item,
  };
};
