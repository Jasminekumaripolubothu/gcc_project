import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Team1.css'; 
import gcclogo from "../assets/Logo.png";
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.png";
import Img5 from "../assets/Img5.png";
import Img6 from "../assets/Img6.png";

function Team1() {
    const navigate = useNavigate();

    // State to track the status of each team member
    const [teamMembers, setTeamMembers] = useState([
        { id: 1, name: 'Sahitha', role: '2024, CSM', img: Img1, status: 'Active' },
        { id: 2, name: 'Srinu Reddy', role: '2024, CSM', img: Img2, status: 'Active' },
        { id: 3, name: 'Jasmine', role: '2024, CSD', img: Img3, status: 'Active' },
        { id: 4, name: 'Surya Sagar', role: '2024, CSM', img: Img4, status: 'Inactive' },
        { id: 5, name: 'Sravan Kumar', role: '2024, CAI', img: Img5, status: 'Inactive' },
        { id: 6, name: 'Rutika', role: '2024, CSM', img: Img6, status: 'Active' },
    ]);

    const handleStatusToggle = (id) => {
        // Toggle the status of the team member with the given id
        setTeamMembers((prevMembers) =>
            prevMembers.map((member) =>
                member.id === id
                    ? { ...member, status: member.status === 'Active' ? 'Inactive' : 'Active' }
                    : member
            )
        );
    };

    const handleTeamLeadClick = () => {
        navigate('/team-lead'); // Navigate to TeamLead page
    };

    const handleMemberClick = () => {
        navigate('/team-member'); // Navigate to TeamMember page
    };

    return (
        <div className="team1-container">
            <aside className="sidebar2">
                <div className='logo'>
                    <img src={gcclogo} alt="Global Logo"/>
                </div>
                <h3 className='student'>Student Monitoring System</h3>
                <div className="menu-header" onClick={() => navigate('/home')}>
                    <span className="menu-icon">☰</span>
                    <span className="menu-text">Dashboard</span>
                </div>
                <ul>
                    <li onClick={() => navigate('/Hackathon')}>
                        <span className="icon">🏆</span>
                        <p className='side'>Hackathons</p>
                    </li>
                </ul>
            </aside>
            <div className="main-content">
                <h1>Team 1</h1>
                <h2>Team Lead</h2>
                <div className="team-lead">
                    <img src={Img1} alt="Sahitha" onClick={handleTeamLeadClick} />
                    <div onClick={handleTeamLeadClick}>
                        <h3>Sahitha</h3>
                        <p>2024, CSM</p>
                    </div>
                    <button 
                        className={`status ${teamMembers[0].status.toLowerCase()}`} 
                        onClick={() => handleStatusToggle(teamMembers[0].id)}
                    >
                        {teamMembers[0].status}
                    </button>
                </div>
                <h2>Members</h2>
                <div className="team-members">
                    {teamMembers.slice(1).map((member) => (
                        <div key={member.id} className="member">
                            <img src={member.img} alt={member.name} onClick={handleMemberClick}/>
                            <div onClick={handleMemberClick}>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                            <button 
                                className={`status ${member.status.toLowerCase()}`} 
                                onClick={() => handleStatusToggle(member.id)}
                            >
                                {member.status}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team1;
