import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import nextarrow from '../../Assets/next-arrow.png';
import prevarrow from '../../Assets/prev-arrow.png';
import calandericon from '../../Assets/calender-icon.png';
import './Calanderstyles.css';

const btngrp = {
    height: '21px',
    borderRadius: '25px',
    border: '1px solid #4A4545',
}

const radius = [{ borderRadius:'25px 0 0 25px'}, { borderRadius:'0 25px 25px 0'}];

const inactive = { backgroundColor: '#E6E6E6', border: '1px solid #4A4545'};
const active = { backgroundColor: '#FD8500', border: '1px solid #4A4545'};

class Calander extends Component {
    constructor(props){
        super(props)
        this.state = {
            startDate: new Date(),
        };
    }   

    handleChange = (date, arrowdate) => {
        if(arrowdate == 'previous')
        {   
            let currentdate = new Date(date);
            let previousday = new Date(currentdate.getTime() - 24 * 60 * 60 * 1000)
            let today = previousday.getDate();
            let month = previousday.getMonth();
            let year = previousday.getFullYear();
            this.setState({
                startDate: new Date(year, month, today)
              }, () => { this.props.senddata(this.state.startDate.toString()) });
        }
        else if(arrowdate == 'next')
        {
            let currentdate = new Date(date);
            let previousday = new Date(currentdate.getTime() + 24 * 60 * 60 * 1000)
            let today = previousday.getDate();
            let month = previousday.getMonth();
            let year = previousday.getFullYear();
            this.setState({
                startDate: new Date(year, month, today)
              }, () => { this.props.senddata(this.state.startDate.toString()) });
        }
        else{
            this.setState({
                startDate: date
              }, () => { this.props.senddata(this.state.startDate.toString()) });
        }
      };

    render(){
        return(
                <div>
                    <img src={prevarrow} onClick={() => this.handleChange(this.state.startDate, 'previous')} />
                        <Datepicker selected={this.state.startDate}
                        onChange={this.handleChange}
                        dateFormat= 'dd MMM yyyy' />
                    <img src={nextarrow} onClick={() => this.handleChange(this.state.startDate, 'next')} />
                    <img src={calandericon} style={{ margin: '0 20px 0 20px'}} />
                    <div className="btn-group" style={btngrp} role="group">
                        <button type="button" style={radius[0]}><p className='caltxt'>D</p></button>
                        <button type="button" style={active}><p className='caltxt'>M</p></button>
                        <button type="button" style={radius[1]}><p className='caltxt'>Y</p></button>
                    </div>
                </div>
        )
    }

}

export default Calander;