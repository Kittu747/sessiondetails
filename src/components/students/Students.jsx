import React, { Component } from 'react';
import Styles from './Students.module.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Calander from '../calander/Calander.jsx';
import grayarrow from '../../Assets/grayarrow.PNG';
import propic from '../../Assets/avatar-1.jpg';

export default class Students extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            studentsvalues: []
        }
    }

    tableClick(selectedrow) {
        window.location.href = 'studentsdetails/' + selectedrow
    }
    
    componentDidMount() {
        axios.all([
            axios.get('./students.json')
        ]).then(axios.spread((responseone) => {
            this.setState({ 
                studentsvalues: responseone.data,
            })
        }))    
      }

    render() {
        return (
            <div>
                <div className='row stdsection' style={{margin: '20px 0 20px 0'}}>
                    <div className={Styles.dropdownclass} style={{margin: '11px 0 11px 0'}}>
                        <div className={Styles.searchicon}>
                            <FontAwesomeIcon icon={faSearch} style={{ fontSize: '19px', color: 'gray' }} />
                        </div>
                        <select className={Styles.ddrpone}>
                            <option>All Subject</option>
                            <option>Subject</option>
                        </select>
                        <select className={Styles.ddrptwo}>
                            <option>All Subject</option>
                            <option>Subject</option>
                        </select>
                        <select className={Styles.ddrpfour}>
                            <option>All Subject</option>
                            <option>Subject</option>
                        </select>
                        <select className={Styles.ddrpfour}>
                            <option>All Subject</option>
                            <option>Subject</option>
                        </select>
                        <select className={Styles.ddrpfour}>
                            <option>All Subject</option>
                            <option>Subject</option>
                        </select>
                    </div>
                    <div className={Styles.calclass} style={{margin: '11px 0 11px 0'}}>
                        <div style={{float :'right'}}>
                            <Calander></Calander>
                        </div>
                    </div>
                </div>
                <table className="table table-tripped">
                        <thead>
                            <tr>
                                <th className={Styles.theadtxtD}>
                                    RA#
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Name
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Class
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Attendance 
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Score 
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Read Velocity 
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Group Rank (Percentile)
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Trend
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.studentsvalues.map(studentsvalue => 
                            <tr className="tbdybackground" onClick={() => this.tableClick(studentsvalue.Class)}>
                                <td className={Styles.tbodytxt}>
                                    {studentsvalue.RA}
                                </td>
                                <td style={{ textAlign:'left' }}>
                                    <span><img src={propic} className={Styles.imgdp} /></span> &nbsp; &nbsp;
                                    <span className={Styles.tbodytxt}>{studentsvalue.Name}</span>                                    
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {studentsvalue.Class}
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {studentsvalue.Attendance}
                                </td>
                                <td className={Styles.tbodytxt}>
                                <span className={
                                        studentsvalue.Score > 1 && studentsvalue.Score < 2
                                        ? Styles.rabgred
                                        : studentsvalue.Score > 2 && studentsvalue.Score < 3
                                        ? Styles.rabgblue
                                        : studentsvalue.Score > 3 && studentsvalue.Score < 4
                                        ? Styles.rabgyellow
                                        : studentsvalue.Score > 4 && studentsvalue.Score < 10
                                        ? Styles.rabggreen
                                        : false
                                        }>{studentsvalue.Score}</span>
                                </td>
                                <td className={Styles.tbodytxt}>
                                <span className={
                                        studentsvalue.RV > 1 && studentsvalue.RV < 2
                                        ? Styles.rabgred
                                        : studentsvalue.RV > 2 && studentsvalue.RV < 3
                                        ? Styles.rabgblue
                                        : studentsvalue.RV > 3 && studentsvalue.RV < 4
                                        ? Styles.rabgyellow
                                        : studentsvalue.RV > 4 && studentsvalue.RV < 10
                                        ? Styles.rabggreen
                                        : false
                                        }>{studentsvalue.RV}</span>
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {studentsvalue.Grank}
                                </td>
                                <td className={Styles.tbodytxt}>
                                    <img src={grayarrow} />
                                </td>
                            </tr>  
                            )}
                        </tbody>
                    </table>
            </div>
        )
    }
}
