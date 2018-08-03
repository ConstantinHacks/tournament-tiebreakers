import React from 'react';
import PropTypes from 'prop-types'
import './TeamRow.css'
export default class Team extends React.Component {
    static propTypes = {
        teamData: PropTypes.object,
    };

    getColor(rank) {
        return rank > 2 ? "table-danger" : "table-success"
    }

    render(){
        return (
            <tr className={this.getColor(this.props.teamData.rank)}>
            <th><img alt="Flag" src={process.env.PUBLIC_URL + this.props.teamData.icon}/> {this.props.teamData.name}</th>
            <td>{this.props.teamData.wins}</td>
            <td>{this.props.teamData.ties}</td>
            <td>{this.props.teamData.losses}</td>
            <td>{this.props.teamData.goalsFor - this.props.teamData.goalsAgainst}</td>
            <td>{this.props.teamData.points}</td>
            </tr>
        )
    }
}