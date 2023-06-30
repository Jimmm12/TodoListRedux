

import { combineReducers } from "redux";

import  FiltersSlice from "../components/Filters/FiltersSlice";
import todoList from "../components/TodoList/todosList";



const rootReducer = combineReducers({
    filters : FiltersSlice,
    todoList: todoList
})


export default rootReducer;