import React, { Component } from 'react';
import Calander from '../calander/Calander';
import axios from 'axios';
import Styles from './Performance.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import grayarrow from '../../Assets/grayarrow.PNG';

export default class performance extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            performancevalues: [],
        }
    }

    tableClick(selectedrow) {
        window.location.href = 'performancedetails/' + selectedrow
    }

    componentDidMount() {
        axios.all([
            axios.get('./performance.json')
        ]).then(axios.spread((responseone, responsetwo, responsethree) => {
            this.setState({ 
                performancevalues: responseone.data,
            })
        }))    
      }

    render() {
        return (
            <div>
                <div className='row stdsection' style={{padding: '15px'}} >
                    <div className='col-md-6'>
                        <select className={Styles.ddrpone}>
                            <option>option 1</option>
                            <option>option 1</option>
                        </select> 
                    </div>
                    <div className='col-md-6'>
                        <div style={{float: 'right'}}>
                            <Calander></Calander>
                        </div>
                    </div>
                </div>
                <table className="table table-tripped">
                        <thead>
                            <tr>
                                <th className={Styles.theadtxtD}>
                                    Subject
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Class
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Questions 
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
                            {this.state.performancevalues.map(performancevalue => 
                                <tr className="tbdybackground" onClick={() => this.tableClick(performancevalue.Subject)} >
                                    <td>
                                        <span className='verticalalignrow'>
                                            <span className={Styles.textdp}><div>{performancevalue.subjectcode}</div></ span>
                                            <span className={Styles.tbodytxt}>{performancevalue.Subject}</span>      
                                        </span>                          
                                    </td>
                                    <td className={Styles.tbodytxt}>
                                        {performancevalue.Class}
                                    </td>
                                    <td className={Styles.tbodytxt}>
                                        {performancevalue.Questions}
                                    </td>
                                    <td className={Styles.tbodytxt}>
                                    <span className={
                                        performancevalue.Score > 1 && performancevalue.Score < 2
                                        ? Styles.rabgred
                                        : performancevalue.Score > 2 && performancevalue.Score < 3
                                        ? Styles.rabgblue
                                        : performancevalue.Score > 3 && performancevalue.Score < 4
                                        ? Styles.rabgyellow
                                        : performancevalue.Score > 4 && performancevalue.Score < 10
                                        ? Styles.rabggreen
                                        : false
                                        }>{performancevalue.Score}</span>
                                    </td>
                                    <td className={Styles.tbodytxt}>
                                    <span className={
                                        performancevalue.RV > 1 && performancevalue.RV < 2
                                        ? Styles.rabgred
                                        : performancevalue.RV > 2 && performancevalue.RV < 3
                                        ? Styles.rabgblue
                                        : performancevalue.RV > 3 && performancevalue.RV < 4
                                        ? Styles.rabgyellow
                                        : performancevalue.RV > 4 && performancevalue.RV < 10
                                        ? Styles.rabggreen
                                        : false
                                        }>{performancevalue.RV}</span>
                                    </td>
                                    <td className={Styles.tbodytxt}>
                                        {performancevalue.Grank}
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
