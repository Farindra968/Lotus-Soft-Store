'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

const MainProvider = ({children}) => {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              {children}
              </PersistGate>
    </Provider>
  )
}

export default MainProvider
