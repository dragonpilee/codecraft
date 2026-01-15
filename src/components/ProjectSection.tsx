import React from 'react';

interface ProjectSectionProps {
    id: string;
    title: string;
    description: string;
    url: string;
    linkText: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ id, title, url, linkText }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <p>
                <a href={url} className="neon-underline" target="_blank" rel="noopener noreferrer">
                    {linkText}
                </a>
            </p>
        </section>
    );
};

export default ProjectSection;
