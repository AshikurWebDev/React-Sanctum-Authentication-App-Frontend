import React from "react"
import './App.css';
import { AppProvider } from "./contexts/AppContext"
import AuthContainer from './Components/AuthContainer';


function App() {
  return (
    <div className="flex w-full justify-center bg-blue-200 pt-16 pb-32">
      <div className="lg:flex w-11/12 lg:w-3/4 xl:w-3/5">
        <AppProvider>
          <AuthContainer />
        </AppProvider>
      </div>
    </div>
  );
}

export default App;
