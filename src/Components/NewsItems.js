import React, { Component } from 'react'

export default class NewsItems extends Component {

    render() {
        let {title, description, imageUrl, newsUrl, author, date} = this.props;
        return (
            <div className='my-3' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title.slice(0,45)}...</h5>
                            <p className="card-text">{description.slice(0,88)}<span className="badge text-bg-success">More</span></p>
                            <p className="card-text"><small className="text-success">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
