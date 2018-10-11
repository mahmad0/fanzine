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
                this.setState({
                    post: json || {}
                });
            });
    }

    render() {
        return (
            <div className="container-fluid full-article">
                <a className="article-title font-weight-bold text-center text-uppercase">
                    <h2 className="mt-5">{this.state.post.title}</h2>
                </a>
                <div className="article-meta mb-5 text-black-50 text-center font-weight-light">
                    <Moment format="LL" locale="fr">{this.state.post && this.state.post.published}</Moment>
                    - Par {this.state.post.author && this.state.post.author.displayName}
                </div>
                <div className="article-content px-auto mb-5" dangerouslySetInnerHTML={{ __html: this.state.post.content }} />
                <FacebookShareButton url={window.location.href} />
            </div>
        );
    }
}
export default Article;
