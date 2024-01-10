import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Section2 = () => {
    const [section2Repos, setSection2Repos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/RobBundy2002/repos');

                // Filter repositories for Section 2
                const filteredRepos = response.data.filter(repo =>
                    repo.name.startsWith('Gaming-Website-Project') || repo.name.startsWith('Grading-Commitment-Manager')
                );

                setSection2Repos(filteredRepos);
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="App">
            <h2>Section 2</h2>
            <ul>
                {section2Repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
            <Link
                to="/"
                className="bg-orange text-white py-2 px-4 rounded-full mt-4 inline-block hover:bg-white hover:text-orange border border-white"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default Section2;