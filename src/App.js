
import './App.css';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Library from './components/Library';
import StudyPlan from './components/StudyPlan';
//import ChatWithpdf from './components/ChatWithPdf';
import LibraryPage from './pages/LibraryPage';
import StudyPlanPage from './pages/StudyPlanPage';
//import Login from './components/Login';
//import Chats from './components/Chats';

function App() {
  return (
    <Routes >
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/study-plans' element={<StudyPlan/>}/>
        {/* Add route for dashboard and monitor progress */}
        <Route path='/library' element={<Library/>}/>
        <Route path='/library-page' element={<LibraryPage/>}/>
        <Route path='/footer' element={<Footer/>}/>
        {/* <Route path='/chatwithpdf' element={<ChatWithpdf/>}/> */}
        <Route path='/study-plan-page' element={<StudyPlanPage/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
        {/* <Route path='/tutor-bot' element={<Chats/>}/> */}
        
        
      </Route>
      
    </Routes>
  );
}

export default App;
