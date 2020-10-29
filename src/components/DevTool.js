import React, { Component } from "react";
import html from '../assets/img/icons8-html-5.svg';
import css3 from '../assets/img/icons8-css3.svg';
import javascript from '../assets/img/icons8-javascript.svg';
import react from '../assets/img/icons8-react.svg';
import node from '../assets/img/icons8-node.svg';
import npm from '../assets/img/icons8-npm.svg';
import git from '../assets/img/icons8-git.svg';
import github from '../assets/img/icons8-github.svg';
import redux from '../assets/img/icons8-redux.svg';
import sqlserver from '../assets/img/icons8-microsoft-sql-server.svg';
import angular from '../assets/img/icons8-angularjs.svg';
import postgresql from '../assets/img/icons8-postgresql.svg';
import bootstrap from '../assets/img/icons8-bootstrap.svg';
import jquery from '../assets/img/icons8-jquery.svg';
import typescript from '../assets/img/icons8-typescript.svg';
import './DevTool.css'

class Tool extends Component {
    render() {
      return (
        <div className="Tool Tool-inline">
             <img className="Tool-item" src={html} alt="html" />
             <img className="Tool-item" src={css3} alt="css" />
             <img className="Tool-item" src={javascript} alt="javascript" />
             <img className="Tool-item" src={typescript} alt="typescript" />
             <img className="Tool-item" src={react} alt="react" />
             <img className="Tool-item" src={redux} alt="redux" />
             <img className="Tool-item" src={angular} alt="angular" />
             <img className="Tool-item" src={node} alt="node" />
             <img className="Tool-item" src={sqlserver} alt="sqlserver" />
             <img className="Tool-item" src={postgresql} alt="postgresql" />
             <img className="Tool-item" src={npm} alt="npm" />
             <img className="Tool-item" src={github} alt="github" />
             <img className="Tool-item" src={git} alt="git" />
             <img className="Tool-item" src={bootstrap} alt="bootstrap" />
             <img className="Tool-item" src={jquery} alt="jquery" />
        </div>
      );
    }
  }

  export default Tool;
