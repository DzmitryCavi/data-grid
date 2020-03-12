import React from 'react';
import DataTableContainer from './components/table/tableContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);
console.log(store.getState()) 
function App() {
  return (
    <Provider store={store}>
       <DataTableContainer />
    </Provider> 
  );
}

export default App;
