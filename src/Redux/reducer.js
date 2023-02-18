import React from "react";
import {
  ADD_TODO,
  DELETE_TODO,
  TODO_ERROR,
  TODO_LOGIN,
  TODO_REQUEST,
} from "./action.type";
const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TODO_LOGIN: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }

    case TODO_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case DELETE_TODO: {
      const deleteValue = state.data.filter((el) => el.id !== payload.id);
      console.log("deletevalue", deleteValue);
      return {
        ...state,
        data: deleteValue,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
