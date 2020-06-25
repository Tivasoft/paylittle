/* eslint-disable */

<template>
    <div class="app sidebar-mini">
        <header class="app-header bg-color-white">
            <router-link to="/" class="app-header_logo">
                <img src="../assets/img/logo_paylittle@2x.png" class="d-inline-block nav-bar-img" alt="" loading="lazy">
            </router-link>
            <button class="app-sidebar_toggle border-0" data-toggle="sidebar" aria-label="Hide Sidebar">
                <span class="fa fa-bars color-black font-semi-lg"></span>
            </button>
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
                <li class="bg-sky py-2 mx-auto">
                    <router-link to="/dashboard" class="nav-link color-black app-menu_item">
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
                <li class="nav-item py-2">
                    <router-link to="/properties" class="nav-link app-menu_item color-white">
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
                    <div class="col-md-8 mb-5">
                        <div class="bg-sky mb-5 shadow">
                            <div class="d-flex justify-content-around py-4 px-auto font-weight-bolder">
                                <div class="text-center">
                                    <span class="d-block text-left">My Balance</span>
                                    <span class="d-block font-lg">200.65<sup class="pl-3 font-sm">PYL</sup></span>
                                </div>
                                <router-link to="/buy-coin" class="color-black text-center">
                                    <i class="fas fa-arrow-right d-block py-2"></i>
                                    <span class="d-block">Buy</span>
                                </router-link>
                                <router-link href="" class="color-black text-center">
                                    <i class="fas fa-id-card-alt d-block py-2"></i>
                                    <span class="d-block">Sell</span>
                                </router-link>
                                <router-link>
                                    <a href="#" class="color-black text-center" data-toggle="modal" data-target="#send-modal">
                                        <i class="fas fa-paper-plane d-block py-2"></i>
                                        <span class="d-block">Send</span>
                                    </a>
                                </router-link>
                                <router-link href="" class="text-decoration-none color-black text-center">
                                    <i class="fas fa-expand-alt d-block py-2"></i>
                                    <span class="d-block">Receive</span>
                                </router-link>
                                <router-link to="/wallet" class="text-decoration-none color-black text-center">
                                    <i class="fas fa-wallet d-block py-2"></i>
                                    <span class="d-block">Wallet</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="card shadow">
                            <div class="card-body container-fluid">
                                <div id="line_top_x"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border shadow">
                            <div class="card-body">
                                <h5 class="card-title py-3 text-left border-bottom">Recent Activity</h5>
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <tr class="d-flex justify-content-between py-2">
                                                <td class="">
                                                    <span class="d-block font-xm color-green font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm">10th Apr 2010</span>
                                                </td>
                                                <td class="">
                                                    <span class="d-block font-sm color-green font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-green font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-green font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-green font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-green font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-tomato font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-tomato font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-tomato font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-tomato font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-green font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-green font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="d-flex">
                                        <router-link to="/notifications" class="mybtn main-color text-decoration-none mx-auto font-normal py-2">VIEW MORE</router-link>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <!-- send modal section -->
                <div class="modal fade bg-dark-gray" id="send-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                    aria-hidden="true">
                    <div class="d-flex flex-column flex-md-row align-items-center p-5 px-md-4 mb-3 modal-dialog modal-lg">
                        <div class="card my-3 mx-auto border shadow modal-content" style="width: 25rem;">
                          <div class="card-body">
                            <h5 class="card-title font-weight-bold pb-3 border-bottom">Send PY</h5>
                            <form class="px-3">
                                <div class="form-group mb-2">
                                    <label for="pyl-amount" class="font-sm">Amount(PYL)</label>
                                    <input type="email" id="pyl-amount" class="form-control rounded-pill border-0 font-half px-4 bg-color-gray">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="pyl-address" class="font-sm">Address</label>
                                    <input type="email" id="pyl-address" class="form-control rounded-pill border-0 font-half px-4 bg-color-gray">
                                </div>
                                <div class="d-flex justify-content-between font-sm mb-2">
                                    <span>Fee:</span>
                                    <span>0.98866 PYL</span>
                                </div>
                                <div class="d-flex justify-content-between font-sm mb-3">
                                    <span>Total:</span>
                                    <span>19.00 PYL</span>
                                </div>
                                <div class="d-flex">
                                    <a href="#" data-toggle="modal" data-target="#send-modal-2" class="mybtn btn-block badge badge-pill bg-main-color color-white mx-auto py-2 mb-2">Next</a>
                                </div>
                            </form>
                          </div>
                        </div>
                    </div>
                </div>
                <!-- send modal section 2 -->
                <div class="modal fade bg-dark-gray" id="send-modal-2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                    aria-hidden="true">
                    <div class="d-flex flex-column flex-md-row align-items-center p-5 px-md-4 mb-3 modal-dialog modal-lg">
                        <div class="card my-3 mx-auto border shadow modal-content" style="width: 25rem;">
                          <div class="card-body">
                            <h5 class="card-title font-weight-bold pb-3 border-bottom">Send PYL Confirmation</h5>
                            <form class="px-3">
                                <div class="d-flex justify-content-between font-sm mb-2">
                                    <span>Amount:</span>
                                    <span>17.09 PYL</span>
                                </div>
                                <div class="d-flex justify-content-between font-sm mb-3">
                                    <span>Address:</span>
                                    <span>Jcbdcjknbwdkjcnjdkbcjdkjcj</span>
                                </div>
                                <div class="d-flex justify-content-between font-sm mb-2">
                                    <span>Fee:</span>
                                    <span>0.98866 PYL</span>
                                </div>
                                <div class="d-flex justify-content-between font-sm mb-3">
                                    <span>Total:</span>
                                    <span>19.00 PYL</span>
                                </div>
                                <p class="font-xm mb-2">Kindly enter your password below to complete this transaction.</p>
                                <div class="form-group mb-3">
                                    <label for="pyl-password" class="font-sm">Enter your password</label>
                                    <input type="password" id="pyl-password" class="form-control rounded-pill border-0 font-half px-4 bg-color-gray">
                                </div>
                                <div class="d-flex">
                                    <router-link to="/dashboard" class="mybtn btn-block badge badge-pill bg-main-color color-white mx-auto py-2 my-3">Send</router-link>
                                </div>
                            </form>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
