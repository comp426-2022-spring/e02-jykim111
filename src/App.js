// Import necessary hooks from react 
import React, { useState, useEffect } from 'react';
// You can change the style of what is displayed on the client using ./App.css
import './App.css';
// The main component of our react app is the function below
// Everything that we need to both processs the data that we input and also display the HTML form and results within it is here.
function App() {
  // This sets two new state variables for the sum using the state hook
  // https://reactjs.org/docs/hooks-state.html
  const [currentSum, setCurrentSum] = useState(0);
  // This sets two new state variables for clearing the sum field and other fields
  const [clear, setClear] = useState(false);
  // This uses the effect hook to update part of the interface. In this case, the result field.
  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    document.querySelector('#result').value = "";
  }, [])
  // Similiarly to above, this clears the result field in the HTML form.
  useEffect(() => {
    if (clear)
      document.querySelector('#result').value = "";
  })
  // This is the component that will handle the event generated by clicking the CLEAR button in the HTML form
  const Clear = (e) => {
    e.preventDefault();
    //console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }
  // This is the component that will handle the event generated by clicking the ADD button in the HTML form
  const Add = (e) => {
    // This is required to prevent the default HTML form behavior.
    // You cannot set this to false the way that you might in a standard HTML form.
    // https://reactjs.org/docs/handling-events.html
    e.preventDefault();
    // This makes it so the event does not clear the form, but instead updates it (or, really, just does whatever we tell it to do next).
    if (clear) setClear(false);
    // These variables correspond to the IDs of the input fields in your HTML form below
    // 1. Create other variables for assignments, exams, and engagement here
    let currentA00 = document.querySelector('#a00').value
    let currentA01 = document.querySelector('#a01').value
    let currentA02 = document.querySelector('#a02').value
    let currentA03 = document.querySelector('#a03').value
    let currentA04 = document.querySelector('#a04').value
    let currentA05 = document.querySelector('#a05').value

    let currentMidterm = document.querySelector('#midterm').value
    let currentCommits = document.querySelector('#commits').value

    let currentE01 = document.querySelector('#e01').value
    let currentE02 = document.querySelector('#e02').value

    let currentFinals = document.querySelector('#finals').value
    let currentA99 = document.querySelector('#a99').value
    if (currentSum === '')
      return;
    // 2. This line is where you add the points all together. Add your other variable references here. Make sure that they match what is above and what is below in the HTML form
    let sum = parseInt(currentA00) + parseInt(currentA01) + parseInt(currentA02) + parseInt(currentA03)
      + parseInt(currentA04) + parseInt(currentA05) + parseInt(currentMidterm)
      + parseInt(currentCommits) + parseInt(currentE01) + parseInt(currentE02)
      + parseInt(currentFinals) + parseInt(currentA99);

    setCurrentSum(sum);
  }

  // The main return() for our app is the HTML that gets updated when we interact with it.
  // 3. Create other assignment, exam, and engagement score fields below. Make sure the ID matches what is above.
  // Pay attention to how react is handling the click events below. It is different than in a standard HTML form, but uses a similar logic. 
  // https://reactjs.org/docs/handling-events.html
  // Note also how we set the value of the result input field readonly and display currentSum, whether it is cleared or updated with current numbers in the form.
  return (
    <div className="App">
      <div className="app-title">
        <h1>COMP 426 Points</h1>
      </div>
      <form>
        <input type="text" id="a00" placeholder="a00 Setup" /><br /><br />
        <input type="text" id="a01" placeholder="a01 Node" /><br /><br />
        <input type="text" id="a02" placeholder="a02 Functions & Modules" /><br /><br />
        <input type="text" id="a03" placeholder="a03 Make an API" /><br /><br />
        <input type="text" id="a04" placeholder="a04 Databases, logs, errors, and middleware" /><br /><br />
        <input type="text" id="a05" placeholder="a05 Human Interface" /><br /><br />
        <input type="text" id="midterm" placeholder="Midterm" /><br /><br />
        <input type="text" id="commits" placeholder="GH Commits" /><br /><br />
        <input type="text" id="e01" placeholder="e01 HTML+CSS" /><br /><br />
        <input type="text" id="e02" placeholder="e02 React" /><br /><br />
        <input type="text" id="finals" placeholder="Finals" /><br /><br />
        <input type="text" id="a99" placeholder="a99 Final Project" /><br /><br />
        <button onClick={Add}>Add</button>
        <button onClick={Clear}>Clear</button>
        <label for="result"><b>Result:</b></label>
        <input type="text" id="result" value={currentSum} readOnly />
      </form>
    </div>
  );
}

export default App;
