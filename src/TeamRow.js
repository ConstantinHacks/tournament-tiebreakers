import React from 'react';
import PropTypes from 'prop-types'

export default class Team extends React.Component {
    static propTypes = {
        teamData: PropTypes.object,
    };

    // getWins(){
    //     var rv = 0;
    //     this.props.teamData.results.forEach(game => {
    //         if(game.teamScore > game.opponentScore){
    //             rv++
    //         }
    //     }); 
    //     return rv
    // }
    // getTies(){
    //     var rv = 0;
    //     this.props.teamData.results.forEach(game => {
    //         if(game.teamScore === game.opponentScore){
    //             rv++
    //         }
    //     }); 
    //     return rv
    // }
    // getLosses(){
    //     var rv = 0;
    //     this.props.teamData.results.forEach(game => {
    //         if(game.teamScore < game.opponentScore){
    //             rv++
    //         }
    //     }); 
    //     return rv
    // }
    // getGoalsFor(){
    //     var rv = 0;
    //     this.props.teamData.results.forEach(game => {
    //         rv += game.teamScore
    //     }); 
    //     return rv
    // }

    // getGoalsAgainst(){
    //     var rv = 0;
    //     this.props.teamData.results.forEach(game => {
    //         rv += game.opponentScore
    //     }); 
    //     return rv
    // }

    // getGoalDiff(){
    //     return this.getGoalsFor() - this.getGoalsAgainst()
    // }

    render(){
        return (
            <tr>
            <th>{this.props.teamData.name}</th>
            <td>{this.props.teamData.wins}</td>
            <td>{this.props.teamData.ties}</td>
            <td>{this.props.teamData.losses}</td>
            <td>{this.props.teamData.goalsFor - this.props.teamData.goalsAgainst}</td>
            <td>{this.props.teamData.points}</td>
            </tr>
        )
    }
}