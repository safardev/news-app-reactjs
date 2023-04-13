import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imgUrl,newsUrl, author, time, source} = this.props;
    return (
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'90%'}}>{source}</span>
        <img src={imgUrl} className="card-img-top" alt="..." style={{height: '200px'}}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(time).toGMTString()}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}
