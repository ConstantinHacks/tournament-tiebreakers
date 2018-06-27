import React from 'react';
import './App.css';
import TeamTable from './TeamsTable.js'
import Result from './Result.js'

class App extends React.Component {
  state = {
    results : require('./models/wc2018-teams.json')
  };
  
  updateResults = (gameObject,team,e) =>{
    const gameID = gameObject.id-1
    const newScore = e.target.valueAsNumber
    if(newScore > -1){
      var newResults = this.state.results
      newResults[gameID][team] = newScore 
      this.setState({results:newResults})
    }
  }

  render() {
    return (
      <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Win</th>
            <th scope="col">Draw</th>
            <th scope="col">Loss</th>
            <th scope="col">Goal Diff</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <TeamTable results={this.state.results}></TeamTable>
      </table>
      <div className="center">
        <ul className="list-unstyled">
          <Result 
          onChange={this.updateResults}
          results={this.state.results}/>
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
