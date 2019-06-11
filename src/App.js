import React from 'react';
import Navbar from 'sections/Navbar';
import Featured from 'sections/Featured';
import Tech from 'sections/Tech';
import Summary from 'sections/Summary';
import Contact from 'sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Featured />
      <Tech />
      <Summary />
      <Contact />
    </div>
  );
}

export default App;
