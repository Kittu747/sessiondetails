import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Calander from '../calander/Calander';
import sessionimg from '../../Assets/sessions.png';
import studioimg from '../../Assets/studio.png';
import classroompng from '../../Assets/classroom.png';
import readvelocity from '../../Assets/read-velocity.png';
import raisehand from '../../Assets/raise-hand.png';
import Styles from './Session.module.css';


export default class Session extends Component {

    constructor(props) {
        super(props)

        this.state = {
            studiovalues: [],
            classroomvalues: [],
            startDate: new Date(),
            lables: ['one', 'two', 'three'],
            recentsessionvalues: [],
            datasets: []
        }
    }

    tableClick(selectedrow) {
        window.location.href = 'sessiondetails/' + selectedrow
    }

    handleChange = date => {
        this.setState({
            startDate: date
        }, () => { alert(this.state.startDate) });
    };

    componentDidMount() {
        axios.all([
            axios.get('./sessions.json'),
        ]).then(axios.spread((responseone) => {
            this.setState({ 
                    studiovalues: responseone.data[0].dataone,
                    classroomvalues: responseone.data[0].datatwo,
                    recentsessionvalues: responseone.data[1].recentsessions,
                    datasets: responseone.data[1].recentsessions.map(el => [{
                    data: el.result,
                    backgroundColor: [ '#FF0000', '#022AB8', '#5AAB00', '#E6E6E6' ]
                 }]),

            })
        }))    
      }

    render() {
        return (
            <div>
                <div className='row stdsection'>
                        <div className="col-md-6">
                        <div className={Styles.searchicon}>
                                <FontAwesomeIcon icon={faSearch} style={{ fontSize: '19px', color: 'gray' }} />
                            </div>
                            <select className={Styles.ddrpone}>
                                <option>option 1</option>
                                <option>option 1</option>
                            </select>
                            <select className={Styles.ddrpone}>
                                <option>option 1</option>
                                <option>option 1</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <div style={{float: 'right', padding: '5px'}}>
                                <Calander></Calander>
                            </div>
                        </div>

                    <div className='col-md-2'>
                        <div className={`${Styles.sessions} ${Styles.verticalcenteralign}`}>
                            <div>
                                <img src={sessionimg} />
                            </div>
                            <div>
                                <div className={Styles.sessionstxt}>SESSIONS</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={`${Styles.studiobox} ${Styles.verticalcenteralignrow}`}>
                            <div className="col-md-3 verticalcenteralign">
                                <img src={studioimg} />
                                <div className={Styles.studiotxt}>Studio</div>
                            </div>
                            {this.state.studiovalues.map(studiovalue => 
                                <div className="col-md-3 verticalcenteralign">
                                    <div className={Styles.maintxt}>{studiovalue.relayedval}</div>
                                    <div className={Styles.subtxt}>{studiovalue.relayedtxt}</div>
                                </div>  
                            )}
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className={`${Styles.classroombox} ${Styles.verticalcenteralignrow}`}>
                            <div className="col-md-4 verticalcenteralign">
                                <img src={classroompng} />
                                <div className={Styles.studiotxt}>Classroom</div>
                            </div>
                            {this.state.classroomvalues.map(classroomvalue =>
                                <div className="col-md-4 verticalcenteralign">
                                    <div className={Styles.maintxt}>{classroomvalue.relayedval}</div>
                                    <div className={Styles.subtxt}>{classroomvalue.relayedtxt}</div>
                                </div>  
                            )}
                        </div>
                    </div>

                </div>
                <table className="table table-tripped">
                        <thead>
                            <tr>
                                <th className={Styles.theadtxtD}>
                                    Date
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Session No.
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Topic
                                    <FontAwesomeIcon className='sortup' icon={faAngleUp} style={{ fontSize: '13px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdown' icon={faAngleDown} style={{ fontSize: '13px', color: '#000000' }} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Type
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
                                    <img src={readvelocity} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    <img src={raisehand} />
                                </th>
                                <th className={Styles.theadtxtD} style={{ width:'30px' }}>
                                    Result
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.recentsessionvalues.map( (value, index) => 
                                <tr className="tbdybackground" onClick={() => this.tableClick(value.session)}>
                                <td style={{ textAlign: 'center' }}>
                                    <span className={Styles.tbodytxt}>{value.day}</span>
                                    <span className={Styles.subtbodytxt}>{value.date}</span>
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {value.session}
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {value.topic}
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {value.studio}
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {value.class}
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {value.attendance}
                                </td>
                                <td className={Styles.tbodytxt}>
                                <span className={
                                        value.RA > 1 && value.RA < 2
                                        ? Styles.rabgred
                                        : value.RA > 2 && value.RA < 3
                                        ? Styles.rabgblue
                                        : value.RA > 3 && value.RA < 4
                                        ? Styles.rabgyellow
                                        : value.RA > 4 && value.RA < 10
                                        ? Styles.rabggreen
                                        : false
                                        }>{value.RA}</span>
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {value.HR}
                                </td>
                                <td>
                                <Doughnut data={{
                                        labels: this.state.lables,
                                        datasets: this.state.datasets[index]
                                        }}
                                        options={{
                                            legend: {
                                                display: false
                                            },
                                            plugins: {
                                                labels: false
                                              },
                                            maintainAspectRatio: false
                                        }}
                                        width={50}
                                        height={30}></Doughnut>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
 
            </div>
        )
    }
}
