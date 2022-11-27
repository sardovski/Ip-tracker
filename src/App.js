import React from "react";
import Header from "./Components/Header";
import { IpDataProvider } from "./Context/IpDataContext";
import Map from "./Components/Map";


function App() {


  return (
    <IpDataProvider>
      <Header />
      <Map/>

    </IpDataProvider>
  );
}

export default App;
