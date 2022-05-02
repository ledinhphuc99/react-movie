
import "./assets/boxicons-2.1.2/css/boxicons.min.css";
import "./App.scss";
import 'swiper/scss';
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";



import Router from "./config/Routes";


function App() {


  return (
    
      <BrowserRouter>
            <Header  />
            <Router/>
           <Footer />
      </BrowserRouter>
   
  );
}

export default App;
