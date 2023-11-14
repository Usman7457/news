import React from 'react'

const NewsItem = (props)=> {
   let {title,description,imageUrl,newsurl,author,date,source} = props;
    return (
      <div>
<div className="card">
  <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2023/10/Screenshot-2023-10-30-at-5.26.00-PM.png?resize=1200,626":imageUrl} className="card-img-top" style={{height:"200px"}} alt="..." />
  <div className="card-body">
  <span className="badge text-bg-warning">{source}</span>
    <h5 className="card-title">{!title?"Invalid Title":title}...</h5>
    <p className="card-text">{!description?"Invalid Description":description}...</p>
    <p className='card-text'><small className='text-muted'>By: {!author?"Invalid Author":author}</small></p>
    <p className='card-text'><small className='text-muted'>Date: {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} className="btn btn-sm btn-dark" target="_blank" rel="noreferrer">Read Full News</a>
  </div>
</div>
      </div>
    )
}

export default NewsItem