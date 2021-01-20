import React from 'react';
import PropTypes from "prop-types";
import "./Member.css";

function Member({ name, job, email, tel}){
    return (
        <div className="member">
            <img src="https://manskkp.lv/assets/images/users/default-user.png" alt="default" />
            <div className="member_data">
                <h3 className="member_name">{name}</h3>
                <h3 className="member_job">{job}</h3>
                <h3 className="email">{email}</h3>
                <h3 className="tel">{tel}</h3>
            </div>
        </div>
    );
}

Member.prototype = {
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired
}

export default Member;