import './App.css';
import Menu from './components/menu';
import HomePage from './pages/HomePage.jsx';
import { BrowserRouter as Router, useRoutes, Link } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import AboutMIPage from './pages/AboutMIPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import Page404 from './pages/page404';


const Routes = () =>
  useRoutes([
    { path:'/', element:<HomePage /> },
    { path:'/aboutmi', element:<AboutMIPage/> }, 
    { path:'/skills', element:<SkillsPage/> },
    { path:'/projects', element:<ProjectsPage/> },
    { path:'/contact', element:<ContactPage /> },
    { path:'/*', element: <Page404/>}
  ])


function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
