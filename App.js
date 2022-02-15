import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/Dashboard";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
     <Routes>
       <Route path="/" element={<Layout/>}>
           <Route path="/" element={<Dashboard/>}/>
           <Route path="/registration" element={<RegistrationForm/>}/>
       </Route>
     </Routes>
  );
}

export default App;
