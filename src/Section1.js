
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Section1 = () => {
    const [section1Repos, setSection1Repos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/RobBundy2002/repos');

                // Filter repositories for Section 1
                const filteredRepos = response.data.filter(repo =>
                    repo.name.startsWith('Checkers') || repo.name.startsWith('TicTacToe') || repo.name.startsWith('Wordle-App')
                );

                setSection1Repos(filteredRepos);
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <h2>Section 1</h2>
            <ul>
                {section1Repos.map(repo => (
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

export default Section1;