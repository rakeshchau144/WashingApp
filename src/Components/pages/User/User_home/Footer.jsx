import React from 'react'
import "./footer.css";
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <>
            <footer className="bg-slate-50 text-slate-700 mt-6 footer">
                <div className="container">
                    <div className="footerMain">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h4 className="font-bold text-sm mb-2">Company Info</h4>
                            <div className='textDecoration mt-4'>
                                <div>
                                    <Link to="/about" className='home'>About Us</Link>
                                </div><div>
                                    <Link to="/contact_us" className='home'>Contact Us</Link>
                                </div><div>
                                    <Link to="/" className='home'>Privacy Policy </Link>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h4 className="font-bold text-lg mb-2">Support</h4>
                            <div className='textDecoration mt-4'>
                                <div>
                                    <Link to="/" className='home'>FAQs</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h4 className="font-bold text-lg mb-2">Newsletter</h4>
                            <p>Car Washing updated with our latest trends</p>
                            <form >
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="rounded"
                                />
                                <button className="btn btn-lg btn-primary sizeBTN">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <p>Book your date for Car Washing Center</p>
                        <p>
                            &copy; {new Date().getFullYear()}  All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
