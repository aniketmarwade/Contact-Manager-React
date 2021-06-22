import React from 'react';
import './App.css';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.css";

import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  return (
   
     <div>
       <Header />
       <AddContact />
       <ContactList />
     </div>
   
  );
}

export default App;
