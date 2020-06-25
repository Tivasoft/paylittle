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
                    <div class="col-12">
                        <div class="card mx-auto border shadow">
                            <div class="card-body">
                                <div class="card-title font-weight-bold reset-margin pb-3 px-4 border-bottom">
                                    <h5 class="color-deep-gray">Notifications</h5>
                                </div>
                                <div class="row mt-0 color-deep-gray">
                                    <div class="col-12">
                                        <div class="px-4 pb-3 border-bottom reset-margin">
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">You Bought 10 PLY</span>
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">10th Apr 2010</span>
                                        </div>
                                        <div class="mb-1 px-4 py-3 border-bottom reset-margin">
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">You made a transfer of 11 PYL to ud438fhjio34hnfinr4jngfjknkjrngkvjnkrtgn</span>
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">10th Apr 2010</span>
                                        </div>
                                        <div class="px-4 py-3 border-bottom reset-margin">
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">You added an external address jkvnejkrnkvelnrmvklermvklnjefnvjnrktjvwnklre</span>
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">10th Apr 2010</span>
                                        </div>
                                        <div class="mb-1 px-4 py-3 border-bottom reset-margin">
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">You bought 11.4 PYL</span>
                                        <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">10th Apr 2010</span>
                                        </div>
                                        <div class="mb-1 px-4 py-3 border-bottom reset-margin">
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">You paid for a property with 23 PYL</span>
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">10th Apr 2010</span>
                                        </div>
                                        <div class="mb-3 px-4 py-3 border-bottom reset-margin">
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">Your install mental payment of 12233 collected for property RT4</span>
                                            <span class="d-block color-blackish-gray font-xm-normal font-weight-bold">10th Apr 2010</span>
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
