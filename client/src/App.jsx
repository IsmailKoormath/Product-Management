import './App.css';
import SignUp from './pages/SignUP/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Home from './pages/Home/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/signup'element={<SignUp/>}/>
          <Route path='/'element={<SignIn/>}/>
          <Route path='/home'element={<Home/>}/>
          <Route path='/productdetails/:id'element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
