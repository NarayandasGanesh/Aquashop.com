import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import { Clothreducer } from "./Cloth/Cloth.reducer";
  import { reducer as authReducer } from "./Auth/auth.reducer";
  import thunk from "redux-thunk";
import { Jeweleryreducer } from "./Jewelery/Jewelery.reducer";
import { Electronicsreducer } from "./Electronics/Electronics.reducer";
import { Cosmeticsreducer } from "./Cosmetics/Cosmetics.reducer";
import { Healthreducer } from "./Health/Health.reducer"

  
  const root_reducer = combineReducers({
    ClothManger: Clothreducer ,
    JeweleryManger:Jeweleryreducer,
    ElectronicsManger:Electronicsreducer,
    CosmeticsManger:Cosmeticsreducer,
    HealthManger:Healthreducer,
    auth: authReducer,
  });
  
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  
  export const store = legacy_createStore(
    root_reducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  