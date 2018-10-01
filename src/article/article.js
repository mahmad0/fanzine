import React from "react";
import Moment from 'react-moment';
import {
  FacebookShareButton
} from 'react-share';
import CONSTANT from "./../util/constant.js";
import "./article.css";

const URL = CONSTANT.API_URL + "/posts";

class Article extends React.Component {

    constructor() {
        super();
        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id || '';
        fetch(URL + '/' + id + '?key=' + CONSTANT.API_KEY)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    post: json || {}
                });
            });
    }

    formatDate(date) {
        date;
    }

    render() {
        return (
            <div className="container-fluid full-article">
                <a className="article-title">
                    <h2>{this.state.post.title}</h2>
                </a>
                <div className="article-meta">
                    <Moment format="LL" locale="fr">{this.state.post && this.state.post.published}</Moment>
                    - Par {this.state.post.author && this.state.post.author.displayName}
                </div>
                <div className="article-content" dangerouslySetInnerHTML={{ __html: this.state.post.content }} />
                <hr />
                <FacebookShareButton url={window.location.href} />
            </div>
        );
    }
}
export default Article;
