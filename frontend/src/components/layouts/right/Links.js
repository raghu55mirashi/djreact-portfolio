import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'


export default function Links() {
    return (
        <React.Fragment>
            <div className="mylinks" >
                <div className="card" style={{ boxShadow: "0 5px 11px #ccc" }}>
                    <div className="card-header mylink-header">
                        <FontAwesomeIcon icon={faLink} />&nbsp;LINKS</div>
                    <div className="card-body" style={{ textAlign: 'center', paddingTop: '50px' }}>

                        <SocialIcon url="https://linkedin.com/" />{' '}

                        <SocialIcon url="https://facebook.com/" />{' '}

                        <SocialIcon url="https://github.com/" />{' '}

                        <SocialIcon url="https://instagram.com/" />{' '}

                        <SocialIcon url="https://stackoverflow.com/" />
                        <br /><br />
                        <hr style={{ width: '150px' }}></hr>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
