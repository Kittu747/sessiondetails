import React, { Component } from 'react';
import Styles from './Reports.module.css';
import axios from 'axios';
import propic from '../../Assets/avatar-1.jpg';
import grayarrow from '../../Assets/grayarrow.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class Reports extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            reportssidevalues: [],
            reportstopvalues: [],
            reportstablevalues: []
        }
    }

    componentDidMount() {
        axios.all([
            axios.get('./reports.json')
        ]).then(axios.spread((responseone) => {
            this.setState({ 
                reportssidevalues: responseone.data[0].sidetxt,
                reportstopvalues: responseone.data[0].topbuttons,
                reportstablevalues: responseone.data[0].reportstable
            })
        }))    
      }
    

    render() {
        return (
            <div>
                <div className='row' style={{margin: '0px'}}>
                    <div className='col-md-3'>
                        <div className='col1'>
                        <div className='row verticalcenteralign'>
                            <div className='row'>
                                <button className={Styles.actbtn}>All</button>
                                <button className={Styles.inactbtn}>Bookmarks</button>
                                <button className={Styles.inactbtn}>Recent</button>
                            </div>
                            <div className='row'>
                                <hr style={{border: '0.5px solid lightgray', width: '280px'}} />
                            </div>
                            <div className='row'>
                                <input type='text' style={{border: '1px solid lightgray', width: '220px', borderRadius:'25px'}} />
                            </div>
                            <div className='row'>
                                <hr style={{border: '0.5px solid lightgray', width: '280px'}} />
                            </div>
                            {this.state.reportssidevalues.map( reportssidevalue => 
                            <div>
                                <div className='row' style={{ margin: '0px'}}>
                                    <div className='dotbox verticalcenteralign'>
                                        <FontAwesomeIcon icon={faCircle} style={{ color: 'green', fontSize: '12px' }} />
                                    </div>
                                    <div className={Styles.txtbox}>
                                        {reportssidevalue.rowtxt}
                                    </div>
                                </div>
                                <div className='row'>
                                    <hr style={{border: '0.5px solid lightgray', width: '280px'}} />
                                </div>
                            </div>
                            )}
                        </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='row col2'>  
                            {this.state.reportstopvalues.map(reportstopvalue =>
                                <button className={Styles.btnnav}>{reportstopvalue.btnone}</button>  
                            )}
                        </div>
                        <div className='row col3' style={{marginTop: '10px'}}>
                            <FontAwesomeIcon icon={faAngleDoubleRight} style={{ color: 'orange', fontSize: '23px', margin: '9px 0px 0px 3px' }} />
                            <span className={Styles.txtheader}>Class 9th English Student list, 4+ Velocity</span>
                        </div>
                        <div className='row'>  
                        <table className="table table-tripped sessiontab">
                        <thead>
                            <tr>
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
                                    Rank (Group)
                                    Percentile
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
                            {this.state.reportstablevalues.map(reportstablevalue =>
                            <tr className="tbdybackground">
                                <td style={{ textAlign:'left' }}>
                                    <span><img src={propic} className={Styles.imgdp} /></span> &nbsp; &nbsp;
                                    <span className={Styles.tbodytxt}>{reportstablevalue.Name}</span>                                    
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {reportstablevalue.Class}
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {reportstablevalue.Attendance}
                                </td>
                                <td className={Styles.tbodytxt}>
                                <span className={
                                        reportstablevalue.Score > 1 && reportstablevalue.Score < 2
                                        ? Styles.rabgred
                                        : reportstablevalue.Score > 2 && reportstablevalue.Score < 3
                                        ? Styles.rabgblue
                                        : reportstablevalue.Score > 3 && reportstablevalue.Score < 4
                                        ? Styles.rabgyellow
                                        : reportstablevalue.Score > 4 && reportstablevalue.Score < 10
                                        ? Styles.rabggreen
                                        : false
                                        }>{reportstablevalue.Score}</span>
                                </td>
                                <td className={Styles.tbodytxt}>
                                <span className={
                                        reportstablevalue.RV > 1 && reportstablevalue.RV < 2
                                        ? Styles.rabgred
                                        : reportstablevalue.RV > 2 && reportstablevalue.RV < 3
                                        ? Styles.rabgblue
                                        : reportstablevalue.RV > 3 && reportstablevalue.RV < 4
                                        ? Styles.rabgyellow
                                        : reportstablevalue.RV > 4 && reportstablevalue.RV < 10
                                        ? Styles.rabggreen
                                        : false
                                        }>{reportstablevalue.RV}</span>
                                </td>
                                <td className={Styles.tbodytxt}>
                                    {reportstablevalue.Grank}
                                </td>
                                <td className={Styles.tbodytxt}>
                                    <img src={grayarrow} />
                                </td>
                            </tr>  
                            )}
                        </tbody>
                    </table>
 
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Reports;