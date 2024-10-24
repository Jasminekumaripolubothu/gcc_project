// TeamMember.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamMember.css'; // Import your CSS styles
import gcclogo from "../assets/Logo.png";
import Img2 from "../assets/Img2.png";
import task from "../assets/task.png";

function TeamMember() {
    const navigate = useNavigate();

    // const handleBack = () => {
    //     navigate('/team1'); // Navigate back to Team 1
    // };

    // const handleHackathonClick = () => {
    //     navigate('/Hackathon'); // Navigate to TeamMember page
    // };

    return (
        <div className="teamlead-container">
            <aside className="sidebar">
                <div className='logo'>
                    <img src={gcclogo} alt="Global Logo"/>
                </div>
                <h3 className='student'>Student Monitoring System</h3>
                <div className="menu-header" onClick={() => navigate('/home')}>
                    <span className="menu-icon">☰</span>
                    <span className="menu-text">Dashboard</span>
                </div>
                <ul>
                    <li onClick={() => navigate('/team1')} className="active">
                        <span className="icon">👥</span>
                        <p className='side'>My Team</p>
                    </li>
                    <li onClick={() => navigate('/Hackathon')}>
                        <span className="icon">🏆</span>
                        <p className='side'>Hackathons</p>
                    </li>
                </ul>
            </aside>
            <div className="main-content">
                <h1>Team Lead</h1>
                <div className="member-name">
                    <img src={Img2} alt="Srinu Reddy" />
                    <div>
                        <h3>Srinu Reddy</h3>
                        <p>Joined 2 months ago</p>
                    </div>
                    <h3>226Q1A4209</h3>
                </div>
                <h2>Tasks</h2>
                <div className="tasks">
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Write an essay on the history of AI</h3>
                            <p>Sep 12,2024</p>
                        </div>
                        <button className="status active">Mark as done</button>
                    </div>
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Complete the Python Programming Quiz</h3>
                            <p>Sep 12,2024</p>
                        </div>
                        <button className="status active">Mark as done</button>
                    </div>
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Daily work update</h3>
                            <p>Sep 13,2024</p>
                        </div>
                        <button className="status inactive">Mark as done</button>
                    </div>
                </div>
                <h2>Submissions</h2>
                <div className="tasks">
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Task-1 File</h3>
                            <p>Sep 11,2024</p>
                        </div>
                        <button className="status active">SUBMITTED</button>
                    </div>
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Task-2 File</h3>
                            <p>Sep 12,2024</p>
                        </div>
                        <button className="status active">SUBMITTED</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamMember;
