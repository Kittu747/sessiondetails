import React from 'react';
import {sidenavbar, topsideheader} from './Sidebarstyles';
import logo from '../../Assets/left-sidebar-icons/logo.png';
import propic from '../../Assets/user-profile-pic.jpg';
import dashboard from '../../Assets/left-sidebar-icons/dashboard.png';
import attendance from '../../Assets/left-sidebar-icons/attendance.png';
import performance from '../../Assets/left-sidebar-icons/performance.png';
import sessions from '../../Assets/left-sidebar-icons/session.png';
import students from '../../Assets/left-sidebar-icons/students.png';
import reports from '../../Assets/left-sidebar-icons/reports.png';
import logout from '../../Assets/left-sidebar-icons/logout.png';
import '../sidebar/Sidebarstyles.css';
import { NavLink } from 'react-router-dom';

function sideTab(){
    document.getElementById('opensidenav').style.display = 'block';
}

const Sidebar = () => {

    return (
        <div>
            <div>
                <span className="toggle" onClick={() => sideTab()}>&#9776; </span>
            </div>
            <div className='navalign' id='opensidenav'>
                    <div style={topsideheader}>
                        <img src={logo} height='19px' width='40px' /> &nbsp;
                        <span className="logtxt">Read Analytics</span>
                    </div>
                    <div style={sidenavbar}>
                    <img src={propic} className="rounded-circle dp mx-auto d-block img-thumbnail" />
                        <p className="profiletxt">Meena Kumari</p>
                        <p className="profilesubtxt">Teacher</p>
                        <div className="sidenavtxt">
                            <NavLink to='/dashboard' activeClassName='activatedRoute' className='verticalcenteralignrow' style={{width: '100%'}}>
                                <div className='imgwidth verticalcenteralign'>
                                    <img src={dashboard} className="imgsidenav" />
                                </div>
                                <div className='sidenavtxtwidth verticalstart' id='hidesidenavtxt'>
                                    <div className="txtsidenav">Dashboard</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="sidenavtxt">
                            <NavLink to='/attendance' activeClassName='activatedRoute' className='verticalcenteralignrow' style={{width: '100%'}}>
                                <div className='imgwidth verticalcenteralign'>
                                    <img src={attendance} className="imgsidenav" />
                                </div>
                                <div className='sidenavtxtwidth verticalstart' id='hidesidenavtxt'>
                                    <div className="txtsidenav">Attendance</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="sidenavtxt">
                            <NavLink to='/performance' activeClassName='activatedRoute' className='verticalcenteralignrow' style={{width: '100%'}}>
                                <div className='imgwidth verticalcenteralign'>
                                    <img src={performance} className="imgsidenav" />
                                </div>
                                <div className='sidenavtxtwidth verticalstart'>
                                    <div className="txtsidenav">Performance</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="sidenavtxt">
                            <NavLink to='/sessions' activeClassName='activatedRoute' className='verticalcenteralignrow' style={{width: '100%'}}>
                                <div className='imgwidth verticalcenteralign'>
                                    <img src={sessions} className="imgsidenav" />
                                </div>
                                <div className='sidenavtxtwidth verticalstart'>
                                    <div className="txtsidenav">Sessions</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="sidenavtxt">
                            <NavLink to='/students' activeClassName='activatedRoute' className='verticalcenteralignrow' style={{width: '100%'}}>
                                <div className='imgwidth verticalcenteralign'>
                                    <img src={students} className="imgsidenav" />
                                </div>
                                <div className='sidenavtxtwidth verticalstart'>
                                    <div className="txtsidenav">Students</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="sidenavtxt">
                            <NavLink to='/reports' activeClassName='activatedRoute' className='verticalcenteralignrow' style={{width: '100%'}}>
                                <div className='imgwidth verticalcenteralign'>
                                    <img src={reports} className="imgsidenav" />
                                </div>
                                <div className='sidenavtxtwidth verticalstart'>
                                    <div className="txtsidenav">Reports</div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="sidenavtxt">
                            <NavLink to='/logout' activeClassName='activatedRoute' className='verticalcenteralignrow' style={{width: '100%'}}>
                                <div className='imgwidth verticalcenteralign'>
                                    <img src={logout} className="imgsidenav" />
                                </div>
                                <div className='sidenavtxtwidth verticalstart'>
                                    <div className="txtsidenav">Logout</div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar;


