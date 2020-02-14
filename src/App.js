import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import MyRoute from './components/MyRoute';
import { BrowserRouter } from 'react-router-dom'; //npm install react-router-dom
import Footer from './components/footer/Footer';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <ErrorBoundary>
          <MyRoute></MyRoute>
        </ErrorBoundary>
        <Footer></Footer>
      </BrowserRouter> 
    </div>
  );
}

export default App;
