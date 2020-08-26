import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
    const store = createStore(persistedReducer, applyMiddleware(reduxThunk));
    const persist = persistStore(store)
    return { store, persist }
}
