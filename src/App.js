
import './App.css';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Library from './components/Library';
//import StudyPlan from './components/StudyPlan';
import ChatWithpdf from './components/ChatWithPdf';
import LibraryPage from './pages/LibraryPage';
import StudyPlanPage from './pages/StudyPlanPage';
import Detective from './components/Detective';
import Login from './components/Login';
import Signup from './components/Signup';
import Quiz from './components/Quiz';
import Summarize from './components/Summarize';
import {FlashCards} from './components/FlashCards';
import LandingPage from './pages/LandingPage';
import Offerings from './components/Offerings';
import Faqs from './components/Faqs';
import SummaryPage from './pages/SummaryPage';

//import Chats from './components/Chats';

function App() {
  return (
    <Routes >
      <Route>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/library-page' element={<LibraryPage/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/chatwithpdf' element={<ChatWithpdf/>}/>
        <Route path='/study-plan-page' element={<StudyPlanPage/>}/>
        <Route path='/detective' element={<Detective/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/quizes' element={<Quiz/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/summary' element={<SummaryPage/>}/>
        <Route path='/flashcards' element={<FlashCards/>}/>
        <Route path='/offerings' element={<Offerings/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
        {/* <Route path='/tutor-bot' element={<Chats/>}/> 
         */}
        
      </Route>
      
    </Routes>
  );
}

export default App;
