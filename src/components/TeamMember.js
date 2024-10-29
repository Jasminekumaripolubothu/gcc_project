// TeamMember.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamMember.css'; // Import your CSS styles
import gcclogo from "../assets/Logo.png";
import Img2 from "../assets/Img2.png";
import taskimg from "../assets/taskimg.png";

function TeamMember() {
    const navigate = useNavigate();

    // State to keep track of the status of tasks
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Write an essay on the history of AI', date: 'Sep 12,2024', isDone: false },
        { id: 2, title: 'Complete the Python Programming Quiz', date: 'Sep 12,2024', isDone: false },
        { id: 3, title: 'Daily work update', date: 'Sep 13,2024', isDone: true }
    ]);

    // State to keep track of the status of submissions
    const [submissions, setSubmissions] = useState([
        { id: 1, title: 'Task-1 File', date: 'Sep 11,2024', isSubmitted: true },
        { id: 2, title: 'Task-2 File', date: 'Sep 12,2024', isSubmitted: true }
    ]);

    // Function to toggle the status of a task
    const toggleTaskStatus = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, isDone: !task.isDone } : task
        ));
    };

    // Function to toggle the status of a submission
    const toggleSubmissionStatus = (submissionId) => {
        setSubmissions(submissions.map(submission =>
            submission.id === submissionId ? { ...submission, isSubmitted: !submission.isSubmitted } : submission
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
                    <img src={Img2} alt="Srinu Reddy" />
                    <div>
                        <h3>Srinu Reddy</h3>
                        <p>Joined 2 months ago</p>
                    </div>
                    <h3>226Q1A4209</h3>
                </div>
                <h2>Tasks</h2>
                <div className="tasks">
                    {tasks.map(task => (
                        <div className="task" key={task.id}>
                            <img src={taskimg} alt="Task" />
                            <div>
                                <h3>{task.title}</h3>
                                <p>{task.date}</p>
                            </div>
                            <button 
                                className={`status ${task.isDone ? 'inactive' : 'active'}`} 
                                onClick={() => toggleTaskStatus(task.id)}
                            >
                                {task.isDone ? 'Mark as not done' : 'Mark as done'}
                            </button>
                        </div>
                    ))}
                </div>
                <h2>Submissions</h2>
                <div className="tasks">
                    {submissions.map(submission => (
                        <div className="task" key={submission.id}>
                            <img src={taskimg} alt="Task" />
                            <div>
                                <h3>{submission.title}</h3>
                                <p>{submission.date}</p>
                            </div>
                            <button
                                className={`status ${submission.isSubmitted ? 'active' : 'inactive'}`}
                                onClick={() => toggleSubmissionStatus(submission.id)}
                            >
                                {submission.isSubmitted ? 'SUBMITTED' : 'NOT SUBMITTED'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamMember;
