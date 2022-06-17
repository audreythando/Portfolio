import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import projects from "../data/projects";
import SectionTitle from "./section_title";

export default function projects() {
    const [posts, setPosts] = useState([]);
    const [featurePosts, setFeaturePosts] = useState([]);
    const [withoutFeaturePosts, setWithoutFeaturePosts] = useState([]);
    const smBlogPostNumbers = 3;

    useEffect(() => {
        const postsData = projects.posts;
        setPosts(postsData);
        setFeaturePosts(projects.posts.filter(posts => posts.featured == true));
        setWithoutFeaturePosts(projects.posts.filter(posts => posts.featured !== true));
    }, [posts]);

    return (
        <div className="news-area pt-110 bgs" id="portfolio">
            <div className="container">
                <SectionTitle
                    title="PORTFOLIO"
                    subTitle="My Collection"
                    desc="Below is a collection of some of the projects i have worked on so far:"
                />
                <div className="row mt-45 pb-90">
                    <div className="col-xl-8">
                        <div className="row">
                            {featurePosts.slice(0, 3).map((posts, i) => (
                                <div className="col-lg-6" key={i}>
                                    <div className="single-blog mb-30 pb-40">
                                        {posts.projImage ?
                                            <div className="blog-img">
                                                <Link to="#">
                                                    <img className="img-fluid" src={posts.projImage} alt={posts.title} />
                                                </Link>
                                            </div>
                                            : null}
                                        <div className="blog-details pl-30 mt-35 pr-30">
                                            <div className="blog-title mb-10">
                                                <Link to="#">
                                                    <h2>{posts.title}</h2>
                                                </Link>
                                            </div>
                                            <p className="mb-10">{posts.smallDesc}</p>
                                            <div className="proj-btn-container">
                                                <div className="blog-button">
                                                    <Link to={{ pathname: posts.url }} target="_blank">
                                                        Demo &nbsp; <i><FaAngleRight /></i>
                                                    </Link>
                                                </div>
                                                <div className="blog-button">
                                                    <Link to={{ pathname: posts.repo }} target="_blank">
                                                        Code &nbsp; <i><FaAngleRight /></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-4 blog-lists-wrapper">
                        {withoutFeaturePosts.slice(0, smBlogPostNumbers).map((posts, i) => (
                            <div className="blog-item-small-wrapper" key={i}>
                                <div className="blog-item-small pr-20">
                                    {posts.projImage ?
                                        <div className="blog-small-img mr-20 float-left">
                                            <Link to="#">
                                                <img className="img-fluid" src={posts.projImage} alt={posts.title} />
                                            </Link>
                                        </div>
                                        : null}
                                    <div className="blog-small-description pt-20 pb-20">
                                        <Link to="#">
                                            <h2>{posts.title}</h2>
                                        </Link>
                                        <div className="proj-btn-container">
                                            <div className="blog-button">
                                                <Link to={{ pathname: posts.url }} target="_blank">
                                                    Demo &nbsp; <i><FaAngleRight /></i>
                                                </Link>
                                            </div>
                                            <div className="blog-button">
                                                <Link to={{ pathname: posts.repo }} target="_blank">
                                                    Code &nbsp; <i><FaAngleRight /></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="horizontal-border"><hr /></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
