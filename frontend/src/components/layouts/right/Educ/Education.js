import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export default class Education extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="education">
                    <div className="card" style={{ boxShadow: "0 5px 11px #ccc", overflow: 'auto' }}>
                        <div className="card-header"><FontAwesomeIcon icon={faGraduationCap} />&nbsp;EDUCATION</div>
                        <AllEducation />
                        <AllEducation />
                        <AllEducation />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function AllEducation() {
    return (
        <div className="card-body" style={{ paddingBottom: "0" }}>
            <div className="header1">
                <h6><span>BE </span>- Computers</h6>
                <p><i className="far fa-calendar"></i>&nbsp;2015</p>
                Completed my BE |  from
                                <h6>VT university</h6>
            </div>
            <hr />
        </div>
    );
}