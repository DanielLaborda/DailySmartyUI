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
          <a href={post_link.link_url}>Useful Link #{index}</a>
        </div>
      </div>
      )
    });
    return links;
  }

  rederTopics(){
    let topics = this.props.associated_topics.map((topic, index) => {
        return <span className="post-topic" key={index}>{topic}</span>
    })
    return topics;
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
        <li className="result-post">
          <div className="result-post-topics">
                {this.rederTopics()}
            </div>
            <div className="result-post-title">
              <a href={this.props.url_for_post}
                 onMouseEnter={() => this.setState({height: 70})}
                 onMouseLeave={() => this.setState({height: 0})}
              >{this.props.title}</a>
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