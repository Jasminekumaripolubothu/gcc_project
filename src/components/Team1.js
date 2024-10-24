import React from 'react';
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

    // const handleBack = () => {
    //     navigate('/home');
    // };

    const handleTeamLeadClick = () => {
        navigate('/team-lead'); // Navigate to TeamLead page
    };

    const handleMemberClick = () => {
        navigate('/team-member'); // Navigate to TeamMember page
    };

    // const handleHackathonClick = () => {
    //     navigate('/Hackathon'); // Navigate to TeamMember page
    // };

    return (
        <div className="team1-container">
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
                    <li onClick={() => navigate('/home')} className="active">
                        <span className="icon">👥</span>
                        <p className='side'>Teams</p>
                    </li>
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
                    <button className="status active">Active</button>
                </div>
                <h2>Members</h2>
                <div className="team-members">
                    <div className="member">
                        <img src={Img2} alt="Srinu Reddy" onClick={handleMemberClick}/>
                        <div onClick={handleMemberClick}>
                            <h3>Srinu Reddy</h3>
                            <p>2024, CSM</p>
                        </div>
                        <button className="status active">Active</button>
                    </div>
                    <div className="member">
                        <img src={Img3} alt="Jasmine" onClick={handleMemberClick}/>
                        <div onClick={handleMemberClick}>
                            <h3>Jasmine</h3>
                            <p>2024, CSD</p>
                        </div>
                        <button className="status active">Active</button>
                    </div>
                    <div className="member">
                        <img src={Img4} alt="Surya Sagar" onClick={handleMemberClick}/>
                        <div onClick={handleMemberClick}>
                            <h3>Surya Sagar</h3>
                            <p>2024, CSM</p>
                        </div>
                        <button className="status inactive">Inactive</button>
                    </div>
                    <div className="member">
                        <img src={Img5} alt="Sravan Kumar" onClick={handleMemberClick}/>
                        <div onClick={handleMemberClick}>
                            <h3>Sravan Kumar</h3>
                            <p>2024, CAI</p>
                        </div>
                        <button className="status inactive">Inactive</button>
                    </div>
                    <div className="member">
                        <img src={Img6} alt="Rutika" onClick={handleMemberClick}/>
                        <div onClick={handleMemberClick}>
                            <h3>Rutika</h3>
                            <p>2024, CSM</p>
                        </div>
                        <button className="status active">Active</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team1;