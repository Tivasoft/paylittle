/* eslint-disable spaced-comment */
/* eslint-disable spaced-comment */
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
                                <router-link class="nav-link main-color my-nav-btn d-inline-block bg-white px-4" to="/about">ABOUT US</router-link>
                            </li>
                            <li class="nav-item mr-4">
                                <router-link class="nav-link color-white px-4" to="/contact">CONTACT US</router-link>
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
                    <h1 class="h1-responsive font-weight-bold mt-sm-5 pt-5 pl-5 ml-5 mt-5 color-white">About us</h1>
                </div>
            </header>
            <div class="container-fluid">
                    <div class="row bg-white py-5 px-5 mb-5">
                        <div class="col-sm-6">
                            <img src="../assets/img/Global_Cancer_Care-Illustration@2x.png" alt="Global cancer care image">
                        </div>
                        <div class="col-sm-6">
                            <h2>About PayLittle</h2>
                            <p>Paylittle is the new convenience, with paylittle, life is better and cozy. Our major target is the Real Estate in <br/>Africa, setting our compass on the Nigeria market. Nigeria is unarguably the most populous country in Africa, as well as one of the biggest economies in <br/>the continent.</p>
                            <p>Paylittle is the new convenience, with paylittle, life is better and cozy. Our major target is the Real Estate in <br/>Africa, setting our compass on the Nigeria market. Nigeria is unarguably the most populous country in Africa, as well as one of the biggest economies in <br/>the continent.</p>
                            <p class="mb-5">Paylittle is the new convenience, with paylittle, life is better and cozy. Our major target is the Real Estate in <br/>Africa, setting our compass on the Nigeria market. Nigeria is unarguably the most populous country in Africa, as well as one of the biggest economies in <br/>the continent.</p>
                            <div mt-4>
                                <router-link to="/sign-up" class="mybtn color-white bg-main-color px-5 text-decoration-none">Register</router-link>
                            </div>
                        </div>
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

<script>
export default {
  data () {
    return {
      // img: '/assets/img/Global Cancer Care - Illustration@2x.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
