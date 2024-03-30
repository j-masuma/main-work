
import './App.css';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Library from './components/Library';
import StudyPlan from './components/StudyPlan';

function App() {
  return (
    <Routes >
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/study-plans' element={<StudyPlan/>}/>
        {/* Add route for dashboard and monitor progress */}
        <Route path='/library' element={<Library/>}/>
        <Route path='/footer' element={<Footer/>}/>

        
        
        
        
        
      </Route>
      
    </Routes>
  );
}

export default App;
