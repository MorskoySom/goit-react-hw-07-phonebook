import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const contactsPersistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsPersistedReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    }

})

export const persistor = persistStore(store);

