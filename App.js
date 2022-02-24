import './components/Todo/TodoComponent.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/Dashboard";
import RegistrationForm from "./components/RegistrationForm";
import CrudAPI from "./components/crudAPI/CrudAPI";
import TodoComponent from "./components/Todo/TodoComponent";
import BasicTable from "./components/Table/BasicTable";
import SearchFilter from "./components/searchFilter/SearchFilter";
import Pagination from "./components/pagination/Pagination";
import ControlTable from "./components/DesignTable/ControlTable";

function App() {
  return (
     <Routes>
       <Route path="/" element={<Layout/>}>
           <Route path="/" element={<Dashboard/>}/>
           <Route path="/todo" element={<TodoComponent/>}/>
           <Route path="/registration" element={<RegistrationForm/>}/>
           <Route path="/user" element={<CrudAPI/>}/>
           <Route path="/basictable" element={<BasicTable/>}/>
           <Route path="/searchfilter" element={<SearchFilter/>}/>
           <Route path="/pagination" element={<Pagination/>}/>
           <Route path="/controltable" element={<ControlTable/>}/>
       </Route>
     </Routes>
  );
}

export default App;
