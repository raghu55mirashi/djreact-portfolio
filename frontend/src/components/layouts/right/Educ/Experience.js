import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faCalendar } from '@fortawesome/free-solid-svg-icons'


export default class Experience extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="experience" >
                    <div className="card" style={{ boxShadow: "0 5px 11px #ccc", overflow: 'auto' }}>
                        <div className="card-header">
                            <FontAwesomeIcon icon={faTasks} />&nbsp;EXPERIENCE</div>
                        <AllExperience />
                        <AllExperience />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function AllExperience() {
    return (
        <div className="card-body" style={{ paddingBottom: 0 }}>
            <div className="header1">
                <h6><span>designation </span>- company</h6>
                <p><FontAwesomeIcon icon={faCalendar} />&nbsp;year</p>
                summary
                <h6> technologies</h6>
            </div>
            <hr />
        </div>
    );
}

