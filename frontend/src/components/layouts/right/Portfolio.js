import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faCogs } from '@fortawesome/free-solid-svg-icons'

export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="about" style={{ overflow: "auto", backgroundColor: 'transparent' }} >
                    <h1>
                        MY&nbsp;<span>PORTFOLIO</span>
                    </h1>
                    <hr style={{ width: "200px" }} />


                    <Projects />
                    <Projects />
                    <Projects />
                    <Projects />

                </div>
            </React.Fragment>
        )
    }
}

function Projects() {
    return (
        <div className="card" style={{ marginBottom: "15px", boxShadow: "0 5px 11px #ccc" }}>
            <div className="card-header" style={{ paddingBottom: 0, paddingTop: "5px" }}>

                <h5>project_name</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="project-img">
                            <img src="images" alt="no png" height="190px" width="270px" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <table>
                            <tr>
                                <td>
                                    <p>
                                        <FontAwesomeIcon icon={faUser} />&nbsp;<b>Client:</b>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <FontAwesomeIcon icon={faClock} /><b> Duration:</b>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <FontAwesomeIcon icon={faCogs} /><b> Technologies: </b>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="port-btn">
                                        <a className="btn  btn1" style={{ backgroundColor: "#000", color: '#fff' }} href="#">Preview</a>
                                    </div>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Modalpop() {
    return (
        <div className="modal myModal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal</h4>
                        <button className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">

                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-danger" data-dismiss="modal">close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

