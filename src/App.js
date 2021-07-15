import logo from './logo.svg';
import './App.css';
import PhoneComponents from './compoenents/PhoneComponents';
import TvComponent from './compoenents/tvComponenet';
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneComponents />
        <TvComponent />
      </div>
    </Provider>
  );
}

export default App;
