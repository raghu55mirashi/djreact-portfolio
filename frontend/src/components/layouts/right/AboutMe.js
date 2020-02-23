import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faUser } from '@fortawesome/free-solid-svg-icons'

export default class AboutMe extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card about ab" style={{ boxShadow: "0 5px 11px #ccc" }}>
                    <h1>
                        ABOUT <span>ME</span>
                    </h1>
                    <hr style={{ width: "150px", margin: "0 auto" }} /><br />
                    <h4><FontAwesomeIcon icon={faUser} />&nbsp;PERSONAL INFO</h4>
                    <p>
                        Summary
                    </p>
                    <table className="table table-responsive">
                        <tr>
                            <td>
                                <p>
                                    <b> First Name:</b> Raghu
                                </p>
                            </td>
                            <td>
                                <p>
                                    <b> Phone Number:</b> 4545454
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <b> Last Name:</b> Mirashi
                                </p>
                            </td>
                            <td>
                                <p>
                                    <b> Address:</b> address
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <b>Date of Birth:</b> 343433
                                </p>
                            </td>
                            <td>
                                <p>
                                    <b> Email:</b> email
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <b> Nationality:</b> nationality
                                </p>
                            </td>
                            <td>
                                <p>
                                    <b> Spoken Languages:</b> lang
                                </p>
                            </td>
                        </tr>
                    </table>

                    <div className="about-btn">
                        <a className="btn  btn1" href="https://learn-byweb.blogspot.com/" style={{ padding: "6px 15px", marginBottom: "-5px", backgroundColor: 'black', color: '#fff' }}>
                            <FontAwesomeIcon icon={faBlog} />&nbsp;My Blog </a>
                    </div>
                    <br />
                </div>
            </React.Fragment>
        );
    }
}