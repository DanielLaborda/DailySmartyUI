import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
  constructor(props){
    super(props)

    this.state = {
      height: 0
    }
  }

  renderLinks(){
    let links = this.props.post_links.map((post_link, index) => {
      return (
      <div className="post_link" key={index}>
        <div className="post-link-box"></div>
        <div className="post-link-link">
          <a href={post_link.link_url}>{this.getNameForPostList(post_link.link_url)}</a>
        </div>
      </div>
      )
    });
    if(links == 0){
      return <div className="no-content">No Post Links</div>
    }
    return links;
  }

  rederTopics(){
    let topics = this.props.associated_topics.map((topic, index) => {
        return <span className="post-topic" key={index}>{topic}</span>
    })
    return topics;
  }

  getNameForPostList(str){
    var n = str.lastIndexOf('/');
    var link = str.substring(n + 1, str.length);

    if((n+1) == str.length){
      link = str.slice(0, n);
      n = link.lastIndexOf('/');
      link = str.substring(n + 1, str.length);
    }

    if (link.includes('.html')){
      link = link.substring(0, name.length - 5)
    }
    if (link.includes('.htm')){
      link = link.substring(0, name.length - 4)
    }
    return link;
  }

  render() {
    if (this.props.type === "recent"){
      return (
        <li className="recent-post">
            <div className="recent-post-title">
                {this.props.title}
            </div>
            <div className="recent-post-topics">
                {this.rederTopics()}
            </div>
            
        </li>
      )
    }else if (this.props.type === "result"){
      return (
        <li className="result-post"
          onMouseEnter={() => this.setState({height: 70})}
          onMouseLeave={() => this.setState({height: 0})}
        >
          <div className="result-post-topics">
                {this.rederTopics()}
            </div>
            <div className="result-post-title">
              <a href={this.props.url_for_post}>{this.props.title}</a>
            </div>
            <AnimateHeight
              duration={500}
              height={this.state.height}
            >
              <div className="result-post-link">
                  {this.renderLinks()}
              </div>
            </AnimateHeight>  
        </li>
      )
    }
  }
}



export default Post;