import React, { Component } from 'react';
import raarrow from '../../Assets/green_arrow.png';
import trend from '../../Assets/graph-dashboard.png';
import raisehand from '../../Assets/raise-org.png';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Styles from './Performancedetails.module.css';
import Calander from '../calander/Calander';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import GaugeChart from 'react-gauge-chart';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import Carousel, { consts } from 'react-elastic-carousel';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 250, margin: 5, height: 30 };

class Performancedetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            values: [],
            linechartvalues: [],
            chartvalues: [],
            startDate: new Date(),
            items: [
                {id: 1, title: 'item #1'},
                {id: 2, title: 'item #2'},
                {id: 3, title: 'item #3'},
                {id: 4, title: 'item #4'},
                {id: 5, title: 'item #5'}
            ],
            lables: ['Mar', 'Apr', 'Oct', 'Dec'],
            lables1: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ],
            lables2: ['Mar', 'Apr', 'Oct', 'Dec'],
            datasets1: [
                {
                    label: "Correct",
                    backgroundColor: "#0fc155",
                    borderColor: "#0fc155",
                    borderWidth: 0,
                    maxHeight: 6,
                    data: [9, 8, 2, 7, 3, 5, 6, 7, 9, 6, 5, 6]
                  },
                  {
                    label: "Near Correct",
                    backgroundColor: "#4c7df0",
                    borderColor: "#4c7df0",
                    borderWidth: 0,
                    data: [4, 5, 4, 7, 3, 7, 4, 6, 8, 5, 2, 6]
                  },
                  {
                    label: "Incorrect",
                    backgroundColor: "#e50e33",
                    borderColor: "#e50e33",
                    borderWidth: 0,
                    maxHeight: 6,
                    data: [9, 8, 2, 7, 3, 5, 6, 7, 9, 6, 5, 6]
                  },
                  {
                    label: "Not Answered",
                    backgroundColor: "#d8d8d8",
                    borderColor: "#d8d8d8",
                    borderWidth: 0,
                    maxHeight: 6,
                    data: [9, 8, 2, 7, 3, 5, 6, 7, 9, 6, 5, 6]
                  }
            ],
            datasets2: [
                {
                    label: "Studio Attended",
                    backgroundColor: "#CFDDFF",
                    borderColor: "#CFDDFF",
                    borderWidth: 0,
                    maxHeight: 6,
                    data: [9, 8, 2, 7, 3, 5, 6, 7, 9, 6, 5, 6]
                  },
                  {
                    label: "Classroom Conducted",
                    backgroundColor: "#565656",
                    borderColor: "#565656",
                    borderWidth: 0,
                    data: [4, 5, 4, 7, 3, 7, 4, 6, 8, 5, 2, 6]
                  },
            ],
            datasets3: [{
                data: [10, 20, 15, 22],
                backgroundColor:'rgb(229,244,254)',
                radius : 4,
                borderWidth: 1.5,
                borderColor: "#80b6f4",
                pointBorderColor: "#80b6f4",
                pointBackgroundColor: "#80b6f4",
                pointHoverBackgroundColor: "#80b6f4",
                pointHoverBorderColor: "#80b6f4",
                pointBorderWidth: 5,
                pointHoverRadius: 1,
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                fill: false,
     
              }],
        }
    }
    
    componentDidMount(){
        axios.all([
            axios.get('/dataperformance.json'),
            axios.get('/performancedetails.json'),
        ]).then(axios.spread((responseone, responsetwo) => {
            this.setState({ 
                        values: responseone.data,
                        linechartvalues: responsetwo.data,
                        datasets: responsetwo.data.map(el => [{
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
                    }]
                )  
            })
        }))
    }    

    render() {
        const { items } = this.state;
        console.log(this.props)
        return (
            <div>
                <div className='row stdsection verticalcenteralignstd'>
                            <div className='col-md-2'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='proinfo verticalcenteralignstd'>
                                            <div className='proinfotxt'>8th A</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-10'>
                                <div className='row'>
                                        { this.state.values.map( value => 
                                                        <div className='col-md-4 verticalcenteralignrow'>
                                                           <FontAwesomeIcon icon={faCircle} />
                                                           <div className={Styles.skillbg}>
                                                               <div className={Styles.skilltxt}>{value.sectionName}</div>
                                                           </div>
                                                       </div>
                                            
                                            )}
                         
                                </div>
                            </div>
                    </div>
                    <div className='row stdsection' style={{margin: '20px 0 20px 0'}}>
                    <div className={Styles.dropdownclass} style={{margin: '15px 0 15px 0'}}>
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
                    </div>
                    <div className={Styles.calclass} style={{margin: '15px 0 15px 0'}}>
                        <div style={{float :'right'}}>
                            <Calander></Calander>
                        </div>
                    </div>
                </div>
                <div className='stdsection' style={{margin: '20px 0 20px 0'}}>
                    <div className='row' style={{marginBottom: '-10px'}}>
                        <div className='col-md-6'>
                            <div className={Styles.raclass}>
                                <div className={Styles.RAtxt}>Dynamical systems and differential equations</div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className={Styles.RNKclass}>                           
                                <Carousel
                                itemsToShow={3}
                                pagination={false}
                                renderArrow = {({ type, onClick }) => {
                                    const pointer = type === consts.PREV ? <FontAwesomeIcon icon={faChevronCircleLeft} style={{ fontSize: '23px', color: 'black', marginLeft: '30px' }} />  : <FontAwesomeIcon icon={faChevronCircleRight} style={{ fontSize: '23px', color: 'black' }} /> 
                                    return <span onClick={onClick}>{pointer}</span>
                                  }}>
                                    {items.map(item => <div key={item.id}>{item.title}</div>)}
                                </Carousel>  
                            </div>
                        </div>
                    </div>
                    <hr style={{width :'100%', marginBottom: '0px'}} />
                    <div className='row' style={{marginBottom: '-20px'}}>
                        <div className='col-md-6 col-sm-6 col-xs-6'>
                            <div className={Styles.raclass}>
                                <div className={Styles.RAtxt}>Read Velocity</div>
                                <div>
                                <div className={Styles.grpavg}>Group AVG</div>
                                <div className={Styles.grpavgval}>4.51</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xs-6'>
                            <div className={Styles.RNKclass}>                           
                                <div>
                                    <div className={Styles.RNKavg}>Group AVG</div>
                                    <div className={Styles.RNKsubavg}>4.51</div>
                                </div>
                                <div className={Styles.RNKval}>4.25</div>   
                            </div>
                        </div>
                    </div>
                    <hr style={{width :'100%'}} />
                    <div className='row'>                        
                        <div className='col-md-7'>
                            <div className='row'>
                                <div className='col-md-4 verticalcenteralign'>
                                    <p className={ Styles.dtxt }>Difficulty</p>
                                </div>
                                <div className='col-md-8 verticalcenteralign'>
                                    <p className={ Styles.dtxtbox }>Total questions</p>
                                </div>
                            </div>
                            <div className='row' style={{margin: '0px'}}>
                            <Bar data={{
                                            labels: this.state.lables1,
                                            datasets: this.state.datasets1
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
                                                        stacked: true,
                                                        gridLines: {
                                                            display: false
                                                        },
                                                        barPercentage: 5,
                                                        barThickness: 12
                                                    }],
                                                    yAxes: [{
                                                        stacked: true,
                                                        ticks: {
                                                            min: 0,
                                                            max: 100,
                                                            stepSize: 20,
                                                            callback: function (tick) {
                                                                return tick.toString() + '%';
                                                            },
                                                            fontSize: 11,
                                                            fontColor: '#464646;',
                                                            fontFamily: "'Roboto'",
                                                            fontWeight: "500"
                                                        },
                                                        gridLines: {
                                                            borderDash: [5, 6],
                                                            color: "#E6EAF2"
                                                        }
                                                    }]
                                                },
                                                legend: {
                                                    display: true,
                                                    labels: {},
                                                    position:'left'
                                                },
                                                maintainAspectRatio: false
                                            }}
                                            height = '200px'
                                            ></Bar>
                        
                            </div>
                            <div className='row'>
                                <div className='col-md-4'>

                                </div>
                                <div className='col-md-8 verticalcenteralign'>
                                    <p className={ Styles.dtxtbox }>Difficulty Level</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 verticalcenteralign'>
                            <div className='row'>
                                <div className='col-md-3 verticalcenteralign'>
                                    <div>
                                    <div className={Styles.RAguagetxt}>Accuracy</div>
                                    <div className={Styles.RAguagesubtxt}>4.51 &nbsp; <img src={raarrow} /></div>
                                    <div style={{margin : '5px'}}></div>
                                    <div className={Styles.grpavg}>Group AVG</div>
                                    <div className={Styles.grpavgval}>4.51</div>
                                    </div>
                                </div>
                                <div className='col-md-9 verticalcenteralign'>
                                    <GaugeChart id="gauge-chart1"
                                      arcsLength={[0.3, 0.5, 0.2]}
                                      colors={['#5BE12C', '#F5CD19', '#EA4228']}
                                      hideText={true}
                                      percent={0.37}
                                      arcPadding={0}
                                      nrOfLevels={5}
                                      cornerRadius ={0}
                                       />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{width :'100%'}} style={{ margin: '0px'}} />
                    <div className='row' style={{ padding: '35px 0 35px 0' }}>
                    <div className='col-md-7'>
                            <div className='row'>
                                <div className='col-md-3 verticalcenteralign'>
                                    <div>
                                        <div className={Styles.RAguagetxt}>Score</div>
                                        <div className={Styles.RAguagesubtxt}>4.51 <img src={raarrow} /></div>
                                        <div style={{margin : '5px'}}></div>
                                        <div className={Styles.grpavg}>Group AVG</div>
                                        <div className={Styles.grpavgval}>4.51</div>
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    <div className='row'>
                                        <div className={Styles.barone}>
                                            <div className={Styles.bargreen}>

                                            </div>
                                            <div className={Styles.barblue}>
                                                
                                            </div>
                                            <div className={Styles.barred}>
                                                
                                            </div>
                                            <div className={Styles.bargray}>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className='row'>
                                        <div className={Styles.scorelabel}>
                                            <div className={Styles.scoreone}>
                                                96
                                            </div>
                                            <div className={Styles.scoretwo}>
                                                96
                                            </div>
                                            <div className={Styles.scorethree}>
                                                96
                                            </div>
                                            <div className={Styles.scorefour}>
                                                96
                                            </div>
                                            <div className={Styles.scorefive}>
                                                96
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className={Styles.scorelabeltxt}>
                                            <div className={Styles.scoreonetxt}>
                                                Questions
                                            </div>
                                            <div className={Styles.scoretwotxt}>
                                                Correct
                                            </div>
                                            <div className={Styles.scorethreetxt}>
                                                Near Correct
                                            </div>
                                            <div className={Styles.scorefourtxt}>
                                                Incorrect
                                            </div>
                                            <div className={Styles.scorefivetxt}>
                                                Not Answered
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 verticalcenteralign'>
                            <div className='row'>
                                <div className='col-md-4 verticalcenteralign'>
                                    <div>
                                            <div className={Styles.RAguagetxt}>Accuracy</div>
                                            <div className={Styles.RAguagesubtxt}>4.51 &nbsp; <img src={raarrow} /></div>
                                            <div style={{margin : '5px'}}></div>
                                            <div className={Styles.grpavg}>Group AVG</div>
                                            <div className={Styles.grpavgval}>4.51</div>
                                    </div>
                                </div>
                                <div className='col-md-8 verticalcenteralign'>
                                    <div>
                                        <div style={wrapperStyle}>
                                            <Range min={0} max={20} marks={5} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
                                        </div>
                                    </div>
                                    <div className='verticalcenteralign'>
                                        <div className={Styles.RAguagetxt}>Accuracy</div>
                                        <div className={Styles.grpavg}>Group AVG</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row' style={{margin: '20px 0 20px 0'}}>
                    <div className='col-md-8'>
                        <div className='row stdsection' style={{ marginLeft: '-13px' }}>
                            <div className='col-md-12' style={{ padding: '20px 0px 4px 32px'}}>
                                <img src={trend} /> <span className={ Styles.trendtxt }>TREND</span>
                            </div>
                            <hr style={{width :'100%'}} />
                            <div className='col-md-3 verticalcenteralign'>
                                <div className='row' style={{ marginTop: '10%' }}>
                                    <div className='col-md-12 verticalcenteralign'>
                                        <button className='btn btn-sm btn-warning'>Velocity</button>
                                        <button className='btn btn-sm btn-light'>Group Rank</button>
                                        <button className='btn btn-sm btn-light'>Score</button>
                                        <button className='btn btn-sm btn-light'>Accuracy</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <div className='row'>
                                <div className='col-md-1 col-sm-1 col-xs-1' style={{ marginTop: '20%' }}>
                                    <div className='col-md-12 verticalcenteralign'>
                                        <p className={Styles.verticaltxt}>Velocity</p>
                                    </div>
                                </div>
                                <div className='col-md-11 col-sm-11 col-xs-11'>
                                <div style={{ margin: '15% 2% 3% 0' }}>
                                <Line data={{
                                                    labels: this.state.lables,
                                                    datasets: this.state.datasets3
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
                                                                ticks: {
                                                                    maxRotation: 90,
                                                                    minRotation: 35,
                                                                },
                                                                gridLines: {
                                                                    display: false,
                                                                },
                                                            }],
                                                            yAxes: [{
                                                                ticks: {
                                                                    fontSize: 11,
                                                                    fontColor: '#464646;',
                                                                    fontFamily: 'Roboto',
                                                                    fontWeight: '500'
                                                                },
                                                                gridLines: {
                                                                    borderDash: [5, 6],
                                                                    color: "#E6EAF2"
                                                                }
                                                            }]
                                                        },
                                                        maintainAspectRatio: false
                                                    }}
                                                    height = '230'
                                                    ></Line>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 stdsection'>
                        <div className='row verticalcenteralignrow' style={{ padding: '20px 0px 8px 20px'}}>
                            <img src={raisehand} /> <span className={ Styles.trendtxt }> Hand Raise</span>
                        </div>
                        <hr style={{width :'109%', marginLeft : '-15px'}} />
                        <div className='row verticalcenteralignrow'>
                            <div className='col-md-6 verticalcenteralign'>
                                <div className={Styles.HRtxt}>4hr 24min.</div>
                                <div className={Styles.HRsubtxt}>Total Duration</div>
                            </div>
                            <div className='col-md-6 verticalcenteralign'>
                                <div className={Styles.HRtxt}>3478</div>
                                <div className={Styles.HRsubtxt}>Hand Raise</div>
                            </div>
                        </div>
                        <div className='row' style={{ margin: '8% 2% 0 2%'}}>
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
        )
    }
}

export default Performancedetails;