import React from 'react';
import './App.css';
import TeamTable from './TeamsTable.js'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Result from './Result.js'

class App extends React.Component {

  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
  }

  state = {
    results : require('./models/A.json'),
    selectedGroupID: "A",
    groups: ["A","B","C","D","E","F","G","H"],
    dropdownOpen: false
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

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  changeGroup(id){
    console.log(id)
    this.setState({selectedGroupID:id})
    this.setState({results : require(`./models/${id}.json`)})
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm">
        <h2>Group {this.state.selectedGroupID}</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Win</th>
              <th scope="col">Draw</th>
              <th scope="col">Loss</th>
              <th scope="col">GD</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <TeamTable results={this.state.results}></TeamTable>
        </table>
      </div>
      <div className="col-sm">

        <div className="dropdown">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Change Group
            </DropdownToggle>
            <DropdownMenu>
            {this.state.groups.map((groupID) =>
                <DropdownItem key={groupID} className="dropdown-item" onClick={() => this.changeGroup(groupID)}>Group {groupID}</DropdownItem>
            )}
            </DropdownMenu>
          </Dropdown>
        </div>

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
