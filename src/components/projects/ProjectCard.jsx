import React from "react";
import "./projects.css";

const ProjectCard = ({ title, description, image, liveLink, githubLink }) => {
    return (
        <div className="project__wrapper">
            <div className="project__card-content">
                <div className="project__card-header">
                    <span className="project__title">{title}</span>
                    <div className="project__links">
                        <a href={liveLink} className="project__btn" target="_blank" rel="noreferrer" aria-label="Live Project">
                            <i className="uil uil-external-link-alt"></i>
                        </a>
                        <a href={githubLink} className="project__btn" target="_blank" rel="noreferrer" aria-label="GitHub Repo">
                            <i className="uil uil-github"></i>
                        </a>
                    </div>
                </div>
                <p className="project__description">{description}</p>
                <p className="project__note">Currently deepening knowledge in authentication, APIs, and backend systems</p>
                <div className="project__img-wrapper">
                    <img src={image} alt={title} className="project__img" />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
