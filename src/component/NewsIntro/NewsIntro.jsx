import React from 'react'
import './NewsIntro.scss'

const NewsIntro = ({ d }) => {

    return (
        <div className="news" >
            <div className="img">
                <img src={d.img} alt={d.title} />
            </div>
            <div className="detail">
                <p>{d.tag}</p>
                <h3>{d.title}</h3>
                <p>{d.para}</p>
            </div>
        </div>
    )
}

export default NewsIntro
