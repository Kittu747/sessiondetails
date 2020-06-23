import React, { Component } from 'react';
import Styles from './Attendance.module.css';
import Calander from '../calander/Calander';
import sessionimg from '../../Assets/attendance.png';
import studioimg from '../../Assets/studio.png';
import classroompng from '../../Assets/classroom.png';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

class Attendance extends Component {

    constructor(props){
        super(props)

        this.state = {
            studiovalues: [],
            classroomvalues: [],
            classtable: [],
            studiotable: [],
            classroomtable: [],
            startDate: new Date(),
            lables: [
                "Jun 18",
                "July 18",
                "Aug 18",
                "Sep 18",
                "Oct 18",
                "Nov 18",
                "Dec 18",
                "Jan 19",
                "Feb 19",
                "Mar 19",
                "April 19",
                "May 19"
              ],
            datasets: []
        }
    }

    receivedata = data => {
        alert(data)
    }

    componentDidMount() {
        axios.all([
            axios.get('./attendance.json'),
        ]).then(axios.spread((responseone) => {
            this.setState({ 
                    studiovalues: responseone.data[0].dataone,
                    classroomvalues: responseone.data[0].datatwo,
                    classtable: responseone.data[1].classtable,
                    studiotable: responseone.data[1].studiotable,
                    classroomtable: responseone.data[1].classroomtable,
                    datasets: [
                        {
                            label: "Studio Attended",
                            backgroundColor: "#F4725C",
                            borderColor: "#99AABB",
                            borderWidth: 0,
                            maxHeight: 6,
                            data: responseone.data[2].stackedchart[0].chartdatax
                          },
                          {
                            label: "Classroom Conducted",
                            backgroundColor: "#434348",
                            borderColor: "#434348",
                            borderWidth: 0,
                            data: responseone.data[2].stackedchart[0].chartdatay
                          },
                    ]
            })
        }))    
      }

    render(){
        return(
            <div className={Styles.attdbg}>
                <div className='row'>
                    <div className='col-md-12'>
                        <div style={{float: 'right', padding: '5px'}}>
                        <Calander senddata={this.receivedata} selecteddate={this.state.date}></Calander>
                        </div>
                    </div>
                    <div className='col-md-2 verticalcenteralign'>
                        <div className={Styles.sessionbox}>
                            <div>
                                <img src={sessionimg} />
                            </div>
                            <div>
                                <div className={Styles.sessiontxt}>Attendance</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-xs-12'>
                        <div className={`${Styles.studiobox} ${Styles.verticalcenteralignrow}`}>
                            <div className="col-md-3 col-sm-2 col-xs-1 verticalcenteralign">
                                <img src={studioimg} />
                                <div className={Styles.studiotxt}>Studio</div>
                            </div>
                            {this.state.studiovalues.map(studiovalue => 
                                <div className="col-md-3 col-sm-2 col-xs-1 verticalcenteralign">
                                    <div className={Styles.maintxt}>{studiovalue.relayedval}</div>
                                    <div className={Styles.subtxt}>{studiovalue.relayedtxt}</div>
                                </div>  
                            )}
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 col-xs-12'>
                        <div className={Styles.classroombox}>
                            <div className="col-md-4  col-sm-6 col-xs-6 verticalcenteralign">
                                <img src={classroompng} />
                                <div className={Styles.studiotxt}>Classroom</div>
                            </div>
                            {this.state.classroomvalues.map(classroomvalue =>
                                <div className="col-md-4 col-sm-6 col-xs-6 verticalcenteralign">
                                    <div className={Styles.maintxt}>{classroomvalue.relayedval}</div>
                                    <div className={Styles.subtxt}>{classroomvalue.relayedtxt}</div>
                                </div>  
                            )}
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className='row' style={{ marginTop: '21px'}}>
                           
                        </div>
                        <div className='row verticalcenteralign'>
                            <table className={Styles.table1}>
                                <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Subject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.classtable.map(classtab => 
                                        <tr>
                                            <td>{classtab.class}</td>
                                            <td>{classtab.subject}</td>
                                        </tr>  
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row' style={{margin: '0px'}}>
                            <p className={Styles.rowtxt}>Studio Sessions</p>
                        </div>
                        <div className='row verticalcenteralign'>
                            <table className={Styles.table2}>
                                <thead>
                                    <tr>
                                        <th>Relayed</th>
                                        <th>Attended</th>
                                        <th>Questions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.studiotable.map(studiotab => 
                                    <tr>
                                        <td>{studiotab.relayed}</td>
                                        <td>{studiotab.attended}</td>
                                        <td>{studiotab.questions}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='row' style={{margin: '0px'}}>
                            <p className={Styles.rowtxt}>Classroom  Sessions</p>
                        </div>
                        <div className='row verticalcenteralign'>
                            <table className={Styles.table3}>
                                <thead>
                                    <tr>
                                        <th>Conducted</th>
                                        <th>Questions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.classroomtable.map(classroomtab => 
                                    <tr>
                                        <td>{classroomtab.conducted}</td>
                                        <td>{classroomtab.questions}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr style={{ border: '1px solid rgba(0, 0, 0, 0.2)', width: '100%'}} />
                    <div className='col-md-12'>
                    <div style={{ position: 'absolute' }}>
                        <div className={Styles.attchart}>Attendance Trend</div>
                        <div className={Styles.attsubchart}>All Class</div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                    <Bar data={{
                                        labels: this.state.lables,
                                        datasets: this.state.datasets
                                        }}
                                        options={{
                                            barValueSpacing: 0,
                                            barDatasetSpacing: 0,
                                            plugins: {
                                                labels: false
                                              },
                                            legend: {
                                                display: false
                                            },
                                            scales: {
                                                xAxes: [{
                                                    gridLines: {
                                                        // You can change the color, the dash effect, the main axe color, etc.
                                                        borderDash: [3, 3],
                                                        color: '#E6EAF2'
                                                    },
                                                    ticks: {
                                                        display: true,
                                                        beginAtZero: true,
                                                    },
                                                    barPercentage: 0.9,
                                                    categoryPercentage: 0.3,
                                                }],
                                                yAxes: [{
                                                    gridLines: {
                                                        // You can change the color, the dash effect, the main axe color, etc.
                                                        borderDash: [3, 3],
                                                        color: '#E6EAF2'
                                                    },
                                                    ticks: {
                                                        display: true,
                                                        beginAtZero: true,
                                                        stepSize: 2,
                                                    },
                                                }]
                                            },
                                            legend: {
                                                display: true,
                                                labels: {},
                                                position:'top'
                                              },
                                            maintainAspectRatio: false
                                        }}
                                        height = '300px'
                                        ></Bar>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Attendance;
