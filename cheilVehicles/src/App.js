import './App.css';
import Home from './Views/Home/home';
import { Provider } from 'react-redux';
import store from './Core/redux/store';
import { Routes, Route } from "react-router-dom"
import Login from './Views/Login/login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signIn" element={<Login />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
