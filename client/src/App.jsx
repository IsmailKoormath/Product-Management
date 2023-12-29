import './App.css';
import SignUp from './pages/SignUP/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      <ProductDetails/>
    </div>
  );
}

export default App;
