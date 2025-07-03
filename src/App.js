import './App.css';
import Navigation from './components/Navigation/Navigation.jsx';
import Home from './pages/Home/Home.jsx';
import Bank from './pages/Bank/Bank.jsx';
import Budget from './pages/Budget/Budget.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* A <BrowserRouter></BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates the browser's built-in history stack */}
        <Routes>
          {/* Rendered anywhere in the application. <Routes></Routes> will match a set of child routes from the current location */}
          {/* Route - most important part of react-router. They couple URL segments to components/pages, data loading and data mutations. Through route nesting, complex layouts and data dependencies become simple and declarative */}
          <Route path="/" element={<Navigation />}>
            {/* index is similar to root (/) */}
            <Route index element={<Home />} />
            <Route path="bank" element={<Bank />} />
            <Route path="budget" element={<Budget />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;