import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
             {/* <!-- footer --> */}
             <footer className="py-5">
                <div className="container py-md-3">
                    <div className="row footer-grids">
                        <div className="col-lg-4 footer-grid-left mb-lg-0 mb-4">
                            <h2><a href="index.html"><i className="fa fa-paint-brush"></i>Vecto Pixel</a></h2>
                            <p className="mt-3">অপেক্ষা হলো শুদ্ধতম ভালোবাসার একটি চিহ্ন। সবাই ভালোবাসি বলতে পারে। কিন্তু সবাই অপেক্ষা করে সেই ভালোবাসা প্রমাণ করতে পারে না। </p>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-grid-middle">
                            <h4>About Vecto Pixel</h4>
                            <p>সবাই তোমাকে কষ্ট দিবে, তোমাকে শুধু এমন একজন কে খুঁজে নিতে হবে যার দেয়া কষ্ট তুমি সহ্য করতে পারবে</p>
                        </div>
                        <div className="col-lg-4 col-md-6 subscribe-grid mt-md-0 mt-4">
                            <h4> Connect & subscribe </h4>
                            <div className="social mb-4 text-center">
                                <ul className="d-flex justify-content-center">
                                    <li className="mr-2"><a href="#facebook"><span className="fa fa-facebook-f"></span></a></li>
                                    <li className="mx-sm-2 mr-2"><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
                                    <li className="mx-sm-2 mr-2"><a href="#unknown"><span className="fa fa-rss"></span></a></li>
                                    <li className="mx-sm-2 mr-2"><a href="#linkdin"><span className="fa fa-linkedin-in"></span></a></li>
                                    <li className="mx-sm-2 mr-2"><a href="#googleplus"><span className="fa fa-google-plus"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright mt-5">
                        <p className="text-center">© 2020 Vecto Pixel | Developed by <a href="http://github.com/Touhid-CSE"> Think Diffrent </a></p>
                    </div>
                </div>
            </footer>
            {/* <!-- //footer --> */}
        </div>
    )
}
