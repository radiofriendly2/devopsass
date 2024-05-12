import React, { useState } from 'react';
import ProjectItems from './ProjectItems';

export default function Projects({ projects }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = projects.filter((project) =>
            project.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        setFilteredProjects(filtered);
    };

    const groupedProjects = filteredProjects.reduce((result, project, index) => {
        const chunkIndex = Math.floor(index / 3);

        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }

        result[chunkIndex].push(project);

        return result;
    }, []);

    return (
        <div className="container text-center">
            <h1 className="my-3">Projects</h1>
            <form className="d-flex my-3" role="search">
                <input
                    className="form-control me-2 mx-3"
                    type="search"
                    placeholder="Search Project by Technological Stack"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-success mx-3" type="submit" onClick={handleSearch}>
                    Search
                </button>
            </form>
            <div className="container text-center">
                {groupedProjects.map((projectGroup, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {projectGroup.map((project) => (
                            <ProjectItems
                                key={project.id}
                                name={project.name}
                                description={project.description}
                                techStack={project.techStack}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
