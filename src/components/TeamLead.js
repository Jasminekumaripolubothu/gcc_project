import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamLead.css';
import gcclogo from "../assets/Logo.png";
import Img1 from "../assets/Img1.png";
import taskimg from "../assets/taskimg.png";
import notdone from "../assets/notdone.png";
import done from "../assets/done.png";

function TeamLead() {
    const navigate = useNavigate();

    const [tasks, setTasks] = useState([
        { id: 1, title: "Write an essay on the history of AI", date: "Sep 12, 2024", status: "active" },
        { id: 2, title: "Complete the Python Programming Quiz", date: "Sep 12, 2024", status: "active" },
        { id: 3, title: "Daily work update", date: "Sep 13, 2024", status: "inactive" }
    ]);

    const [completedTasks, setCompletedTasks] = useState([
        { id: 1, name: "SRINU", date: "Sep 11, 2024", status: "PENDING" },
        { id: 2, name: "SAGAR", date: "Sep 12, 2024", status: "COMPLETED" },
        { id: 3, name: "RUTIKA", date: "Sep 13, 2024", status: "COMPLETED" }
    ]);

    const toggleTaskStatus = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, status: task.status === "active" ? "inactive" : "active" } : task
        ));
    };

    const toggleCompletedTaskStatus = (taskId) => {
        setCompletedTasks(completedTasks.map(task =>
            task.id === taskId ? { ...task, status: task.status === "PENDING" ? "COMPLETED" : "PENDING" } : task
        ));
    };

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
                    <img src={Img1} alt="Sahitha" />
                    <div>
                        <h3>Sahitha</h3>
                        <p>Joined 2 months ago</p>
                    </div>
                    <h3>226Q1A4212</h3>
                </div>
                <h2>Task Completion</h2>
                <h2>Tasks</h2>
                <div className="tasks">
                    {tasks.map(task => (
                        <div key={task.id} className="task">
                            <img src={taskimg} alt="Task" />
                            <div>
                                <h3>{task.title}</h3>
                                <p>{task.date}</p>
                            </div>
                            <button
                                className={`status ${task.status}`}
                                onClick={() => toggleTaskStatus(task.id)}
                            >
                                {task.status === "active" ? "Mark as not done" : "Mark as done"}
                            </button>
                        </div>
                    ))}
                </div>
                <h2>Tasks Completed</h2>
                <div className="tasks">
                    {completedTasks.map(task => (
                        <div key={task.id} className="task">
                            <img src={task.status === "PENDING" ? notdone : done} alt={task.name} />
                            <div>
                                <h3>{task.name}</h3>
                                <p>{task.date}</p>
                            </div>
                            <button
                                className={`status ${task.status.toLowerCase()}`}
                                onClick={() => toggleCompletedTaskStatus(task.id)}
                            >
                                {task.status === "PENDING" ? "PENDING" : "COMPLETED"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamLead;
