
import React from 'react';

import { Link } from 'react-router-dom';
import './Projects.css';
import './Section2'

const Projects = () => {

    return (
        <div className="App">
            <div className="container">
                <h2 className="text-2xl font-semibold mb-4">My Projects</h2>

                {/* Section 1 */}
                <div className="mb-8">
                    <Link to="/section1" className="text-orange hover:underline">
                        View Section 1
                    </Link>
                </div>

                {/* Section 2 */}
                <div className="mb-8">
                    <Link to="/section2" className="text-orange hover:underline">
                        View Section 2
                    </Link>
                </div>

                {/* Section 3 */}
                <div className="mb-8">
                    <Link to="/section3" className="text-orange hover:underline">
                        View Section 3
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;