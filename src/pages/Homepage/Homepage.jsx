import React, { useEffect, useState } from 'react';
import "./Homepage.scss";
import Header from '../../component/Header/Header';
import NewsIntro from "../../component/NewsIntro/NewsIntro";
import Blog from '../../component/Blog/Blog';
import { Link } from 'react-router-dom';

const newsData = [
    {
        id: 1,
        img: "https://assets-global.website-files.com/606a802fcaa89bc357508cad/63bee28740e88d65a2d16ebb_Screen%20Shot%202023-01-11%20at%2011.11.56%20AM.png",
        title: "Fiverr Partners with NGO to Support Entrepreneurs ",
        tag: "Social Impace",
        para: "Fiverr has teamed up with UK charity, Launch It, to provide young entrepreneurs with Fiverr Business credit to grow their early-stage businesses."
    },
    {
        id: 2,
        img: "https://assets-global.website-files.com/606a802fcaa89bc357508cad/62f54d03b36e4f5ae000e22d_Blog%20-%201-p-800.png",
        title: "3 Takeaways From Vidcon US 2022",
        tag: "General",
        para: "Fiverr's Influencer Marketing Manager attends Vidcon and brings back insights to help enrich the exciting work he and the Influencer Marketing team execute each day."
    },
    {
        id: 3,
        img: "https://assets-global.website-files.com/606a802fcaa89bc357508cad/6310dc3c508b4f06ccf3e796_Blog-post-header%20(1)-p-800.jpg",
        title: "Behind Fiverr's New B2B Campaign: “Team Up”",
        tag: "General",
        para: "Fiverr's latest campaign, called 'Team Up,' celebrates freelancers as an extension of your team."
    },
    {
        id: 4,
        img: "https://assets-global.website-files.com/606a802fcaa89bc357508cad/62797b80581e55098d266c98_Press-Page%20-%201-p-500.png",
        title: "Fiverr and Lonely Planet Introduce First “Anywhere Worker” Study",
        tag: "General",
        para: "Fiverr and Lonely Planet, a globe-spanning digital travel media company and the world’s number one travel guidebook brand, today released insights from a recent survey looking into the new generation of workers, the Anywhere Workers. "
    },
    {
        id: 5,
        img: "https://assets-global.website-files.com/606a802fcaa89bc357508cad/6201d2219c13e6775e15616b_Blog%20-%201%20(6)-p-800.png",
        title: "The Great Resignation",
        tag: "General",
        para: "With platforms like Fiverr Business, it is easier than ever to hire freelancers to suit your needs and fill any gaps in your organizational structure."
    }
]

const Homepage = () => {
    const [apiData, setApiData] = useState(false);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(r => r.json())
            .then(d => setApiData(d))
            .catch(err => console.log(err));
    }, [])
    return (
        <div className="homepage">
            <Header />
            {/* latest blog */}
            <div className="blogs">
                <Link to="/blogs" className='link'><h2>Latest Blog's</h2></Link>
                {apiData && apiData.map((ele, i) => {
                    if (i >= 5) {
                        return;
                    }
                    return <Blog d={ele} key={ele.id} />
                })}
            </div>
            {/*  news section */}
            <section className="newsSection">
                <h2>News</h2>
                <div className="newsContainer">
                    {
                        newsData.map((news) => {
                            return <NewsIntro d={news} key={news.id} />
                        })
                    }
                </div>
            </section>
            {/* Jobs section */}
            <section className="newsSection">
                <h2>Jobs</h2>
                <div className="newsContainer">
                    {
                        newsData.map((news) => {
                            return <NewsIntro d={news} key={news.id} />
                        })
                    }
                </div>
            </section>
            <section className="newsSection">
                <h2>Upcoming</h2>
                <div className="newsContainer">
                    {
                        newsData.map((news) => {
                            return <NewsIntro d={news} key={news.id} />
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Homepage
