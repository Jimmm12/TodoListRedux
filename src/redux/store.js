// import { createStore } from "redux"
// import rootReducer from "./reduxcer";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const compsedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer,compsedEnhancers );

// export default store


import { configureStore } from "@reduxjs/toolkit"
import FiltersSlice from "../components/Filters/FiltersSlice"
import todoList from "../components/TodoList/todosList";

const store = configureStore({
    reducer: {
        filters: FiltersSlice.reducer,
        todoList: todoList.reducer,

    }
})

export default store;