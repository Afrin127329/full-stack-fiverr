import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({card}) => {
  return (
    <div className='projectCard'>
      <img src={card.img} alt="project" />
      <div className="info">
        <img src={card.pp} alt="pp" />
        <div className="texts">
          <h2>{card.cat}</h2>
          <span>{card.username}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;