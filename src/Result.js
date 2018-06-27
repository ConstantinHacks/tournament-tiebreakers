import React from 'react';
import './Result.css'

export default class Team extends React.Component {
    render(){
        return (
            this.props.results.map((game) =>
                <li key={game.id}>
                    {game.teamA} <input defaultValue={game.scoreA} onChange={(e) => this.props.onChange(game,"scoreA",e)} type="number"/> 
                    <input onChange={(e) => this.props.onChange(game,"scoreB",e)} defaultValue={game.scoreB} type="number"/> {game.teamB}
                </li>
            )
        )
    }
}