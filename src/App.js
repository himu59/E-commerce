import React,{useEffect} from 'react';
import { useStateValue } from './StateProvider';
import {auth} from './Firebase'
import {BrowserRouter  as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import './App.css';
import Login from './Login';
import Checkout from './Checkout'
import Home from './Home';
function App() {
  const [{user},dispatch] = useStateValue()

  //piece of code run on given condition
  useEffect(() => {
  const unsubscribe =  auth.onAuthStateChanged((authUser)=>{
      if(authUser) {
        // user logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else {
        dispatch({
          // nouser
          type:'SET_USER',
          user:null
        })
      }
    }) 
    return () =>  {
      unsubscribe()
    }
    
  }, [])
  console.log(user)
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
               <Header/>
              <Checkout></Checkout>
          </Route>
          <Route path="/login">
              <Header/>
              <Login></Login>
          </Route>
          <Route path="/">
              <Header/>
              <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default  App