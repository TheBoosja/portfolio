import React from 'react';
import Navbar from 'sections/Navbar';
import Featured from 'sections/Featured';
import Tech from 'sections/Tech';
import Summary from 'sections/Summary';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Featured />
      <Tech />
      <Summary />
    </div>
  );
}

export default App;
