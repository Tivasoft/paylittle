<template>
    <div class="app sidebar-mini">
        <header class="app-header bg-color-white">
            <router-link to="/" class="app-header_logo">
                <img src="../assets/img/logo_paylittle@2x.png" class="d-inline-block nav-bar-img" alt="" loading="lazy">
            </router-link>
            <a class="app-sidebar_toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar">
                <span class="fa fa-bars color-black font-semi-lg"></span>
            </a>
            <ul class="app-nav">
                <li class="dropdown">
                    <a href="#" class="app-nav_item" data-toggle="dropdown" aria-label="Open Menu">
                        <img src="../assets/img/bell_alert@2x.png" style="width: 1.5rem" />
                    </a>
                    <ul class="dropdown-menu settings-menu dropdown-menu-right">
                        <li>
                            <a href="#" class="dropdown-item">You just purchased 10.0 PYL</a>
                        </li>
                        <li>
                            <a href="#" class="dropdown-item pt-2">You just bought a property</a>
                        </li>
                        <li>
                            <a href="#" class="dropdown-item pt-2">You just received 10.0 PYL</a>
                        </li>
                        <li>
                            <div class="d-flex overflow-hidden py-3">
                                <router-link to="/notifications" class="btn mybtn mx-auto">VIEW MORE</router-link>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="dropdown pl-5">
                    <a href="#" class="app-nav_item" data-toggle="dropdown" aria-label="Open Menu">
                        <img src="../assets/img/funny-png-avatar-2@2x.png" style="width: 1.5rem"/>
                    </a>
                    <ul class="dropdown-menu settings-menu dropdown-menu-right">
                        <li>
                            <router-link to="/profile" class="dropdown-item">Profile</router-link>
                        </li>
                        <li>
                            <router-link to="/settings" class="dropdown-item">Settings</router-link>
                        </li>
                        <li>
                            <router-link to="/wallet" class="dropdown-item">Wallet</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </header>
        <aside class="app-sidebar bg-main-color">
            <ul class="app-menu text-center">
                <li class="py-2 mx-auto">
                    <router-link to="/dashboard" class="nav-link color-white app-menu_item">
                        <i class="fas fa-home icon-font"></i>
                        <span class="d-block font-sm font-weight-bold">Dashboard</span>
                    </router-link>
                </li>
                <li class="nav-item py-2">
                    <router-link to="/wallet" class="app-menu_item nav-link color-white">
                        <i class="fas fa-wallet icon-font"></i>
                        <span class="d-block font-sm font-weight-bold">Wallet</span>
                    </router-link>
                </li>
                <li class="nav-item py-2">
                    <router-link to="/buy-coin" class="app-menu_item nav-link color-white">
                        <i class="fas fa-coins icon-font"></i>
                        <span class="d-block font-sm font-weight-bold">Buy Coin</span>
                    </router-link>
                </li>
                <li class="nav-item py-2">
                    <router-link to="/settings" class="app-menu_item nav-link color-white">
                        <i class="fas fa-cog icon-font"></i>
                        <span class="d-block font-sm font-weight-bolder">Settings</span>
                    </router-link>
                </li>
                <li class="bg-sky nav-item py-2">
                    <router-link to="/properties" class="nav-link app-menu_item color-black">
                        <i class="fas fa-home icon-font"></i>
                        <span class="d-block font-sm font-weight-bold">Properties</span>
                    </router-link>
                </li>
                <li class="nav-item py-2">
                    <router-link to="/profile" class="nav-link app-menu_item color-white">
                        <i class="fas fa-user icon-font"></i>
                        <span class="d-block font-sm font-weight-bold">Profile</span>
                    </router-link>
                </li>
                <li class="nav-item py-2">
                    <router-link to="/login" class="nav-link app-menu_item color-white">
                        <i class="fas fa-sign-out-alt icon-font"></i>
                        <span class="d-block font-sm font-weight-bold">Logout</span>
                    </router-link>
                </li>
            </ul>
        </aside>
        <main class="app-content">
            <div class="container-fluid">
                <div class="row mt-5">
                    <div class="col-md-8">
                        <div class="container-fluid">
                            <div class="row">
                                    <div class="col-4 relative">
                                        <img src="../assets/img/re1@2x.png" style="max-width: 100%;">
                                        <p class="absolute-text bg-white color-green px-3 py-1 font-xm-small font-weight-bold">AVAILABLE</p>
                                        <div class="bg-white shadow">
                                            <p class="text-center font-weight-bold py-2">2 bedroom Duplex</p>
                                            <div class="d-flex">
                                                <router-link to="" class="btn btn-block mybtn main-color mx-3 mb-3 font-normal font-weight-bold">VIEW</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/re1@2x.png" style="max-width: 100%;">
                                        <p class="absolute-text bg-white color-tomato px-3 py-1 font-xm-small font-weight-bold">SOLD OUT</p>
                                        <div class="bg-white shadow">
                                            <p class="text-center font-weight-bold py-2">2 bedroom Duplex</p>
                                            <div class="d-flex">
                                                <router-link to="" class="btn btn-block mybtn main-color mx-3 mb-3 font-normal font-weight-bold">VIEW</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/re1@2x.png" style="max-width: 100%;">
                                        <p class="absolute-text bg-white color-green px-3 py-1 font-xm-small font-weight-bold">AVAILABLE</p>
                                        <div class="bg-white shadow">
                                            <p class="text-center font-weight-bold py-2">2 bedroom Duplex</p>
                                            <div class="d-flex">
                                                <router-link to="" class="btn btn-block mybtn main-color mx-3 mb-3 font-normal font-weight-bold">VIEW</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-4">
                                        <img src="../assets/img/re1@2x.png" style="max-width: 100%;">
                                        <p class="absolute-text bg-white color-tomato px-3 py-1 font-xm-small font-weight-bold">SOLD OUT</p>
                                        <div class="bg-white shadow">
                                            <p class="text-center font-weight-bold py-2">2 bedroom Duplex</p>
                                            <div class="d-flex">
                                                <router-link to="" class="btn btn-block mybtn main-color mx-3 mb-3 font-normal font-weight-bold">VIEW</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/re1@2x.png" style="max-width: 100%;">
                                        <p class="absolute-text bg-white color-tomato px-3 py-1 font-xm-small font-weight-bold">SOLD OUT</p>
                                        <div class="bg-white shadow">
                                            <p class="text-center font-weight-bold py-2">2 bedroom Duplex</p>
                                            <div class="d-flex">
                                                <router-link to="" class="btn btn-block mybtn main-color mx-3 mb-3 font-normal font-weight-bold">VIEW</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <img src="../assets/img/re1@2x.png" style="max-width: 100%;">
                                        <p class="absolute-text bg-white color-green px-3 py-1 font-xm-small font-weight-bold">AVAILABLE</p>
                                        <div class="bg-white shadow">
                                            <p class="text-center font-weight-bold py-2">2 bedroom Duplex</p>
                                            <div class="d-flex">
                                                <router-link to="" class="btn btn-block mybtn main-color mx-3 mb-3 font-normal font-weight-bold">VIEW</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="col-md-4">
                        <div class="card border shadow">
                            <div class="card-body">
                                <div class="card-title py-3 text-left border-bottom">
                                    <h5>My Properties</h5>
                                </div>
                                <div class="">
                                    <div class="d-flex justify-content-between border-bottom pb-3">
                                        <img src="../assets/img/re1@2x.png" style="width: 10rem;">
                                        <div class="pr-2 pt-3">
                                            <p class="font-xm-normal font-weight-bold">2 bedroom Duplex</p>
                                            <div class="d-flex">
                                                <router-link to="" class="mybtn-sm main-color px-4 mx-auto font-normal py-2 font-weight-bold font-xm-small">VIEW</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-3">
                                        <img src="../assets/img/re1@2x.png" style="width: 10rem;">
                                        <div class="pr-2 pt-3">
                                            <p class="font-xm-normal font-weight-bold">2 bedroom Duplex</p>
                                            <div class="d-flex">
                                                <router-link to="" class="mybtn-sm main-color px-4 mx-auto font-normal py-2 font-weight-bold font-xm-small">VIEW</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-3 mb-4">
                                        <img src="../assets/img/re1@2x.png" style="width: 10rem;">
                                        <div class="pr-2 pt-3">
                                            <p class="font-xm-normal font-weight-bold">2 bedroom Duplex</p>
                                            <div class="d-flex">
                                                <router-link to="" class="mybtn-sm main-color px-4 mx-auto font-normal py-2 font-weight-bold font-xm-small">VIEW</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
