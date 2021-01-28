import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Form from './Form/Form'
import Features from './Features/Features'
import Footer from './Footer'
import Foundation from './Foundation'
import Usp from './Usp'
import Topperspeak from './Topperspeak'
import Register from './Register'
import Onlinesupport from './Onlinesupport/Onlinesupport'
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App" >
     
      <BrowserRouter>
      <Header/>
      
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/register" component={Register} />
        
      </Switch>
    </BrowserRouter>
      <Footer/>

      
        
    </div>
  );
}

export default App;
