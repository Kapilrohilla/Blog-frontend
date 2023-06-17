import React from 'react';
import './Blog.scss';
import { Link } from 'react-router-dom';
const Blog = ({ d }) => {
    return (
        <Link to='' className='blogLink'>
            <div className="blog">
                <div className="left">
                    <img src={d.img ? d.img : "/image/Image_not_available.png"} alt="" />
                </div>
                <div className="right">
                    <p className="tag">{d.tag ? d.tag : "uncategorized"}</p>
                    <h3>{d.title}</h3>
                    <p className="para">{d.body}</p>
                </div>
            </div>
        </Link>
    )
}

export default Blog
