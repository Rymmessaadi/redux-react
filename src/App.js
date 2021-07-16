import logo from './logo.svg';
import './App.css';
import PhoneComponents from './compoenents/PhoneComponents';
import TvComponent from './compoenents/tvComponenet';
import { Provider } from 'react-redux'
import store from './redux/store'
import CommentsComponents from './compoenents/commentsComponents';


function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneComponents />
        <TvComponent />
      </div>
      <CommentsComponents />
    </Provider>
  );
}

export default App;
