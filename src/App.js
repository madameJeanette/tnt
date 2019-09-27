import React, { Suspense } from 'react';
import Navbar from './components/layout/Navbar'
import './App.scss';
import { ClientContextProvider } from 'react-fetching-library';
import { Client } from './components/apicalls/Client';


  //added fetching-library client to root.
  
 
function App() {
    return (
  
    <ClientContextProvider client={Client}> 
    <Suspense fallback={<span>Loading</span>}>
        <div className="App">
             <Navbar/>
        </div>
        </Suspense> 
        </ClientContextProvider>
    
        //suspense lazy loading added 
        // Routing for github pages moved to navbar
    );
    
}
export default App
 
