import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Reducers/userSlice'
import tripSlice from './Reducers/tripSlice'
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";

const store = configureStore({
    reducer:{
        'user':userSlice,
        'trip':tripSlice
    },
    devTools: false,
    enhancers: (getDefaultEnhancers) =>
      getDefaultEnhancers().concat(devToolsEnhancer()),
})

export default store