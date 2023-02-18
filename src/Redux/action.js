import {
  TODO_LOGIN,
  TODO_ERROR,
  TODO_REQUEST,
  ADD_TODO,
  DELETE_TODO,
} from "./action.type";
//* now i have to fo first request action
//* then success action
//* the i have to errro if api dont give data
import { useDispatch } from "react-redux";
import axios from "axios";
//!GetTodo is Here

export const getTodoResult = (payload) => (dispatch) => {
  dispatch({ type: TODO_REQUEST });
  try {
    let value = axios.get("http://localhost:8080/todo").then((res) => {
      dispatch({ type: TODO_LOGIN, payload: res.data });
    });
  } catch (err) {
    dispatch({ type: TODO_ERROR });
  }
};
//!Add Todo here
export const AddTodoValue = (payload) => (dispatch) => {
  try {
    let value = axios
      .post("http://localhost:8080/todo", payload)
      .then((res) => {
        dispatch({ type: ADD_TODO, payload: res.data });
      });
  } catch (err) {
    console.log(err);
  }
};
//!Delete Todo

export const deleteTodo = (id) => async (dispatch) => {
  try {
    let data = await axios.delete(`http://localhost:8080/todo/${id}`);
    dispatch({ type: DELETE_TODO, payload: id });
    dispatch(getTodoResult())
  } catch (err) {
    console.log(err);
  }
};
