import React from 'react';

function App() {
  return (
    <>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
    </>
  );
}

function ComponentOne() {
  return <h1>Component One</h1>
}

function ComponentTwo() {
  return <h1>Component Two</h1>
}
function ComponentThree() {
  return <h1>Component Three</h1>
}

export default App;
