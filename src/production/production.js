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
        let production = PRODUCTIONS.filter(p => p.id === id).pop() || {}
        if (production && production.link && production.type === 'text') {
            fetch(this.getLink(production.link))
                .then(response => response.text())
                .then(text => {
                    production.content = text;
                    this.setState({
                        production: production
                    });
                });
        } else {
            this.setState({
                production: production || {}
            });
        }

    }

    render() {
        return (
            <div className="container-fluid full-production">
                <a className="production-title font-weight-bold text-center text-uppercase">
                </a>
                <a className="production-title font-weight-bold text-center text-uppercase">
                    <h2 className="mt-5">{this.state.production.title}</h2>
                </a>
                <div className="production-meta mb-5 text-black-50 text-center font-weight-light">
                    Par {this.state.production.author}
                </div>
                {this.isComics() &&
                    <div className="text-center">
                        {this.state.production.link.map((page, key) =>
                            <img src={this.getLink(page)} key={key} className="img-fluid" alt={key} />
                        )}
                    </div>}
                {this.isText() &&
                    <ReactMarkdown className="production-content px-auto mb-5" source={this.state.production.content} />}
            </div>
        );
    }

    isText() {
        return this.state.production && this.state.production.link && this.state.production.type === 'text'
    }

    isComics() {
        return this.state.production && this.state.production.link && this.state.production.type === 'comics'
            && Array.isArray(this.state.production.link);
    }

    getLink(link) {
        if (link.startsWith('/assets/')) {
            link = process.env.PUBLIC_URL + link;
        }
        return link;
    }
}
export default Production;