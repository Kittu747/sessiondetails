import React, { Component } from 'react';
import Calander from '../calander/Calander';
import axios from 'axios';
import guage from '../../Assets/ra-org.png';
import studio from '../../Assets/studio.png';
import raisehand from '../../Assets/raise-hand.png';
import tabpic from '../../Assets/avatar-3.jpg';
import gandhi from '../../Assets/gandhi.png';
import answers from '../../Assets/icons-answers.png';
import handsm from '../../Assets/raise-hand-sm.png';
import bitmap from '../../Assets/Bitmap.png';
import handraisesm from '../../Assets/Raise Hand.png';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Styles from './Sessiondetails.module.css';
import Carousel, { consts } from 'react-elastic-carousel';

class Sessiondetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            startDate: new Date(),
            sessions: [],
            answers: [],
            charts: [],
            sidepanel: [],
            sideboxes: [],
            lables: ['Aug', 'Sep', 'Oct', 'Dec'],
            lables2: ['Aug', 'Sep', 'Oct', 'Dec'],
            lables3: ['Aug', 'Sep', 'Oct', 'Dec'],
            datasets: [],
            datasets2: [],
            datasets3: [],
      }
    }
    
    componentDidMount() {
        axios.all([
            axios.get('/sessiondetailstop.json'),
            axios.get('/sessiondetailsmiddle.json'),
            axios.get('/sessiondetailsbottom.json'),
            axios.get('/sessiondetailsside.json'),
        ]).then(axios.spread((responseone, responsetwo, responsethree, responsefour) => {
            this.setState({ 
                session: responseone.data[0].session,
                sessions: responseone.data[1],
                sessionval: responseone.data[2].sessionval,
                topicval: responseone.data[2].topicval,
                class: responseone.data[3].class,
                subject: responseone.data[3].subject,
                subsubject: responseone.data[3].subsubject,
                studio: responseone.data[3].studio,
                studioteacher: responseone.data[3].studioteacher,
                time: responseone.data[3].time,
                HR: responseone.data[3].HR,
                charts: responsetwo.data,
                datasets: responsetwo.data.map(el => 
                    [{
                        data: el.chartdataD,
                        backgroundColor: [ '#FF0000', '#022AB8', '#5AAB00', '#E6E6E6' ]
                    }]),
                datasets2: [{
                    data: responsethree.data[2].stackedchart[0].answerx,
                    backgroundColor: [ '#FF0000', '#022AB8', '#5AAB00', '#E6E6E6' ]
                },
                {
                    data: responsethree.data[2].stackedchart[0].answery,
                    backgroundColor: [ '#FF0000', '#022AB8', '#5AAB00', '#E6E6E6' ]
                }],
                datasets3: [{
                    data: responsethree.data[2].stackedchart[1].HRx,
                    backgroundColor: [ '#7CB5EC', '#7CB5EC', '#7CB5EC', '#7CB5EC' ]
                },
                {
                    data: responsethree.data[2].stackedchart[1].HRy,
                    backgroundColor: [ '#4A4545', '#4A4545', '#4A4545', '#4A4545' ]
                }],
                qno: responsethree.data[0].qno,
                question: responsethree.data[0].question,
                answers: responsethree.data[1],
                skill: responsethree.data[2].skill,
                difficulty: responsethree.data[2].difficulty,
                course: responsethree.data[2].course,
                author: responsethree.data[2].author,
                questionno: responsethree.data[2].questionno,
                correctopt: responsethree.data[2].correctopt,
                nearcorrectopt: responsethree.data[2].nearcorrectopt,
                sidepanel: responsefour.data,
                sideboxes: responsefour.data.map(el => 
                    [el.boxvalues]    
                )
            })
        }))
    }

    render() {
        return (
            <div>
                <div className='row stdsection' style={{padding: '15px 0px 15px 0px'}} >
                    <div className='col-md-6'>
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                            <span className={Styles.stxt}>{this.state.session}</span>
                        <FontAwesomeIcon icon={faArrowCircleRight} />
                    </div>
                    <div className='col-md-6'>
                        <div style={{ float:'right' }}>
                            <Calander></Calander>
                        </div>
                    </div>
                </div>
                <div className='row stdsection' style={{ margin: '12px 0px 12px 0px', padding: '15px 0px 15px 0px'}}>
                    <div className='col-md-8'>
                        <span className={Styles.dynamictxt}>Dynamical systems and differential equations</span><span className={Styles.dysubtxt}>View Performance</span>
                        <div className={Styles.verticalstartrow}>
                            {this.state.sessions.map( values => 
                              <div className={`${Styles.verticalcenteralign} ${Styles.sessionbox}`}>{ values.sessions }</div>  
                            )}
                        </div>
                    </div>
                    <div className='col-md-4 verticalcenteralignrow'>
                        <div className='verticalcenteralign' style={{ marginRight: '20px'}}>
                            <img src={guage} />
                            <div className={Styles.RAtxt}>Read Velocity</div>
                        </div>
                        <div className={`${Styles.verticalcenteralign} ${Styles.RAbox}`}>
                            <div className={Styles.RAvaltxt}>{this.state.sessionval}</div>
                            <div className={Styles.RAsubtxt}>Session</div>
                        </div>
                        <div className={`${Styles.verticalcenteralign} ${Styles.RAbox}`}>
                            <div className={Styles.RAvaltxt}>{this.state.topicval}</div>
                            <div className={Styles.RAsubtxt}>Topic</div>
                        </div>
                    </div>
                    <hr style={{ width: '100%' }} />
                    <div className={`${Styles.verticalcenteralignrow} ${Styles.performancerabox}`}>
                        <img src={studio} />
                        <div style={{fontSize: '14px', fontWeight: 'bold', marginLeft: '10px'}}>Studio<br />Session</div>
                    </div>
                    <div className={`${Styles.verticalcenteralignrow} ${Styles.studiosession}`} >
                        <div className={`${Styles.verticalstart} ${Styles.performanceboxes}`}>
                            <div className={Styles.percent}>Class</div>
                            <div className={Styles.subject}>{this.state.class} </div>
                        </div>
                        <div className={`${Styles.verticalstart} ${Styles.performanceboxes}`}>
                            <div className={Styles.percent}>Subject</div>
                            <div className={Styles.subject}>{this.state.subject}</div>
                        </div>
                        <div className={`${Styles.verticalstart} ${Styles.performanceboxes}`}>
                            <div className={Styles.percent}>Sub-Subject</div>
                            <div className={Styles.subject}>{this.state.subsubject}</div>
                        </div>
                        <div className={`${Styles.verticalstart} ${Styles.performanceboxes}`}>
                            <div className={Styles.percent}>Studio</div>
                            <div className={Styles.subject}>{this.state.studio}</div>
                        </div>
                        <div className={`${Styles.verticalstart} ${Styles.performanceboxes}`}>
                            <div className={Styles.percent}>Studio Teacher</div>
                            <div className={Styles.subject}>{this.state.studioteacher}</div>
                        </div>
                        <div className={`${Styles.verticalstart} ${Styles.performanceboxes}`}>
                            <div className={Styles.percent}>Time</div>
                            <div className={Styles.subject}>{this.state.time}</div>
                        </div>
                    </div>
                    <div className={`${Styles.verticalcenteralignrow} ${Styles.performancescroll}`}>
                        <img src={raisehand} />
                        <div style={{fontSize: '14px', fontWeight: 'bold', marginLeft: '10px'}}>{this.state.HR}</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='stdsection'>
                            <div className='row verticalcenteralignrow' style={{ padding: '15px 0 2px 0' }}>
                                <div className='col-md-2 verticalcenteralign'>
                                    <div className={Styles.Qtxt}>Questions</div>
                                </div>
                                <div className='col-md-8 verticalcenteralignrow'>
                                    {this.state.charts.map(( values, index ) => 
                                      <div className={Styles.chartwidth}>
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
                                                width={80}
                                                height={45}></Doughnut>
                                        </div>  
                                    )}
                                </div>
                                <div className='col-md-2 verticalcenteralignrow'>
                                    <FontAwesomeIcon icon={faChevronCircleLeft} style={{ fontSize:'20px', marginLeft: '-5px'}} />
                                    <FontAwesomeIcon icon={faChevronCircleRight} style={{ fontSize:'20px', marginLeft: '5px'}} />  
                               </div>
                            </div>
                            <hr style={{ width: '100%' }} />
                            <div className='row'>
                                <div className='col-md-1'>
                                    <div className={Styles.Qbg}>{this.state.qno}</div>
                                </div>
                               <div className='col-md-11'>
                                   <span style={{ fontSize: '12px', color: '#0C3081', lineHeight: '13px' }}>
                                    {this.state.question}
                                    </span>
                                </div>
                            </div>
                            <div className='row' style={{ margin: '15px 0px 15px 0px'}}>
                               <div className='col-md-1'>

                                </div>
                                <div className='col-md-5'>
                                    <img src={gandhi} />
                                </div>
                                <div className='col-md-6'>
                                    <div className='row' style={{ margin: '0px' }}>
                                        <div className='col-md-12'>
                                            {this.state.answers.map( values =>
                                            <div className='row verticalcenteralignrow optionbg'>
                                                <div className='col-md-2 col-sm-2 col-xs-2'>
                                                    <div className={`${Styles.verticalcenteralignrow} ${Styles.alpha}`}>{values.answeropt}</div>
                                                </div>
                                                <div className='col-md-10 col-sm-10 col-xs-10'>
                                                    <div className={Styles.alphatxt}>{values.answer}</div>
                                                </div>
                                            </div>  
                                            )}
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 verticalcenteralignrow'>
                                    <div className={`${Styles.verticalcenteralignrow} ${Styles.questiontxt}`}>
                                        {this.state.skill}
                                    </div>
                                    <div className={`${Styles.verticalcenteralignrow} ${Styles.questiontxt}`}>
                                        Difficulty : {this.state.difficulty}
                                    </div>
                                    <div className={`${Styles.verticalcenteralignrow} ${Styles.questiontxt}`}>
                                        {this.state.course}
                                    </div>
                                </div>
                                <div className='col-md-6 verticalcenteralignrow'>
                                    <div className={Styles.authortxt}>
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </div>
                                    <div className={Styles.authortxt}>
                                        {this.state.author}
                                    </div>
                                    <div className={Styles.authortxt}>
                                        {this.state.questionno}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6' style={{ margin: '10px 0px 10px 0px'}}>
                                <div className='row stdsection verticalstart' style={{ width: '104%', padding:'8px 0px 8px 0px' }}>
                                    <div className='col-md-10'>
                                        <div className={ Styles.anstxtg}>{this.state.correctopt}</div>
                                    </div>
                                   <div className='col-md-2'>
                                        <div className={`${Styles.verticalcenteralignrow} ${Styles.opttxtg}`}>{this.state.nearcorrectopt}</div>
                                   </div>
                                </div>
                            </div>
                            <div className='col-md-6' style={{ margin: '10px 0px 10px 0px'}}>
                            <div className='row stdsection verticalstart' style={{ width: '104%', marginLeft: '-13px', padding:'8px 0px 8px 0px'}}>
                                    <div className='col-md-10'>
                                        <div className={ Styles.anstxtb}>Near Correct Options</div>
                                    </div>
                                   <div className='col-md-2'>
                                        <div className={`${Styles.verticalcenteralignrow} ${Styles.opttxtb}`}>B</div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12' style={{ margin: '10px 0px 10px 0px'}}>
                                <div className='stdsection'>
                                    <div style={{padding: '10px'}}>
                                    <img src={answers} style={{marginRight: '10px' }} /> <span className={Styles.chartanswer}>Answer details</span>
                                    </div>
                                    <div style={{padding: '10px'}}>
                                    <Bar data={{
                                            labels: this.state.lables2,
                                            datasets: this.state.datasets2
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
                                                            display: false
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
                                                            color: '#E6EAF2'
                                                        },
                                                        ticks: {
                                                            display: true,
                                                            beginAtZero: true,
                                                            stepSize: 2,
                                                        },
                                                    }]
                                                },
                                                maintainAspectRatio: false
                                            }}
                                            height = '230'
                                            ></Bar>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12' style={{ margin: '10px 0px 10px 0px'}}>
                            <div className='stdsection'>
                                <div style={{padding: '10px'}}>
                                <img src={handsm} style={{marginRight: '10px' }} /> <span className={Styles.chartanswer}>Hand Raise</span>
                                </div>
                                <div style={{padding: '10px'}}>
                                <Bar data={{
                                        labels: this.state.lables3,
                                        datasets: this.state.datasets3
                                        }}
                                        options={{
                                            barValueSpacing: 0,
                                            barDatasetSpacing: 0,
                                            plugins: {
                                                labels: false
                                              },
                                            legend: {
                                                display: true
                                            },
                                            scales: {
                                                xAxes: [{
                                                    gridLines: {
                                                        // You can change the color, the dash effect, the main axe color, etc.
                                                        display: false
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
                                                        color: '#E6EAF2'
                                                    },
                                                    ticks: {
                                                        display: true,
                                                        beginAtZero: true,
                                                        stepSize: 2,
                                                    },
                                                }]
                                            },
                                            maintainAspectRatio: false
                                        }}
                                        height = '230'
                                        ></Bar>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='stdsectionsidepanel'>
                            <div className='row' style={{ padding:'17px 0px 0px 0px' }}>
                                <div className='col-md-3 col-sm-3 col-xs-3 verticalcenteralignrow'>
                                    <div className={Styles.tabhead}>RA</div>
                                    <FontAwesomeIcon className='sortupsession' icon={faArrowUp} style={{ fontSize: '8px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdownsession' icon={faArrowDown} style={{ fontSize: '8px', color: '#000000' }} />
                                </div>
                                <div className='col-md-3 col-sm-3 col-xs-3 verticalcenteralign'>
                                    <div className={Styles.tabhead}>NAME</div>  
                                    <FontAwesomeIcon className='sortupsession' icon={faArrowUp} style={{ fontSize: '8px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdownsession' icon={faArrowDown} style={{ fontSize: '8px', color: '#000000' }} />    
                                </div>
                                <div className='col-md-3 col-sm-3 col-xs-3 verticalcenteralign'>
                                    <div className={Styles.tabhead}>SECTION</div>
                                    <FontAwesomeIcon className='sortupsession' icon={faArrowUp} style={{ fontSize: '8px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdownsession' icon={faArrowDown} style={{ fontSize: '8px', color: '#000000' }} />
                                </div>
                                <div className='col-md-3 col-sm-3 col-xs-3 verticalcenteralign'>
                                    <div className={Styles.tabhead}>TOPIC</div>
                                    <FontAwesomeIcon className='sortupsession' icon={faArrowUp} style={{ fontSize: '8px', color: '#000000' }} />
                                    <FontAwesomeIcon className='sortdownsession' icon={faArrowDown} style={{ fontSize: '8px', color: '#000000' }} />
                                </div>
                            </div>
                            <hr style={{width: '100%', marginBottom: '0px'}} />
                            { this.state.sidepanel.map( (values, index) => 
                                <div className='row' style={{ margin: '10px 0px 0px 0px' }}>
                                    <div className='col-md-2 verticalcenteralign'>
                                        <img src={tabpic} className={Styles.tabpic} />
                                        <img src={handraisesm} />
                                    </div>
                                    <div className='col-md-10'>
                                        <div className={Styles.roll}>{values.rollno}</div>
                                        <div className={Styles.rollname}>{values.studentname}</div>
                                        <div className='row' style={{ margin: '0px' }}>
                                            {this.state.sideboxes[index][0].map( el => 
                                              <span className={Styles.boxes}></span>    
                                            )}
                                        </div>
                                        <hr className={Styles.hrclass} />
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <img src={bitmap} />
                                                <span className={Styles.RAsubtxt}>Session</span>
                                                <span className={Styles.RAsubval}>{values.subsession}</span>
                                            </div>  
                                            <div className='col-md-6'>
                                                <span className={Styles.RAsubtxt}>Topic</span>
                                                <span className={Styles.RAsubval}>{values.subtopic}</span>
                                            </div> 
                                        </div>     
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sessiondetails;