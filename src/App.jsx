import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import Home from './components/home/home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
