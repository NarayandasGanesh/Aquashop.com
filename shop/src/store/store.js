import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import { Clothreducer } from "./Cloth/Cloth.reducer";
  import { reducer as authReducer } from "./Auth/auth.reducer";
  import thunk from "redux-thunk";
  
  const root_reducer = combineReducers({
    ClothManger: Clothreducer ,
    auth: authReducer,
  });
  
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  
  export const store = legacy_createStore(
    root_reducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  