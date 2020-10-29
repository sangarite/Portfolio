import React, { Component } from 'react'
import './card.css'
import {projects} from '../projects'

class Card extends Component {
    render() {
        const projectlist = projects.map(
            Project => (
                <div className="card" key={Project.id}>
                  <h1>{Project.name}</h1>
                  <p>{Project.Description}</p>
                  <a href={Project.Live_link}>Live Link</a>
                  <a href={Project.Code_Link}>Code Link</a>
                  <p>{Project.tool_used}</p>
                </div>
            )
        );
        return (
            <div className="project">{projectlist}</div>
        );
    }
}
export default Card;
