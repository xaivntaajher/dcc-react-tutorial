import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './App.css';

function App() {
  // can only update a state variable (entries) through it's function (setEntries)
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])

  function addNewEntry(entry){
    
    let tempEntries = [...entries, entry]; // spread operator used to spread apart the entries variable, take values into new array
    
    setEntries(tempEntries)
  }

  return (
    // addNewEntry with no () is used as reference, or a pointer and can execute the function, whereas with () is referencing the result.
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Weight 
        <small className='text-muted'>Tracker</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries}/>
          </div>
          <div className='border-box'>
            <AddEntryForm addNewEntryProperty={addNewEntry}/> 
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker parentEntries={entries}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
