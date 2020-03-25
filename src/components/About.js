import React from 'react';

const About = () => {
    return (
        <div>
            <div className="about-image text-center">
                <img className="mx-auto" src="./assets/imgs/tsg-logo-transparent-75x75.png" alt="" />
            </div>

            <div className="jumbotron bg-transparent mx-auto text-center text-light w-50">
                <h1 className="display-4">ABOUT US</h1>
                <p className="">We are Toxic Shatter Gaming, a gaming community full of friends and inside jokes from all over the world. </p>
                <p>The community enjoys playing a plethora of different games; from popular FPS to some smaller titles as well. Including games like, Ruiner, Stellaris, Terraria, State of Decay, Subnautica, Moonlighter, Diablo 3, Project Darwin, etc</p>
                <p>As a community we love to squad up in anything and everything in and outside of the examples given above. We like to have fun with competition in mind but enjoy gaming to just game</p>
                <a className="btn btn-outline-success btn-lg mt-5" href="./team.html" role="button">See Team</a>
            </div>
        </div>
    )
}

export default About;