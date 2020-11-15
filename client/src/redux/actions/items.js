import * as ActionTypes from "./ActionTypes";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());

  axios.get("/api/items").then((res) =>
    dispatch({
      type: ActionTypes.GET_ITEMS,
      payload: res.data,
    })
  );
};

export const addItem = (item) => (dispatch) => {
  axios.post("/api/items", item).then((res) =>
    dispatch({
      type: ActionTypes.ADD_ITEM,
      payload: res.data,
    })
  );
};

export const deleteItem = (id) => (dispatch) => {
  console.log(id);
  axios.delete(`/api/items/${id}`).then((resp) =>
    dispatch({
      type: ActionTypes.DELETE_ITEM,
      payload: id,
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ActionTypes.ITEMS_LOADING,
  };
};
