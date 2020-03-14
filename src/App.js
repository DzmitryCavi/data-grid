import React from 'react';
import DataTableContainer from './components/table/tableContainer';
import ToolsContainer from './components/tools/toolsContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

 const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

function App() {
  return (
    <Provider store={store}>
       {/* <ToolsContainer /> */}
       <DataTableContainer />
    </Provider> 
  );
}

export default App;
