import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
           <AuthContextProvider>
   <Provider store={store}>
      <App />
  </Provider>
      </AuthContextProvider>,
  document.getElementById('root')
);