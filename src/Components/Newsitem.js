import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, description, imageurl, newsurl, author, publishedAt,source } = this.props;
    return (

      <div className="card">
        <img src={imageurl ? imageurl : "https://cdn.sanity.io/images/0vv8moc6/neurolive/2accefc3e108ad7aa14a54f1b916b59d81c52548-1251x1251.png?fit=crop&auto=format"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <p className="card-text">{this.props.description}.</p>
          <p class="card-text"><small class="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
          <a href={newsurl} target='_blank' className="btn btn-primary bg-dark">Go somewhere</a>

        </div>
      </div>
    )
  }
}

export default Newsitem