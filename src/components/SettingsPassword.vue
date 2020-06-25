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
                <li class="bg-sky nav-item py-2">
                    <router-link to="/settings" class="app-menu_item nav-link color-black">
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
                    <div class="col-12">
                        <div class="card mx-auto border shadow">
                            <div class="card-body">
                                <div class="card-title font-weight-bold reset-margin pb-3 px-4 border-bottom d-flex justify-content-start">
                                    <router-link to="/settings" class="color-deep-gray mr-5">Security</router-link>
                                    <router-link to="/settings-password" class="color-deep-gray line-rule-sm mr-5">Password</router-link>
                                    <router-link to="/settings-verification" class="color-deep-gray mr-5">Verification</router-link>
                                </div>
                                <div class="row color-deep-gray">
                                    <div class="col-4 border-right mt-4">
                                        <h6 class="color-blackish-gray font-weight-bold">Change Password</h6>
                                        <form class="px-2">
                                            <div class="row my-4">
                                                <div class="col pr-2">
                                                    <label for="current_password" class="custom-label">Current Passowrd</label>
                                                    <input type="password" class="form-control rounded-pill font-half px-4 border-0 bg-color-gray" id="current_password">
                                                </div>
                                                <div class="col pr-2">
                                                    <label for="new_password" class="custom-label">New Password</label>
                                                    <input type="password" class="form-control rounded-pill font-half px-4 border-0 bg-color-gray" id="new_password">
                                                </div>
                                            </div>
                                            <div class="row my-4">
                                                <div class="col pr-2">
                                                    <label for="confirm_password" class="custom-label">Confirm Password</label>
                                                    <input type="password" class="form-control rounded-pill font-half px-4 border-0 bg-color-gray" id="confirm_password">
                                                </div>
                                                <div class="col pr-2">
                                                    <label for="secret_code" class="custom-label">Secret Code</label>
                                                    <input type="text" class="form-control rounded-pill font-half px-4 border-0 bg-color-gray" id="secret_code">
                                                </div>
                                            </div>
                                            <div class="form-group my-4">
                                                <label for="secure_question" class="custom-label">Security Question</label>
                                                <input type="text" class="form-control rounded-pill font-half border-0 bg-color-gray" id="secure_question">
                                            </div>
                                            <button type="submit" class="btn mybtn bg-main-color color-white mybtn:hover my-4 px-5 py-1">Submit</button>
                                        </form>
                                    </div>
                                    <div class="col-8 mt-4 px-4 font-sm">
                                        <h6 class="font-weight-bold">Security Tips</h6>
                                        <p class="mb-0">Kindly Ensure you secure your account with 2FA</p>
                                        <p>Kindly Ensure you secure your account with a PIN for</p>
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
