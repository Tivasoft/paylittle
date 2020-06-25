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
                                <router-link class="nav-link main-color my-nav-btn d-inline-block bg-white px-4" to="/purchases">PURCHASES</router-link>
                            </li>
                            <li class="nav-item mr-4">
                                <router-link class="nav-link color-white px-4" to="/about">ABOUT US</router-link>
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
                    <h1 class="h1-responsive font-weight-bold mt-sm-5 pt-5 pl-5 ml-5 mt-5 color-white">Purchases</h1>
                </div>
            </header>
        </div>
    </div>
</template>
