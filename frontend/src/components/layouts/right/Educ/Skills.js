import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="skills" style={{ boxShadow: "0 5px 11px #ccc", maxHeight: '75vh', overflow: 'auto' }}>
                    <div className="card" style={{ overflow: 'auto' }}>
                        <div className="card-header"><FontAwesomeIcon icon={faStar} />&nbsp;SKILLS</div>
                        <AllSkills />
                        <AllSkills />
                        <AllSkills />
                        <AllSkills />
                        <AllSkills />
                        <AllSkills />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function AllSkills() {
    return (
        <div className="card-body">
            <table className="table">
                <tr>
                    <td>
                        <h6>subjects</h6>
                        <p>*****</p>
                    </td>
                    <td>
                        <h6>subjects</h6>
                        <p>**</p>
                    </td>
                    <br />
                </tr>
            </table>
        </div>
    );
}