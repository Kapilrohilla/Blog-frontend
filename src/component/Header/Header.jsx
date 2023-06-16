import React from 'react';
import './Header.scss';
const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <h1>Hi, I'm Editorial By Kapil</h1>
                <p>A free fully responsive Site</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea, odit officiis tenetur necessitatibus saepe qui consequatur minima debitis odio amet impedit ipsum praesentium voluptatem maiores iure hic mollitia! Cum quae ratione dicta illo aperiam delectus enim nemo! Accusamus, tempore. Dolorem vero alias fugiat. Ex eligendi natus dolores reprehenderit suscipit delectus illo id, fugiat accusamus quibusdam incidunt est voluptates neque, magnam consequuntur quia autem aut, quae optio quisquam ullam voluptas.</p>
                <button>Learn More</button>
            </div>
            <div className="right">
                <img src="/image/header.jpg" alt="header" />
            </div>
        </div>
    )
}

export default Header
