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
            <div class="card my-5 mx-auto border shadow" style="width: 20rem;">
              <div class="card-body">
                <h5 class="card-title py-3 font-weight-bold text-center mb-4">
                    Account Verification
                  </h5>
                <form class="px-3">
                  <div class="form-group mb-4">
                    <input type="email" class="form-control rounded-pill border-0 font-half px-4 bg-color-gray" placeholder="Code">
                  </div>

                    <div class="form-group mb-4">
                        <router-link to="/password-reset-change" class="mybtn btn-block badge badge-pill bg-main-color color-white mx-auto py-2">Verify account</router-link>
                    </div>
                    <div class="d-flex justify-content-between mt-2 mb-4">
                        <router-link to="/login" class="my-sm-0 text-decoration-none font-sm color-black">
                            Sign in
                        </router-link>
                        <router-link to="/sign-up" class="my-sm-0 text-decoration-none font-sm font-weight-bold color-black">
                            Sign up
                        </router-link>
                    </div>
                </form>
              </div>
            </div>
        </div>
    </div>
</template>
