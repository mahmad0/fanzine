import React from "react";
import CONSTANT from "./../util/constant.js";

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

  getImage(content) {
    let src = "";
    let tmp = document.createElement("div");
    tmp.innerHTML = content;
    let images = tmp.getElementsByTagName("img");
    if (images.length > 0) {
      src = images[0].getAttribute("src");
    }
    return <img src={src} alt="" />;
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post, key) => (
          <div className="blog-post" key={key}>
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-meta">{this.formatDate(post.published)}</p>
            <p>{this.getText(post.content)}</p>
          </div>
        ))};
    </div>
    )
  }
}
export default ArticleGrid;
