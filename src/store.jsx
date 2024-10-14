// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import chatReducer from './chatSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      {/* Your App Components */}
    </Provider>
  );
}

export default App;
