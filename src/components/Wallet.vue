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
                <li class="bg-sky nav-item py-2">
                    <router-link to="/wallet" class="app-menu_item nav-link color-black">
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
                    <div class="col-md-4">
                        <div class="bg-sky mb-4 shadow">
                            <div class="d-flex justify-content-between py-4 px-4 font-weight-bolder">
                                <div class="text-center">
                                    <span class="d-block text-left">Available Balance</span>
                                    <span class="d-block font-lg">200.65<sup class="pl-3 font-sm">PYL</sup></span>
                                </div>
                                <sup class="d-block font-sm">~ $1,000</sup>
                            </div>
                        </div>
                        <div class="bg-sky mb-4 shadow">
                            <div class="d-flex justify-content-between py-4 px-4 font-weight-bolder">
                                <div class="text-center">
                                    <span class="d-block text-left">Token Balance</span>
                                    <span class="d-block font-lg">20.65<sup class="pl-3 font-sm">PLT</sup></span>
                                </div>
                                <sup class="d-block font-sm">~ $100</sup>
                            </div>
                        </div>
                        <div class="bg-white mb-4 shadow">
                            <div class="py-4 px-4">
                                <h5 class="font-weight-bolder">Receive PYL</h5>
                            </div>
                            <div class="d-flex">
                                <img src="../assets/img/Screenshot_20@2x.png" style="width: 30%" class="mx-auto">
                            </div>
                            <div class="p-4">
                                <p>Latest Address</p>
                                <p>18Vm8AvDr9Bkvij6UfVR7MerCyrz3KS3h4</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card border shadow">
                            <div class="card-body">
                                <div class="py-3 text-left border-bottom d-flex justify-content-between">
                                    <h5 class="card-title">PYL Addresses</h5>
                                    <router-link to="/buy-coin-add-external-address" class="main-color mybtn-sm font-sm">Generate Address</router-link>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                            <tr class="d-flex justify-content-between py-2">
                                                <td class="">
                                                    <span class="d-block font-xm color-black font-weight-bold">Jcbiuwenfcklewmfkcmiekfmcklemklfr</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td class="">
                                                    <div class="custom-border d-flex align-items-center">
                                                        <span class="d-block font-sm color-tomato font-weight-bold mx-auto">x</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-black font-weight-bold">Jcbiuwenfcklewmfkcmiekfmcklemklfr</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <div class="custom-border d-flex align-items-center">
                                                        <span class="d-block font-sm color-tomato font-weight-bold mx-auto">x</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-black font-weight-bold">Jcbiuwenfcklewmfkcmiekfmcklemklfr</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <div class="custom-border d-flex align-items-center">
                                                        <span class="d-block font-sm color-tomato font-weight-bold mx-auto">x</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-black font-weight-bold">Jcbiuwenfcklewmfkcmiekfmcklemklfr</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <div class="custom-border d-flex align-items-center">
                                                        <span class="d-block font-sm color-tomato font-weight-bold mx-auto">x</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-black font-weight-bold">Jcbiuwenfcklewmfkcmiekfmcklemklfr</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <div class="custom-border d-flex align-items-center">
                                                        <span class="d-block font-sm color-tomato font-weight-bold mx-auto">x</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-black font-weight-bold">Jcbiuwenfcklewmfkcmiekfmcklemklfr</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <div class="custom-border d-flex align-items-center">
                                                        <span class="d-block font-sm color-tomato font-weight-bold mx-auto">x</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border shadow">
                            <div class="card-body">
                                <h5 class="card-title py-3 text-left border-bottom">History</h5>
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                            <tr class="d-flex justify-content-between py-2">
                                                <td class="">
                                                    <span class="d-block font-xm color-green font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td class="">
                                                    <span class="d-block font-sm color-green font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-green font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-green font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-green font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-green font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-tomato font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-tomato font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-tomato font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-tomato font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-tomato font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-tomato font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-tomato font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-tomato font-weight-bold">+ 0.09</span>
                                                </td>
                                            </tr>
                                            <tr class="d-flex justify-content-between py-2">
                                                <td>
                                                    <span class="d-block font-xm color-tomato font-weight-bold">Bought 10 PLY</span>
                                                    <span class="d-block font-xm color-deep-gray">10th Apr 2010</span>
                                                </td>
                                                <td>
                                                    <span class="d-block font-sm color-tomato font-weight-bold">+ 0.09</span>
                                                </td>
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
