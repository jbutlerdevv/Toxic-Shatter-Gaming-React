import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="card bg-transparent text-center w-50 mx-auto mt-5 p-5 main-card shadow border border-success rounded-3">
                <img src="./assets/imgs/tsg-header.png" className="card-img-top" alt="..." />
                <div className="card-body text-dark">
                    <p className="card-text">We are a gaming community full of gamers that love to just game. If you're looking for a great group of friends to squad up with, don't hesitate and join the Discord now... </p>
                    <h4><a href="https://discord.gg/Xk6JqW8" target="_blank" rel="noreferrer" className="nav-link font-weight-bold">Click this link to join</a></h4>
                </div>
            </div>



            <div id="carouselExampleCaptions" className="carousel slide carousel-fade w-75 mx-auto mt-5" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./assets/imgs/bf-1.jpg" className="d-block w-100 rounded" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ color: "black" }}>
                            <h3 className="font-weight-bold">Battlefield 5</h3>
                            <h5 className="font-weight-bold">An FPS that takes place during the second world war</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./assets/imgs/apex-1.jpeg" className="d-block w-100 rounded" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ color: "black" }}>
                            <h3 className="font-weight-bold">Apex Legends</h3>
                            <h5 className="font-weight-bold">FPS Battle Royale game that takes place in the Titanfall universe</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./assets/imgs/mw-1.jpg" className="d-block w-100 rounded" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ color: "black" }}>
                            <h3 className="font-weight-bold">Call of Duty: Modern Warfare</h3>
                            <h5 className="font-weight-bold">FPS new release of an older version of the game. Now includes Warzone which is the Battle Royale specific mode</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./assets/imgs/realm-1.png" className="d-block w-100 rounded" alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ color: "black" }}>
                            <h3 className="font-weight-bold">Realm Royale</h3>
                            <h5 className="font-weight-bold">Third-Person Battle Royale, includes classNamees like Mage, Warrior, Hunter, and Assassin</h5>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default Home;