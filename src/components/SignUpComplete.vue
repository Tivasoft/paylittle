<template>
    <div class="main-wrapper full-vh">
        <header>
            <nav class="navbar navbar-expand-lg bg-white px-5 nav nav-pills d-flex justify-content-between border-bottom shadow-sm">
                <router-link to="/" class="navbar-brand pl-5">
                    <img src="../assets/img/logo_paylittle@2x.png" class="d-inline-block align-top nav-bar-img" alt="" loading="lazy">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav d-flex justify-content-center ml-auto mr-auto text-uppercase">
                        <li class="nav-item active mr-4">
                            <router-link to="/" class="nav-link main-color">HOME</router-link>
                        </li>
                        <li class="nav-item mr-4">
                            <router-link to="/purchases" class="nav-link main-color">PURCHASES</router-link>
                        </li>
                        <li class="nav-item mr-4">
                            <router-link to="/about" class="nav-link main-color">ABOUT US</router-link>
                        </li>
                        <li class="nav-item mr-4">
                            <router-link to="/contact" class="nav-link main-color">CONTACT US</router-link>
                        </li>
                    </ul>
                    <div class="my-2 pr-5 my-lg-0">
                        <router-link to="/login" class="btn btn-outline-light bg-main-color my-2 mr-1 my-sm-0 mybtn">LOGIN</router-link>
                        <router-link to="/sign-up" class="btn btn-outline-success main-color bg-white my-2 my-sm-0 mybtn-sm">SIGN UP</router-link>
                    </div>
                </div>
            </nav>
        </header>
        <div class="d-flex flex-column flex-md-row align-items-center p-5 px-md-4 mb-3">
            <div class="card my-3 mx-auto border shadow" style="width: 20rem;">
              <div class="card-body">
                <h5 class="card-title py-3">
                    <router-link to="/sign-up" class="text-decoration-none pl-3">
                        <i class="fa fa-icon-2 fa-chevron-circle-left" aria-hidden="true"></i>
                    </router-link>
                    <span class="pl-5 font-weight-bold">Join us</span>
                  </h5>
                <form class="px-3">
                  <div class="form-group mb-4">
                    <input type="email" class="form-control rounded-pill border-0 font-half px-4 bg-color-gray" placeholder="Full Name">
                  </div>
                  <div class="form-group mb-4">
                        <select class="custom-select form-control rounded-pill border-0 font-half px-4 bg-color-gray" id="inputGroupSelect01">
                            <option selected>...Select Country...</option>
                            <option value="1">Afghanistan</option>
                            <option value="2">Albania</option>
                            <option value="3">Algeria</option>
                        </select>
                  </div>
                    <div class="form-group mb-4">
                        <input type="email" class="form-control rounded-pill border-0 font-half px-4 bg-color-gray" placeholder="Referral Code">
                    </div>
                    <div class="d-flex">
                        <router-link to="/dashboard" class="mybtn btn-block badge badge-pill bg-main-color color-white mx-auto py-2" >Register</router-link>
                    </div>
                    <div class="my-4">
                        <p class="line-divider text-center"><span>OR</span></p>
                    </div>
                    <div class="d-flex justify-content-around my-2">
                        <a href="facebook.com" target="blank" class="btn bg-color-fb my-sm-0 mybtn-sm d-flex justify-content-around mr-1">
                            <img src="../assets/svg/facebook.svg" class="pr-2 svg-icon-fb"/>
                            <span class="font-weight-bold font-sm color-white">Facebook</span>
                        </a>
                        <a href="gmail.com" target="blank" class="btn bg-white my-2 my-sm-0 my-gmail-btn d-flex ml-1" type="submit">
                            <img src="../assets/svg/gmail.svg" class="pr-2 svg-icons">
                            <span class="font-weight-bold font-sm">Gmail</span>
                        </a>
                    </div>
                    <p class="text-center pt-3 font-sm">
                        <span class="pr-2">Already a member?</span>
                        <router-link to="/login" class="font-weight-bold custom-link">Sign in</router-link>
                    </p>
                </form>
              </div>
            </div>
        </div>
    </div>
</template>
