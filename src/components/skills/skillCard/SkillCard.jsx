import React from "react";
import './SkillCard.css';

const SkillCard = ({title, icon, isActive, onClick}) => {
    return (
        <div 
        className={`skills-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()} >
            <span>{title}</span>
        </div>
    );
};

export default SkillCard
