import React from "react";
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import CONSTANT from "./../util/constant.js";
import './home.css';


const URL = CONSTANT.API_URL + "/posts?key=" + CONSTANT.API_KEY;

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            accessToken: ''
        };
    }

    componentDidMount() {
        this.loadPosts();
    }

    getText(content) {
        let tmp = document.createElement("div");
        tmp.innerHTML = content;
        let text = tmp.textContent || tmp.innerText || "";
        if (text.length > 500) {
            text = text.substr(0, 500).trim() + "...";
        }
        return text;
    }

    getImageSrc(content) {
        let src = "";
        let tmp = document.createElement("div");
        tmp.innerHTML = content;
        let images = tmp.getElementsByTagName("img");
        if (images.length > 0) {
            src = images[0].getAttribute("src");
        }
        return src
    }

    render() {
        let mainPost = this.state.posts && this.state.posts.length > 0 && this.state.posts[0];
        return (
            <main role="main" className="container">
                <div className="row justify-content-around">
                    <aside className="col-md-4">
                        {mainPost &&
                            <div className="main-article">
                                <Link to={'/articles/' + mainPost.id}><a style={{ backgroundImage: 'url("' + this.getImageSrc(mainPost.content) + '")' }} className="article-img"></a></Link>
                                <div className="article-meta">
                                    <Moment format="LL" locale="fr">{mainPost.published}</Moment>
                                </div>
                                <Link to={'/articles/' + mainPost.id}>
                                    <a className="article-title">
                                        <h5>{mainPost.title}</h5>
                                    </a>
                                </Link>
                                <p className="mb-0">{this.getText(mainPost.content)}</p>
                            </div>
                        }
                    </aside>
                    <aside className="col-md-6 blog-sidebar">
                        <div className="row">
                            {this.state.posts.slice(1).map((post, key) => (
                                <div className="col-md-6 justify-content-around" key={key}>
                                    <Link to={'/articles/' + post.id}>
                                        <a style={{ backgroundImage: 'url("' + this.getImageSrc(post.content) + '")' }} className="article-img"></a>
                                    </Link>
                                    <Link to={'/articles/' + post.id}>
                                        <a className="article-title">
                                            <h5>{post.title}</h5>
                                        </a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </main>
        )
    }

    loadPosts() {
        let url = URL;
        if (this.state.accessToken.length > 0) {
            url += '&access_token=' + this.state.accessToken;
        }
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    posts: this.state.posts.concat(json.items || []),
                    accessToken: json.nextPageToken
                });
            });
    }
}
export default Home;
