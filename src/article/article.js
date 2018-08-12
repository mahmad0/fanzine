import React from "react";
import CONSTANT from "./../util/constant.js";

const URL = CONSTANT.API_URL + "/posts?key=" + CONSTANT.API_KEY;

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
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
      <div id="main">
        <section class="post">
          <header class="major">
            {this.state.post.title || "Article pas trouvé :/"}
          </header>
          {this.state.post.content}
        </section>
      </div>
    );
  }
}
export default Article;
