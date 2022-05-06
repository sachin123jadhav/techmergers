import './App.css';
import Header from './components/Header';
import Insights from './pages/Insights';
import Opportunities from './pages/Opportunities';
import TechNews from './pages/TechNews';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
     <Header> </Header>
     <Routes>
       <Route exact path='/' element={<TechNews></TechNews>} ></Route>
       <Route exact path='/opportunities' element={<Opportunities></Opportunities>} ></Route>
       <Route exact path='/insights' element={<Insights></Insights>} ></Route>
        
     </Routes>
     <Footer></Footer>
     
     
    </div>
    </Router>
  );
}

export default App;
