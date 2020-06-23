import React, { Component } from 'react';
import readvelocity from '../../Assets/read-velocity.png';
import raisehand from '../../Assets/raise-hand.png';
import studioimg from '../../Assets/studio.png';
import classroompng from '../../Assets/classroom.png';
import greenarrow from '../../Assets/green_arrow.png';
import axios from 'axios';
import guage from '../../Assets/ra-org.png';
import grayarrow from '../../Assets/grayarrow.PNG';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-labels';
import Calander from '../calander/Calander';
import Styles from './Dashboard.module.css';
import Carousel, { consts } from 'react-elastic-carousel';

export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            studiovalues: [],
            classroomvalues: [],
            recentsessionvalues: [],
            linechartvalues: [],
            trendvalues: [],
            trendarrowvalues: [],
            recentreports: [],
            startDate: new Date(),
            lables: ['Aug', 'Sep', 'Oct', 'Dec'],
            lables1: ['Jan', 'Feb', 'Mar', 'Apr'],
            lables2: ['Declained', 'Improving', 'Maintained'],
            datasets: [],
            datasets0: [],
            datasets1: [],
            datasets2: [],
            datasets3: [],
            date: null,
            breakPoints: [
                { width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 3},
                { width: 850, itemsToShow: 5 },
              ]
      }
      }

      receivedata = data => {
        alert(data)
        axios.all([
            axios.get('./dashboard1x.json'),
            axios.get('./dashboard2.json'),
            axios.get('./dashboard3.json'),
        ]).then(axios.spread((responseone, responsetwo, responsethree) => {
            this.setState({ 
                date: data,
                studiovalues: responseone.data[0].dataone,
                classroomvalues: responseone.data[0].datatwo,
                recentsessionvalues: responseone.data[1].recentsessions,
                linechartvalues: responsetwo.data,
                trendvalues: responsethree.data[0].trend,
                trendarrowvalues: responsethree.data[0].trendgraph,
                recentreports: responsethree.data[0].recentreports,
                datasets: [{
                    data: responseone.data[0].chartdataone,
                    backgroundColor:'rgb(229,244,254)',
                    radius : 4,
                    borderWidth: 1.5,
                    borderColor: "#80b6f4",
                    pointBorderColor: "#80b6f4",
                    pointBackgroundColor: "#80b6f4",
                    pointHoverBackgroundColor: "#80b6f4",
                    pointHoverBorderColor: "#80b6f4",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    fill: true,
                  }],
                  datasets0: [{
                    data: responseone.data[0].chartdatatwo,
                    backgroundColor:'rgb(229,244,254)',
                    radius : 4,
                    borderWidth: 1.5,
                    borderColor: "#80b6f4",
                    pointBorderColor: "#80b6f4",
                    pointBackgroundColor: "#80b6f4",
                    pointHoverBackgroundColor: "#80b6f4",
                    pointHoverBorderColor: "#80b6f4",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1, 
                    fill: true,
         
                  }],
                  datasets1: responseone.data[1].recentsessions.map(el => [{
                    data: el.result,
                    backgroundColor: [ '#FF0000', '#022AB8', '#5AAB00', '#E6E6E6' ]
                 }]),
                 datasets2: responsetwo.data.map(el => [{
                    data: el.chartdata,
                    backgroundColor:'rgb(229,244,254)',
                    radius : 4,
                    borderWidth: 1.5,
                    borderColor: "#80b6f4",
                    pointBorderColor: "#80b6f4",
                    pointBackgroundColor: "#80b6f4",
                    pointHoverBackgroundColor: "#80b6f4",
                    pointHoverBorderColor: "#80b6f4",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    fill: true,
                }]),
                datasets3: [{
                    data: responsethree.data[0].trendgraph,
                    backgroundColor: [ '#E40F33', '#11C055', '#A5A5A5' ],
                }]
            })
        }))
      }
    
      componentDidMount() {
        axios.all([
            axios.get('./dashboard1.json'),
            axios.get('./dashboard2.json'),
            axios.get('./dashboard3.json'),
        ]).then(axios.spread((responseone, responsetwo, responsethree) => {
            this.setState({ 
                studiovalues: responseone.data[0].dataone,
                classroomvalues: responseone.data[0].datatwo,
                recentsessionvalues: responseone.data[1].recentsessions,
                linechartvalues: responsetwo.data,
                trendvalues: responsethree.data[0].trend,
                trendarrowvalues: responsethree.data[0].trendgraph,
                recentreports: responsethree.data[0].recentreports,
                datasets: [{
                    data: responseone.data[0].chartdataone,
                    backgroundColor:'rgb(229,244,254)',
                    radius : 4,
                    borderWidth: 1.5,
                    borderColor: "#80b6f4",
                    pointBorderColor: "#80b6f4",
                    pointBackgroundColor: "#80b6f4",
                    pointHoverBackgroundColor: "#80b6f4",
                    pointHoverBorderColor: "#80b6f4",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    fill: true,
                  }],
                  datasets0: [{
                    data: responseone.data[0].chartdatatwo,
                    backgroundColor:'rgb(229,244,254)',
                    radius : 4,
                    borderWidth: 1.5,
                    borderColor: "#80b6f4",
                    pointBorderColor: "#80b6f4",
                    pointBackgroundColor: "#80b6f4",
                    pointHoverBackgroundColor: "#80b6f4",
                    pointHoverBorderColor: "#80b6f4",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1, 
                    fill: true,
         
                  }],
                  datasets1: responseone.data[1].recentsessions.map(el => [{
                    data: el.result,
                    backgroundColor: [ '#FF0000', '#022AB8', '#5AAB00', '#E6E6E6' ]
                 }]),
                 datasets2: responsetwo.data.map(el => [{
                    data: el.chartdata,
                    backgroundColor:'rgb(229,244,254)',
                    radius : 4,
                    borderWidth: 1.5,
                    borderColor: "#80b6f4",
                    pointBorderColor: "#80b6f4",
                    pointBackgroundColor: "#80b6f4",
                    pointHoverBackgroundColor: "#80b6f4",
                    pointHoverBorderColor: "#80b6f4",
                    pointBorderWidth: 1,
                    pointHoverRadius: 1,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    fill: true,
                }]),
                datasets3: [{
                    data: responsethree.data[0].trendgraph,
                    backgroundColor: [ '#E40F33', '#11C055', '#A5A5A5' ],
                }]
            })
        }))    
      }

      render() {
        return (
          <div>
              <div className='row'>
                <div className='col-md-7 col-sm-12 col-xs-12'>
                </div>
                <div className='col-md-5 col-sm-12 col-xs-12'>
                    <div style={{ float: 'right' }}>
                        <Calander senddata={this.receivedata} selecteddate={this.state.date}></Calander>
                    </div>
                </div>
              </div>
              <div className='row' style={{ marginTop: '20px' }}>
                  <div className='col-md-7 col-sm-12 col-xs-12'>
                      <div className='stdsection'>
                        <div className={Styles.verticalcenteralignrow} style={{ padding: '15px 0px 15px 0px'}}>
                            <div className={[Styles.verticalcenteralign]} style={{ width: '14%' }}>
                                <img src={studioimg} />
                                <div className={Styles.studiotxt}>Studio</div>
                            </div>
                            { this.state.studiovalues.map( value =>    
                            <div className={`${Styles.stdbx} ${Styles.verticalcenteralign}`}>
                                <div className={Styles.maintxt}>{value.relayedval}</div>
                                <div className={Styles.subtxt}>{value.relayedtxt}</div>
                            </div>
                            )}

                            <div className={`${Styles.stdbx} ${Styles.verticalcenteralign}`}>
                                 <Line data={{
                                        labels: this.state.lables,
                                        datasets: this.state.datasets
                                        }}
                                        options={{
                                            legend: {
                                                display: false
                                            },
                                            scales: {
                                                xAxes: [{
                                                    gridLines: {
                                                        display:false
                                                    },
                                                    ticks: {
                                                        display: false,                                   
                                                    }
                                                }],
                                                yAxes: [{
                                                    gridLines: {
                                                        display:false
                                                    },
                                                    ticks: {
                                                        display: false,
                                                        beginAtZero: true,
                                                    }
                                                }]
                                            },
                                            responsive: false,
                                            maintainAspectRatio: false,
                                        }}
                                        width={103}
                                        height={56}></Line>
                            </div>
                        </div>
                        </div>
                  </div>
                  <div className='col-md-5 col-sm-12 col-xs-12'>
                      <div className='stdsection'>
                        <div className={Styles.verticalcenteralignrow} style={{ padding: '15px 0px 15px 0px'}}>
                            <div className={`${Styles.clsbx} ${Styles.verticalcenteralign}`}>
                                <img src={classroompng} />
                                <div className={Styles.studiotxt}>Classroom</div>
                            </div>
                            { this.state.classroomvalues.map( value =>
                                <div className={`${Styles.clsbx} ${Styles.verticalcenteralign}`}>
                                    <div className={Styles.maintxt}>{value.relayedval}</div>
                                    <div className={Styles.subtxt}>{value.relayedtxt}</div>
                                </div>
                            )}

                            <div className={Styles.verticalcenteralign} style={{ width: '30%' }}>
                                    <Line data={{
                                        labels: this.state.lables,
                                        datasets: this.state.datasets0
                                        }}
                                        options={{
                                            legend: {
                                                display: false
                                            },
                                            scales: {
                                                xAxes: [{
                                                    gridLines: {
                                                        display:false
                                                    },
                                                    ticks: {
                                                        display: false
                                                    }
                                                }],
                                                yAxes: [{
                                                    gridLines: {
                                                        display:false
                                                    },
                                                    ticks: {
                                                        display: false,
                                                        beginAtZero: true,
                                                    }
                                                }]
                                            },
                                            responsive: false,
                                            maintainAspectRatio: false,
                                        }}
                                        width={103}
                                        height={56}></Line>
                            </div>
                        </div>
                        </div>
                  </div>
              </div>
                <div className="row" style={{margin: '35px 0px -32px 0px', color: '#FC8802', fontWeight: '600'}}>
                    RECENT SESSIONS
                </div>
                <div className="bottomDiv">
                    <table className="table table-tripped sessiontab">
                        <thead>
                            <tr>
                                <th className={Styles.theadtxtD}>
                                    Date
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Session No.
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Topic
                                </th>
                                <th className={Styles.theadtxtD}>
                                Studio/Classroom
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Class
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Attendance
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
                                <tr className="tbdybackground">
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
                                        labels: this.state.lables1,
                                        datasets: this.state.datasets1[index]
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
                    <div className="row" style={{margin: '5px 0 10px 0', color: '#FC8802', fontWeight: '600'}}>
                      PERFORMANCE
                    </div>
                    <div className="row" style={{backgroundColor: 'white', borderRadius: '4px', marginLeft: '5px', padding: '18px 5px 18px 5px', width: '99.5%'}}>
                        <div className={`${Styles.verticalcenteralign} ${Styles.performancerabox}`}>
                          <img src={readvelocity} />
                          <div style={{fontSize: '14px', fontWeight: 'bold'}}>Read Velocity</div>
                        </div>
                        <div style={{width: '86%'}}>
                        <Carousel
                                breakPoints={this.state.breakPoints}
                                pagination={false}
                                renderArrow = {({ type, onClick }) => {
                                    const pointer = type === consts.PREV ? <FontAwesomeIcon icon={faChevronCircleLeft} style={{ fontSize: '23px', color: 'black', position: 'absolute', right: '53px', marginTop: '10px' }} />  
                                    : <FontAwesomeIcon icon={faChevronCircleRight} style={{ fontSize: '23px', color: 'black', position: 'absolute', right: '25px', marginTop: '10px' }} /> 
                                    return <span onClick={onClick}>{pointer}</span>
                                  }}
                                >
                        {this.state.linechartvalues.map( (linechartvalue, index) => 
                        <div className={ Styles.verticalcenteralignrow} style={{ width: '100%', marginLeft: '-35px' }} >
                            <div className={`${Styles.verticalcenteralign} ${Styles.performanceboxes}`}>
                                <div className={Styles.percent}>{ linechartvalue.value }</div>
                                <div className={Styles.subject}>{ linechartvalue.subject }</div>
                            </div>
                            <div className={`${Styles.verticalcenteralign} ${Styles.performanceboxes}`}>
                            <Line data={{
                                            labels: this.state.lables,
                                            datasets: this.state.datasets2[index]
                                            }}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                scales: {
                                                    xAxes: [{
                                                        gridLines: {
                                                            display:false
                                                        },
                                                        ticks: {
                                                            display: false
                                                        }
                                                    }],
                                                    yAxes: [{
                                                        gridLines: {
                                                            display:false
                                                        },
                                                        ticks: {
                                                            display: false
                                                        }
                                                    }]
                                                },
                                                maintainAspectRatio: false,
                                                responsive: false,
                                            }}
                                            width={70}
                                            height={50}></Line>
                            </div>
                        </div>
                        )}
                        </Carousel>
                        </div>
                    </div>
                    <div className="row" style={{margin: '25px 0px -15px 0px', color: '#FC8802', fontWeight: '600'}}>
                      TREND
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                        <table className="table table-tripped sessiontab">
                        <thead>
                            <tr>
                                <th className={Styles.theadtxtD}>
                                    RA#
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Student Name
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Class
                                </th>
                                <th className={Styles.theadtxtD}>
                                    <img src={guage} />
                                </th>
                                <th className={Styles.theadtxtD}>
                                    Trend
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.trendvalues.map( trendvalue => 
                            <tr className="tbdybackground">
                                <td className={Styles.tbodytxt}>
                                    { trendvalue.RA }
                                </td>
                                <td className={Styles.tbodytxt}>
                                    { trendvalue.studentname }
                                </td>
                                <td className={Styles.tbodytxt}>
                                    { trendvalue.Class }
                                </td>
                                <td className={Styles.tbodytxt}>
                                <span className={
                                        trendvalue.RV > 1 && trendvalue.RV < 2
                                        ? Styles.rabgred
                                        : trendvalue.RV > 2 && trendvalue.RV < 3
                                        ? Styles.rabgblue
                                        : trendvalue.RV > 3 && trendvalue.RV < 4
                                        ? Styles.rabgyellow
                                        : trendvalue.RV > 4 && trendvalue.RV < 10
                                        ? Styles.rabggreen
                                        : false
                                        }>{ trendvalue.RV }</span>
                                </td>
                                <td className={Styles.tbodytxt}>
                                {trendvalue.RV > 1 && trendvalue.RV < 2
                                        ? <img src={grayarrow} />
                                        : trendvalue.RV > 2 && trendvalue.RV < 3
                                        ? <img src={grayarrow} />
                                        : trendvalue.RV > 3 && trendvalue.RV < 4
                                        ? <img src={greenarrow} />
                                        : trendvalue.RV > 4 && trendvalue.RV < 10
                                        ? <img src={grayarrow} />
                                        : false}
                                
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                        </div>
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className={Styles.pieboxtext}>
                                    Students - Trend Graph
                                </div>
                            </div>
                            <div className='row stdsection' style={{padding: '25px 0px 25px 30px'}}>
                                <div className='col-md-4'>
                                    {this.state.trendarrowvalues.map( trendarrowvalue => 
                                        <div className='row' style={{marginTop: '15px'}}>
                                            <div className='col-md-4 verticalcenteralign'>
                                                <img src={grayarrow} />
                                            </div>
                                            <div className='col-md-8 verticalcenteralign'>
                                                <div className={Styles.pietxt}>{trendarrowvalue}</div>
                                                <div className={Styles.piesubtxt}>Improving</div>
                                            </div>
                                        </div>    
                                    )}
                                </div>
                                <div className='col-md-8'>
                                    <div>
                                    <Pie data={{
                                            labels: this.state.lables2,
                                            datasets: this.state.datasets3
                                            }}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                plugins: {
                                                    labels: {
                                                        render: 'label',
                                                        fontColor: '#fff',
                                                        fontSize: 14,
                                                    }
                                                },
                                                maintainAspectRatio: false
                                            }}
                                            width={240}
                                            height={240}></Pie>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{margin: '5px 0px 0px 5px', color: '#FC8802', fontWeight: '600'}}>
                      RECENT REPORTS
                    </div>
                    <div className='row'>
                    { this.state.recentreports.map(recentreport => 
                        <div className='col-md-6'>
                            <div className="tbdybackground" style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                <div className={Styles.tbodytxtR}>
                                    {recentreport.reportval}
                                </div>
                                <div className={Styles.tbodytxtRR}>
                                    {recentreport.reporttxt}
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
 
        )
      }
}


