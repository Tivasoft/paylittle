<template>
    <div>
        <div class="main-wrapper">
            <header class="pt-4 my-header">
                <nav class="navbar navbar-expand-lg navbar-light custom-appear px-5 nav nav-pills d-flex justify-content-between">
                    <router-link class="navbar-brand pl-5" to="/">
                        <img src="../assets/img/logo_paylittle@2x.png"
                        class="d-inline-block align-top nav-bar-img" alt="" loading="lazy">
                    </router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav d-flex justify-content-center ml-auto mr-auto text-uppercase font-normal">
                            <li class="nav-item active mr-4">
                                <router-link class="nav-link color-white px-4" to="/">HOME</router-link>
                            </li>
                            <li class="nav-item mr-4">
                                <router-link class="nav-link color-white px-4" to="/purchases">PURCHASES</router-link>
                            </li>
                            <li class="nav-item mr-4">
                                <router-link class="nav-link color-white px-4" to="/about">ABOUT US</router-link>
                            </li>
                            <li class="nav-item mr-4">
                                <router-link class="nav-link main-color my-nav-btn d-inline-block bg-white px-4" to="/contact">CONTACT US</router-link>
                            </li>
                        </ul>
                        <div class="my-2 pr-5 my-lg-0">
                            <router-link to="/login" class="btn color-white my-2 mr-1 my-sm-0 font-normal">LOGIN</router-link>
                            <router-link to="/sign-up" class="btn color-white my-2 my-sm-0 font-normal">SIGN UP</router-link>
                        </div>
                    </div>
                </nav>
                <div class="black-color-overlay"></div>
                <div class="col-md-6 text-md-left pt-4  wow fadeInLeft" data-wow-delay="0.3s">
                    <h1 class="h1-responsive font-weight-bold mt-sm-5 pt-5 pl-5 ml-5 mt-5 color-white">Contact us</h1>
                </div>
            </header>
            <!--contents-->
            <div class="container-fluid">
                <div class="d-flex flex-wrap flex-fill justify-content-center align-items-center py-5 px-5 mb-5 text-center">
                    <div class="col-sm-4 flex-fill">
                        <div class="card py-5 my-1">
                            <i class="card-img-top fa-icon fas fa-map-marker lead text-center color-main" aria-hidden="true"></i>
                          <div class="card-body">
                            <h6 class="card-title font-weight-bold">VISIT OUR OFFICE</h6>
                            <p class="card-text px-5 font-normal pt-4">No 17B market road, Rumuekini, Port Harcourt, Rivers State</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-sm-4 flex-fill">
                        <div class="card py-5 my-1">
                            <i class="card-img-top fa-icon fa fa-heart lead text-center color-main" aria-hidden="true"></i>
                          <div class="card-body">
                            <h6 class="card-title font-weight-bold">CALL US</h6>
                            <p class="card-text px-5 font-normal pt-4">Phone: (+234) 9033245432 <br/>Phone: (+234) 813345623 <br/>Fax: 123 456 789</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-sm-4 flex-fill">
                        <div class="card py-5 my-1">
                            <i class="card-img-top fa-icon fa fa-envelope" aria-hidden="true"></i>
                          <div class="card-body">
                            <h6 class="card-title font-weight-bold">EMAIL US</h6>
                            <p class="card-text px-5 font-normal pt-4">info@paylittlehomes .com <br/>www.paylittleico.com</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="text-center mx-auto py-4">
                <h6 class="font-weight-bold pb-4">For More Information</h6>
                <p class="font-weight-normal">We are available 24 hours everyday throughout the week, through E-mail and phone, <br/>you can also visit our office as the address is provided. You can also ask questions about <br>our services through the contact form provided below.</p>
            </div>
            <div class="container-fluid row d-flex justify-content-center my-5 mx-auto">
                <div class="col-sm-4 px-4 mt-5 mb-3">
                    <form py-2 px-4>
                        <div class="form-group pb-5">
                            <input type="text" placeholder="Your Full Name" class="form-control rounded-pill bg-color-gray px-4 font-half">
                        </div>
                        <div class="form-group pb-5">
                            <input type="text" placeholder="Phone Number" class="form-control rounded-pill bg-color-gray px-4 font-half">
                        </div>
                        <div class="form-group pb-3">
                            <input type="text" placeholder="Email" class="form-control rounded-pill bg-color-gray px-4 font-half">
                          </div>
                    </form>
                </div>
                <div class="col-sm-4 px-4 mt-5 mb-3">
                    <form py-2 px-4>
                        <div class="form-group mb-5">
                            <textarea cols="40" rows="5" class="form-control rounded bg-color-gray" placeholder="Message">
                            </textarea>
                        </div>
                        <a href="#" type="submit" class="mybtn btn-block main-color text-decoration-none text-center">Send Message</a>
                    </form>
                </div>
                <div class="col-sm-4 px-4 mb-3">
                    <img src="../assets/svg/pl-about-img-2.42394cf9.svg" alt="About image">
                </div>
            </div>
        </div>
        <footer>
            <div class="my-footer">
                <div class="container-fluid my-auto">
                    <div class="mx-5 pt-2 position-relative">
                        <div class="my-5 bg-white zoom_out">
                           <div class="row px-3">
                                <div class="col-sm-6 row px-3">
                                    <div class="col-sm-4">
                                        <h6 class="font-weight-bold py-4">HELP</h6>
                                        <div class="font-sm">
                                            <span class="d-block">Purchase Status</span>
                                            <span class="d-block">consultation and inquiries</span>
                                            <span class="d-block">Returns</span>
                                            <span class="d-block">Payment Options</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <h6 class="font-weight-bold py-4">INFORMATION</h6>
                                        <div class="font-sm">
                                            <span class="d-block">About Us</span>
                                            <span class="d-block">Contact Us</span>
                                            <span class="d-block">+234-</span>
                                            <span class="d-block">+234- </span>
                                            <span class="d-block">Contact@paylittle.com</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <h6 class="font-weight-bold py-4">OTHERS</h6>
                                        <div class="font-sm">
                                            <span class="d-block">Company Overview</span>
                                            <span class="d-block">Made in Nigeria</span>
                                            <span class="d-block">updates</span>
                                            <span class="d-block">Discount / Coupons</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 px-3">
                                    <div class="">
                                        <div class="pl-5">
                                            <h6 class="font-weight-bold py-4">UPDATES</h6>
                                            <span class="d-block font-sm">To get our regular updates</span>
                                        </div>
                                        <form class="pt-2 d-flex justify-content-around">
                                            <div class="form-group">
                                                <input type="email" class="form-control -sm rounded-pill bg-color-gray" placeholder="Email Address">
                                            </div>
                                            <a href="#" class="btn subscribe-btn btn-outline-success bg-color-green color-white rounded-pill px-5" >SUBSCRIBE</a>
                                        </form>
                                    </div>
                                    <div class="flex justify-content-around pl-5">
                                        <a href="">
                                            <img src="../assets/svg/002-facebook-logo.svg" class="pr-3">
                                        </a>
                                        <a href="">
                                            <img src="../assets/svg/001-twitter-logo-silhouette.svg" class="pr-3">
                                        </a>
                                        <a href="">
                                            <img src="../assets/svg/004-linkedin-logo.svg" class="pr-3">
                                        </a>
                                        <a href="">
                                            <img src="../assets/svg/instagram.svg" class="pr-3">
                                        </a>
                                        <a href="">
                                            <img src="../assets/svg/005-youtube.svg" class="pr-3">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="row py-4 px-4 mt-5">
                                <div class="col-sm-8 row">
                                    <div class="col-sm-3">
                                        <h6 class="font-normal font-weight-bold py-3">
                                            <router-link class="color-black" to="/contact">CONTACT</router-link>
                                        </h6>
                                    </div>
                                    <div class="col-sm-6 row">
                                        <div class="col-sm-6">
                                            <h6 class="font-normal font-weight-bold py-3">
                                                <router-link class="color-black" to="/privacy-policy">PRIVACY POLICY</router-link>
                                            </h6>
                                        </div>
                                        <div class="col-sm-6">
                                            <h6 class="font-weight-bold font-normal py-3">PORTFOLIO</h6>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <h6 class="font-weight-bold py-3 font-normal">WEB MAP</h6>
                                    </div>
                                </div>
                                <div class="col-sm-4 d-flex justify-content-between">
                                    <a href="#">
                                        <img src="../assets/svg/google-play-badge.svg">
                                    </a>
                                    <a href="#">
                                        <img src="../assets/svg/download-on-the-app-store-apple (1).svg">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
