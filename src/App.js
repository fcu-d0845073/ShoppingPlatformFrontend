import { BrowserRouter, HashRouter ,Route ,Routes,Switch } from 'react-router-dom';
import './App.css';
import './components/Appbar'
import ButtonAppBar from './components/Appbar';
import Login from './components/LoginPage';
import SignUp from './components/SignUpPage';
import UpdateAccount from './components/UpdateAccount'
import CommodityPage from './components/CommodityPage';
import ShoppingCart from './components/ShoppingCart'
import CheckBill from './components/CheckBill'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path = "/" element = {<ButtonAppBar/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/login/signup" element = {<SignUp/>}/>
        <Route path = "/login/updateaccount" element = {<UpdateAccount/>}/>
        <Route path = "/Commodity" element = {<CommodityPage/>}/>
        <Route path = "/ShoppingCart" element = {<ShoppingCart/>}/>
        <Route path = "/CheckBill" element = {<CheckBill/>}/>
      </Routes>
    </HashRouter>
    
  );
}

export default App;
