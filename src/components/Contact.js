import React from 'react';

const Contact = () => {
    return (
        <div>
            <form className="form col-lg-4 col-sm-10 mx-auto text-center">
                <h2 className="contact-title m-5">CONTACT US</h2>
                <div className="form-group row">
                    <div className="w-100">
                        <input type="text" className="form-control bg-transparent btn-outline-success" placeholder="Your Discord Username Here..." />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="w-100">
                        <input type="text" className="form-control bg-transparent btn-outline-success" placeholder="Your Email Here..." />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="w-100">
                        <textarea className="form-control bg-transparent btn-outline-success" name="" id="" cols="100" rows="10" placeholder="Enter message here..."></textarea>
                    </div>
                </div>
                <button className="btn btn-outline-success">Submit</button>
            </form>
        </div>
    )
}

export default Contact;