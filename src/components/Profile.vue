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
                <li class="nav-item py-2">
                    <router-link to="/properties" class="nav-link app-menu_item color-white">
                        <i class="fas fa-home icon-font"></i>
                        <span class="d-block font-sm font-weight-bold">Properties</span>
                    </router-link>
                </li>
                <li class="bg-sky nav-item py-2">
                    <router-link to="/profile" class="nav-link app-menu_item color-black">
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
                        <div class="card shadow px-2">
                            <div class="card-body container-fluid">
                                <h4 class="border-bottom py-2 mx-4">Profile</h4>
                                <div class="flex">
                                    <form class="px-4 mx-auto">
                                        <div class="row my-4">
                                            <div class="col pr-4">
                                                <label for="first_name" class="custom-label">First Name</label>
                                                <input type="text" class="form-control rounded-pill font-half px-4 border-0 bg-color-gray" id="first_name">
                                            </div>
                                            <div class="col pr-4">
                                                <label for="last_name" class="custom-label">Last Name</label>
                                                <input type="text" class="form-control rounded-pill font-half px-4 border-0 bg-color-gray" id="last_name">
                                            </div>
                                        </div>
                                        <div class="row my-4">
                                            <div class="col pr-4">
                                                <label for="username" class="custom-label">Username</label>
                                                <input type="text" class="form-control rounded-pill font-half px-4 border-0 bg-color-gray" id="username">
                                            </div>
                                            <div class="col pr-4">
                                                <label for="email" class="custom-label">E-mail</label>
                                                <input type="text" class="form-control rounded-pill font-half px-4 border-0 bg-color-gray" id="email">
                                            </div>
                                        </div>
                                        <div class="row my-4">
                                            <div class="col pr-4">
                                                <label for="dob" class="custom-label">Date of Birth</label>
                                                <input type="text" class="form-control rounded-pill font-half px-4 border-0 bg-color-gray" id="dob">
                                            </div>
                                            <div class="col pr-4">
                                                <label for="country" class="custom-label">Country of Residence</label>
                                                <input type="text" class="form-control rounded-pill font-half px-4 border-0 bg-color-gray" id="country">
                                            </div>
                                        </div>
                                        <button type="submit" class="btn mybtn bg-main-color color-white mybtn:hover my-4 px-5 py-1">Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border shadow">
                            <div class="card-body">
                                <div class="card-title py-3 text-left border-bottom d-flex justify-content-between">
                                    <h5 class="" style="width: 25%">Referals</h5>
                                    <form class="" style="width: 75%">
                                        <div class="form-group">
                                            <input type="text" class="form-control rounded-pill border-0 font-half px-2 bg-color-gray"  placeholder="https://paylittle.io/sign-up?ref=4e">
                                            <button class="absolute-icon border-0">
                                                <i class="fas fa-copy"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="table-responsive">
                                        <table class="table table-hover font-xm-normal color-deep-gray marg-b-6">
                                            <tr class="d-flex justify-content-between pb-3 font-weight-bold ">
                                                <td>James Dave</td>
                                                <td>10/12/2020</td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-3 font-weight-bold ">
                                                <td>James Dave</td>
                                                <td>10/12/2020</td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-3 font-weight-bold ">
                                                <td>James Dave</td>
                                                <td>10/12/2020</td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-3 font-weight-bold ">
                                                <td>James Dave</td>
                                                <td>10/12/2020</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
