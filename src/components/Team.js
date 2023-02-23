import React from "react";
import data from "../data/members.json";

const Team = () => {
    const memberData = data.map((member, index) => (
        <div
            key={index}
            className='card m-3 p-3 bg-transparent text-light team-cards shadow'>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={member.image} className='card-img' alt='...' />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{member.name}</h5>
                        <p className='card-text'>{member.desc}</p>
                    </div>
                    <p className='card-footer text-center'>
                        Click this link to go to my twitch...
                        <a
                            className='nav-link'
                            href={member.link}
                            target='_blank'
                            rel='noopener noreferrer'>
                            Twitch Link
                        </a>
                    </p>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <h2 className='tsg-title text-center m-5'>
                Toxic Shatter Gaming Team
            </h2>

            <div className='row justify-content-around'>
                {memberData}

                {/*
                <div className="card m-3 p-3 bg-transparent text-light team-cards">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="./assets/imgs/TSG-members/viking.png" className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Viking00034</h5>
                                <p className="card-text">Viking00034 loves gaming in general in all different kinds of genres
                                including some titles like Dead by Daylight, COD Modern Warfare, Realm Royale, The Evil
                            Within, Resident Evil, Overwatch, and many more</p>
                            </div>
                            <p className="card-footer text-center">Click this link to go to his twitch...
                        <a className="nav-link" href="https://www.twitch.tv/viking00034" target="_blank">Twitch
                            Link</a>
                            </p>

                        </div>
                    </div>
                </div> */}

                {/* Container DIV */}
            </div>
            {/* Parent DIV */}
        </div>
    );
};

export default Team;
