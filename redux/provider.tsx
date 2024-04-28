"use client"

import { Provider } from "react-redux"
import {store , persistor} from "./store"
import { PersistGate } from "redux-persist/integration/react"

export const Providers = ({children}:any) => {
    return (
        <PersistGate persistor={persistor}>
        <Provider store={store}>
            {children}
        </Provider>
        </PersistGate>
    )
}