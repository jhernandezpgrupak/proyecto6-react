import './App.css';
import {Route, Link} from "wouter"
import Home from './pages/Home/index.js'
import SearchResults from './pages/Search';
import Context from './context/StaticContext';
import Detail from  './pages/Detail/index'
import { GifsContextProvider } from './context/GifsContext';
// const mygifs1 = [
//   'https://media4.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.gif',
//   'https://media2.giphy.com/media/vKHKDIdvxvN7vTAEOM/giphy.gif?cid=ecf05e47edbzktya6hxbeix2eqsqbdch7gz99tict64wl6m2&rid=giphy.gif&ct=g',
//   'https://media1.giphy.com/media/Qa97lmqC43yIyOEzwT/giphy.gif?cid=ecf05e479jizpr08ik27i7dbizkeispy2anygn9incrr7bxb&rid=giphy.gif&ct=g'
// ]

// const mygifs2 = [
//   'https://media4.giphy.com/media/0mKPytMujTds4e26IS/200.webp?cid=ecf05e477k4dtipn8uem3ko16t9m3h8hiro6trwon0719ckk&rid=200.webp&ct=g',
//   'https://media3.giphy.com/media/MQ4bWOjn8C9tT2dzIb/200.webp?cid=ecf05e477k4dtipn8uem3ko16t9m3h8hiro6trwon0719ckk&rid=200.webp&ct=g',
//   'https://media3.giphy.com/media/mx1ZCSrcP6W45hojc5/200.webp?cid=ecf05e477k4dtipn8uem3ko16t9m3h8hiro6trwon0719ckk&rid=200.webp&ct=g'
// ]

function App() {
  return (
    <Context.Provider value={{}}>
      <div className="App">
        <section className="App-content">      
        <ul>
            <GifsContextProvider>
              <Link to="/">Home</Link>          
              <Route
                component={Home}
              />            
              <Route
                component={SearchResults} //Params
                path="/search/:keyword"
              />          
              <Route
                component={Detail}
                path="/gif/:id"  
              />
            </GifsContextProvider>
          </ul>
        </section>  
      </div>
    </Context.Provider>
  );
}

export default App;