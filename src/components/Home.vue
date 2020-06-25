/* eslint-disable */
<template>
    <div>
        <div class="main-wrapper">
            <div class="full-vh">
                <header class="pt-4">
                    <nav class="navbar navbar-expand-lg navbar-light custom-appear px-5 nav nav-pills d-flex justify-content-between">
                        <router-link class="navbar-brand pl-5" to="/">
                            <img src="../assets/img/logo_paylittle@2x.png"
                            class="d-inline-block align-top nav-bar-img" alt="" loading="lazy">
                        </router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav d-flex justify-content-center ml-auto mr-auto text-uppercase">
                                <li class="nav-item active mr-4">
                                    <router-link class="nav-link main-color px-4" to="/">HOME</router-link>
                                </li>
                                <li class="nav-item mr-4">
                                    <router-link class="nav-link main-color px-4" to="/purchases">PURCHASES</router-link>
                                 </li>
                                <li class="nav-item mr-4">
                                    <router-link class="nav-link color-white px-4" to="/about">ABOUT US</router-link>
                                </li>
                                <li class="nav-item mr-4">
                                    <router-link class="nav-link color-white px-4" to="/contact">CONTACT US</router-link>
                                </li>
                            </ul>
                            <div class="my-2 pr-5 my-lg-0">
                                <router-link to="/login" class="bg-color-white main-color my-2 mr-1 my-sm-0 mybtn-no-border">LOGIN</router-link>
                                <router-link to="/sign-up" class="btn color-white my-2 my-sm-0 mybtn-sm">SIGN UP</router-link>
                            </div>
                        </div>
                    </nav>
                </header>
                <div class="container-fluid">
                    <div class="d-flex flex-column flex-md-row align-items-center p-5 px-md-4 row">
                        <div class="col-md-5">
                            <img src="../assets/img/landing_page_illustrate_design-removebg-preview@2x.png">
                        </div>
                        <div class="col-md-7 z-index-5">
                            <div class="d-flex padd-3 mt-5">
                                <h1 class="h1-responsive font-weight-bolder color-white mx-auto">OWN A HOME <br>TODAY</h1>
                            </div>
                            <div class="d-flex padd-3 mb-5">
                                <router-link to="/" class="bg-color-white main-color mybtn rounded-pill px-4 py-2 mx-auto">READ OUR WHITEPAPER</router-link>
                            </div>
                        </div>
                        <div class="customize-bg-container d-none d-md-block">
                            <div class="customize-bg">
                                <div class="bg-image-custom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <!-- about paylittle section -->
                <div class="container-fluid bg-white">
                    <div class="row padd-y-5 px-4">
                        <div class="col-md-8 mb-5">
                            <div class="custom-px">
                                <h4 class="span-after mb-4">ABOUT <span class="main-color font-weight-bold">PAYLITTLE</span></h4>
                                <p class="mb-5">We are the new convenience, with Paylittle, life is better and cozy. Our major target is the Real Estate in Africa, setting our compass on the Nigerian market. Nigeria is unarguably the most populous country in Africa, as well as one of the biggest economies in the continent.</p>
                                <div class="my-3">
                                    <router-link to="/about" class="mx-auto border-color-main rounded-pill main-color py-2 padd-x-3">Read More</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <div class="d-flex custom-px">
                                <img src="../assets/svg/pl-about-img.svg" class="mx-auto">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- what we are trying to solve section -->
                <div class="container-fluid bg-color-light-gray">
                    <div class="row padd-y-5 px-4">
                        <div class="col-md-6">
                            <div class="d-flex custom-px">
                                <img src="../assets/img/about_us_illustration_design-removebg-preview@2x.png" class="mx-auto">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="custom-px">
                                <div class="mb-5 d-flex justify-content-start">
                                    <div>
                                        <i class="main-color bg-white border-color-main border-radius-half shadow px-2 py-2 fas fa-exclamation-triangle"></i>
                                    </div>
                                    <h4 class="px-4">What we are trying to Solve?</h4>
                                </div>
                                <div class="mb-4 d-flex justify-content-start">
                                    <div class="my-3">
                                        <i class="fas fa-circle py-1 px-1 main-color d-block mx-auto border-color-main rounded-circle shadow-lg"></i>
                                    </div>
                                    <p class="px-4">According to the managing director of Federal Mortgage Bank of Nigeria (FMBN), the housing deficit is estimated to be between 17 to 20 million housing unit, increasing annually by 900,000 units, with a potential cost of N6 trillion [$16 Billion].</p>
                                </div>
                                <div class="mb-5 d-flex justify-content-start">
                                    <div class="my-3">
                                        <i class="fas fa-circle py-1 px-1 main-color d-block mx-auto border-color-main rounded-circle shadow-lg"></i>
                                    </div>
                                    <p class="px-4">From our study of the real estate industry in Nigeria, there might be little or no deficit in Nigera. What one would find in Urban cities is a lot of empty estate houses. These estates are enmpoty because, these houses are very expensive and do not have convenient installment payment plans</p>
                                </div>
                                <div class="my-3 ml-5">
                                    <router-link to="/about" class="mx-auto border-color-main bg-color-white rounded-pill main-color py-2 padd-x-3">Read More</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- how we are solving it section -->
                <div class="container-fluid bg-color-white">
                    <div class="row padd-y-5 px-4">
                        <div class="col-md-7">
                            <div class="custom-px">
                                <div class="mb-5 d-flex justify-content-start">
                                    <i class="fas fa-lightbulb d-block main-color bg-white border-color-main border-radius-half shadow px-2 py-2"></i>
                                <h4 class="px-4">How We Are Solving It.</h4>
                                </div>
                                <div class="mb-5 d-flex justify-content-start">
                                    <div class="my-3 d-flex align-items-center">
                                        <i class="fas fa-circle py-1 px-1 main-color d-block mx-auto border-color-main rounded-circle shadow"></i>
                                    </div>
                                    <p class="px-4">With Paylittle one can conveniently own a home and pay for the home just by trading the Paylittle Coin (PYL Coin). That is to say, an average literate Nigerian can owna home in any Paylittle Estate of his or her choice and with our monthly installment payment plan that can span up to 5 years. Paylittle promises to be the most convinient way to live in 21st century Nigeria.</p>
                                </div>
                                <div class="my-3 ml-5">
                                    <router-link to="/about" class="mx-auto border-color-main rounded-pill main-color py-2 padd-x-3">Read More</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="d-flex custom-px">
                                <img src="../assets/img/how to solve illustrate design@2x.png" class="mx-auto">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Coin Usage section -->
                <div class="container-fluid bg-color-black color-white">
                    <div class="d-flex py-5">
                        <h3 class="mx-auto">Coin Usage</h3>
                    </div>
                    <div class="custom-px d-flex justify-content-around">
                        <div class="d-flex align-items-center bg-color-white border-radius-1" style="width: 3rem; height: 3rem;">
                            <i class="fas fa-coins d-block mx-auto main-color font-lg"></i>
                        </div>
                        <hr class="bg-color-white">
                        <div class="d-flex align-items-center bg-color-white border-radius-1" style="width: 3rem; height: 3rem;">
                            <i class="fas fa-hand-pointer d-block mx-auto main-color font-lg"></i>
                        </div>
                        <hr>
                
                        <div class="d-flex align-items-center bg-color-white border-radius-1" style="width: 3rem; height: 3rem;">
                            <i class="fas fa-dollar-sign d-block mx-auto main-color font-lg"></i>
                        </div>
                    </div>
                    <div class="row padd-y-5 px-4">
                        <div class="col-md-4 mb-3 text-center">
                            <div class="custom-px">
                                <h4 class="mb-4">Coin Can Be Purchased</h4>
                                <p class="mb-5 color-white-dark">PYL can be purchased with either BTC/ETH and can also be bought and sold in exchanges</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 text-center">
                            <div class="custom-px">
                                <h4 class="mb-4">Coin Can Be Sold</h4>
                                <p class="mb-5 color-white-dark">PYL Token can only be sold to other users in exchange for PYL Coin irrespective of the current value, but to get the real value, owner has to wait till the estate project is complete.</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 text-center">
                            <div class="custom-px">
                                <h4 class="mb-4">Coin Value In USD</h4>
                                <p class="mb-5 color-white-dark">PLC can be purchased with either BTC/ETH and can also be bought and sold in exchanges</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- road map section -->
                <div class="bg-white padd-y-5">
                    <div class="shadow main-color d-inline-block custom-radius-right" style="background-color: #F5F3F3;">
                        <div class="d-inline-flex justify-content-between align-items-center font-weight-bold">
                            <div class="py-5 px-4 ml-3 mr-5 font-semi-lg">Roadmap</div>
                            <i class="fas fa-road py-5 px-4 font-lg ml-5 mr-5"></i>
                        </div>
                    </div>
                    <div clas="container-fluid">
                        <div class="adjust-margin">
                            <div class="road-map">
                                <ul class="first-ul font-weight-bold">
                                    <li class="date d-flex justify-content-start">
                                        <h1>Q3</h1>
                                        <ul class="list-square">
                                            <li>Market Analysis Initial Concept</li>
                                            <li>Paylittle Company Registered</li>
                                            <li>Development of the Basic MVP Crypto features Started</li>
                                            <li>ICO website development started</li>
                                        </ul>
                                    </li>
                                    <li class="date d-flex justify-content-start">
                                        <h1>Q4</h1>
                                        <ul class="list-square">
                                            <li>Blockchain Listener Completed</li>
                                            <li>Referral System Implemented</li>
                                            <li>ICO Website Completed</li>
                                        </ul>
                                    </li>
                                    <li class="date d-flex justify-content-start">
                                        <h1>Q1</h1>
                                        <ul class="list-square">
                                            <li>Ecosystem Planning and Development</li>
                                        </ul>
                                    </li>
                                    <div class="road-map-circle"></div>
                                    <li class="date d-flex justify-content-start">
                                        <h1>Q2</h1>
                                        <ul class="list-square">
                                            <li>ICO Website launch and announcement</li>
                                            <li>Private ICO Round</li>
                                        </ul>
                                    </li>
                                    <li class="date d-flex justify-content-start">
                                        <h1>Q3</h1>
                                        <ul class="list-square">
                                            <li>Crypto Bank Market Analysis</li>
                                            <li>Crypto Bank Infrastructure Planning</li>
                                        </ul>
                                    </li>
                                    <li class="date d-flex justify-content-start">
                                        <h1>Q4</h1>
                                        <ul class="list-square">
                                            <li>Integrated Crypto Exchange Platform Development</li>
                                            <li>Integrated Crypto Wallet Platform Development</li>
                                            <li>Ecosystem Planning and Development</li>
                                        </ul>
                                    </li>
                                    <li class="date d-flex justify-content-start">
                                        <h1>Q1</h1>
                                        <ul class="list-square">
                                            <li>ICO Website launch and announcement</li>
                                            <li>Private ICO Round</li>
                                        </ul>
                                    </li>
                                    <li class="date d-flex justify-content-start">
                                        <h1>Q2</h1>
                                        <ul class="list-square">
                                            <li>Crypto Bank Market Analysis</li>
                                            <li>Crypto Bank Infrastructure Planning</li>
                                            <li> Integrated Crypto Exchange Platform Development</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- our team section -->
                <div class="container-fluid bg-color-light-gray">
                    <div class="padd-y-5 px-4">
                        <div class="text-center">
                            <h2 class="main-color">OUR TEAM</h2>
                            <p class="color-black">Meet the amazing people behind this</p>
                        </div>
                        <div class="d-flex flex flex-wrap justify-content-between padd-y-5 px-5">
                            <div class="bg-color-white mr-2 mb-2 mb-3">
                                <div class="px-4">
                                    <div class="d-flex pt-4">
                                        <i class="fas fa-user-alt mx-auto color-light-gray" style="font-size: 7rem"></i>
                                    </div>
                                    <div class="text-center py-4">
                                        <h5>Backend Engineer</h5>
                                        <h6>Mr James B</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-color-white mr-2 mb-2 mb-3">
                                <div class="px-4">
                                    <div class="d-flex pt-4">
                                        <i class="fas fa-user-alt mx-auto color-light-gray" style="font-size: 7rem"></i>
                                    </div>
                                    <div class="text-center py-4">
                                        <h5>Backend Engineer</h5>
                                        <h6>Mr James B</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-color-white mr-2 mb-2 mb-3">
                                <div class="px-4">
                                    <div class="d-flex pt-4">
                                        <i class="fas fa-user-alt mx-auto color-light-gray" style="font-size: 7rem"></i>
                                    </div>
                                    <div class="text-center py-4">
                                        <h5>Backend Engineer</h5>
                                        <h6>Mr James B</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-color-white mr-2 mb-2 mb-3">
                                <div class="px-4">
                                    <div class="d-flex pt-4">
                                        <i class="fas fa-user-alt mx-auto color-light-gray" style="font-size: 7rem"></i>
                                    </div>
                                    <div class="text-center py-4">
                                        <h5>Backend Engineer</h5>
                                        <h6>Mr James B</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex flex-wrap justify-content-between px-5">
                            <div class="bg-color-white mr-2 mb-2 mb-3">
                                <div class="px-4">
                                    <div class="d-flex pt-4">
                                        <i class="fas fa-user-alt mx-auto color-light-gray" style="font-size: 7rem"></i>
                                    </div>
                                    <div class="text-center py-4">
                                        <h5>Backend Engineer</h5>
                                        <h6>Mr James B</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-color-white mr-2 mb-2 mb-3">
                                <div class="px-4">
                                    <div class="d-flex pt-4">
                                        <i class="fas fa-user-alt mx-auto color-light-gray" style="font-size: 7rem"></i>
                                    </div>
                                    <div class="text-center py-4">
                                        <h5>Backend Engineer</h5>
                                        <h6>Mr James B</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-color-white mr-2 mb-2 mb-3">
                                <div class="px-4">
                                    <div class="d-flex pt-4">
                                        <i class="fas fa-user-alt mx-auto color-light-gray" style="font-size: 7rem"></i>
                                    </div>
                                    <div class="text-center py-4">
                                        <h5>Backend Engineer</h5>
                                        <h6>Mr James B</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-color-white mr-2 mb-2 mb-3">
                                <div class="px-4">
                                    <div class="d-flex pt-4">
                                        <i class="fas fa-user-alt mx-auto color-light-gray" style="font-size: 7rem"></i>
                                    </div>
                                    <div class="text-center py-4">
                                        <h5>Backend Engineer</h5>
                                        <h6>Mr James B</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Frequently ask question section -->
                <div class="container-fluid bg-color-white">
                    <div class="padd-y-5 px-4">
                        <div class="custom-px">
                            <div class="text-center">
                                <h2 class="main-color">Frequently Asked Questions</h2>
                                <p class="color-black">What are the things you want to quickly know about</p>
                            </div>
                            <form class="px-4 padd-y-5">
                                <div class="row my-5">
                                    <div class="col mr-3">
                                        <select class="form-control font-half px-4 border">
                                            <option class="py-3">What is Paylittle Token Mission?</option>
                                        </select>
                                    </div>
                                    <div class="col ml-3">
                                        <select class="form-control font-half px-4 border">
                                            <option>How will Partners of Paylittle Token Benefit?</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row my-5">
                                    <div class="col mr-3">
                                        <select class="form-control font-half px-4 border">
                                            <option class="py-3">What is Paylittle Token?</option>
                                        </select>
                                    </div>
                                    <div class="col ml-3">
                                        <select class="form-control font-half px-4 border">
                                            <option>Why the Name Paylittle?</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row my-5">
                                    <div class="col mr-3">
                                        <select class="form-control font-half px-4 border">
                                            <option class="py-3">Who are the Main Players in Paylittle Token Ecosystem?</option>
                                        </select>
                                    </div>
                                    <div class="col ml-3">
                                        <select class="form-control font-half px-4 border">
                                            <option>Why does Paylittle have to use Blockchain</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- footer section -->
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
            </main>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      img: ''
    }
  }
}
</script>
