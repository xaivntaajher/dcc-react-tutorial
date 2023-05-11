import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {
  // can only update a state variable (entries) through it's function (setEntries)
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])

  function addNewEntry(entry){
    
    let tempEntries = [...entries, entry]; // spread operator used to spread apart the entries variable, take values into new array
    
    setEntries(tempEntries)
  }

  return (
    // addNewEntry with no () is used as reference, or a pointer and can execute the function, whereas with () is referencing the result.
    <div>
      <DisplayEntries parentEntries={entries}/>
      <AddEntryForm addNewEntryProperty={addNewEntry}/> 

    </div>
  );
}

export default App;
