import React from "react";
import CONSTANT from "./../util/constant.js";
import './articleGrid.css';


const URL = CONSTANT.API_URL + "/posts?key=" + CONSTANT.API_KEY;

class ArticleGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    posts: json.items || []
                });
            });
    }

    formatDate(date) {
        date;
    }

    getText(content) {
        let tmp = document.createElement("div");
        tmp.innerHTML = content;
        let text = tmp.textContent || tmp.innerText || "";
        if (text.length > 200) {
            text = text.substr(0, 200).trim() + "...";
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
        return (
            <main role="main" className="container">
                <div className="row justify-content-around">
                    <div className="col-md-4">
                        <h4 className="pb-3 mb-4">Tout chaud !</h4>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pb-3 mb-4">Arcadia</h4>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <aside className="col-md-4 blog-main">
                        {this.posts && this.posts.length > 1 && <div>
                            <img src={this.getImageSrc(this.posts[0].content)} className="rounded mx-auto d-block article-img" />
                            <h5>{this.posts[0].title}</h5>
                            <p>{this.formatDate(this.posts[0].published)}</p>
                        </div>}
                    </aside>
                    <aside className="col-md-6 blog-sidebar">
                        <div className="row">
                            {this.state.posts.splice(1).map((post, key) => (
                                <div className="col-md-6 justify-content-around" key={key}>
                                    <a style={{backgroundImage: 'url("' + this.getImageSrc(post.content) + '")'}} className="article-img"></a>
                                    <a className="article-title">
                                        <h5>{post.title}</h5>
                                    </a>
                                    <p>{this.formatDate(post.published)}</p>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </main>
        )
    }
}
export default ArticleGrid;
