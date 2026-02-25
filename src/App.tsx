
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import { Home } from "./Home/page";
import { About } from "./About/page";
import { Contact } from "./contact/page";
import { Blog } from "./blog/page";

export const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element= { <Home/>} />
      <Route path ="/About-us" element= { <About/>} />
      <Route path ="/Contact" element= { <Contact/>} />
      <Route path ="/blog" element= { <Blog/>} />
      
    </Routes> 

    </BrowserRouter>
  );
}

export default App;
