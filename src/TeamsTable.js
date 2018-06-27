import React from 'react';
import TeamRow from './TeamRow.js'

export default class TeamTable extends React.Component {
    getTeams() {
        var teamsToAdd = []
        this.props.results.forEach(game => {
            var teamAIndex = teamsToAdd.map(function(e) {return e.name}).indexOf(game.teamA)
            var teamBIndex = teamsToAdd.map(function(e) {return e.name}).indexOf(game.teamB)
            if(teamAIndex === -1){
                var newTeam = {
                    "name" : game.teamA,
                    "results" : [
                        { "opponent": game.teamB,
                        "teamScore": game.scoreA,
                        "opponentScore": game.scoreB }
                    ]
                }
                teamsToAdd.push(newTeam)
            } else {
                teamsToAdd[teamAIndex].results.push({
                    "opponent": game.teamB,
                    "teamScore": game.scoreA,
                    "opponentScore": game.scoreB
                })
            }
            if(teamBIndex === -1){
                newTeam = {
                    "name" : game.teamB,
                    "results" : [
                        { "opponent": game.teamA,
                        "teamScore": game.scoreB,
                        "opponentScore": game.scoreA }
                    ]
                }
                teamsToAdd.push(newTeam)
            } else {
                teamsToAdd[teamBIndex].results.push({
                    "opponent": game.teamA,
                    "teamScore": game.scoreB,
                    "opponentScore": game.scoreA 
                }) 
            }
        })
        return teamsToAdd
    }

    getSortedTeams() {
        var modifiedTeams = this.getTeams()
        
        modifiedTeams.forEach(function(t,i){
            t.wins = 0
            t.ties = 0
            t.losses = 0
            t.goalsFor = 0
            t.goalsAgainst = 0
            t.points = 0
            t.results.forEach(result =>{
                if(result.teamScore === result.opponentScore){
                    t.ties += 1
                    t.points += 1
                } else if(result.teamScore > result.opponentScore){
                    t.wins += 1
                    t.points += 3
                } else {
                    t.losses += 1
                }
                t.goalsFor += result.teamScore
                t.goalsAgainst += result.opponentScore
            })
        })
        
        modifiedTeams = modifiedTeams.sort(this.sortTeams)

        console.log(modifiedTeams)

        return modifiedTeams
    }

    sortTeams(a,b){
        const matchUpIndex = a.results.map(function (g) {return g.opponent}).indexOf(b.name)
        
        if(a.points > b.points){
            return -1
        } else if(a.points < b.points){
            return 1
        }

        const goalDiffA = a.goalsFor - a.goalsAgainst
        const goalDiffB = b.goalsFor - b.goalsAgainst
        if(goalDiffA > goalDiffB){
            return -1
        } else if(goalDiffA < goalDiffB){
            return 1
        }

        if(a.results[matchUpIndex].teamScore > a.results[matchUpIndex].opponentScore){
            console.log(a.name + " beat " + b.name)
            return -1
        } else if(a.results[matchUpIndex].teamScore < a.results[matchUpIndex].opponentScore){
            console.log(b.name + " beat " + a.name)
            return 1
        }

        if(a.goalsFor > b.goalsFor){
            return -1
        } else if(a.goalsFor < b.goalsFor){
            return 1
        }
        
    }

    render(){
        return(
            <tbody>
                {this.getSortedTeams().map((Team) =>
                    <TeamRow key={Team.name}
                        teamData={Team}/>
                )}
            </tbody>
        )
    }
}