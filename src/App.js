import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Navbar from './pages/Navbar';
import Register from './pages/Register';
import Chefs from './components/Chefs';
import Platos from './components/platos';
import TopPage from './components/Top3chefs';
import ResaurantPage from './pages/restaurants';
import FooterPage from './pages/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Register/>
      <Chefs/>
      <Platos/>
      <TopPage/>
      <ResaurantPage/>
      <FooterPage/>
      
    </div>
  );
}

export default App;
