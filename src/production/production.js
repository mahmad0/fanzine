import React from "react";
import ReactMarkdown from 'react-markdown';
import PRODUCTIONS from "./../util/productions.js";
import "./production.css";

class Production extends React.Component {


    constructor() {
        super();
        this.state = {
            production: {}
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id || '';
        let production = PRODUCTIONS[id] || {}
        if (production && production.link && production.type === 'text') {
            fetch(production.link)
            .then(response => response.text())
            .then(text => {
                production.content = text;
                this.setState({
                    production: PRODUCTIONS[id] || {}
                });
            });
        } else {
            this.setState({
                production: PRODUCTIONS[id] || {}
            });
        }

    }

    render() {
        return (
            <div className="container-fluid full-production">
                <a className="production-title">
                    <h2>{this.state.production.title}</h2>
                </a>
                <ReactMarkdown className="production-content" source={this.state.production.content} />
                <hr />
            </div>
        );
    }
}
export default Production;