import React from 'react';
import ShowForm from './components/ShowForm'

function App() {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="ml-5 mr-5">
          <h1 className="display-4">BrowMovie</h1>
          <p className="lead">Entertainment show finder</p>
          <hr className="my-4" />
          <p className="text-center">Find the show information selecting the genre and a key word</p>
          <ShowForm />
        </div>
      </div>
    </div>
  )
}

export default App;
