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
                <li class="bg-sky nav-item py-2">
                    <router-link to="/buy-coin" class="app-menu_item nav-link color-black">
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
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-md-4 mb-5">
                        <div class="card mx-auto border shadow">
                          <div class="card-body">
                              <div class="card-title font-weight-bold pb-3 px-4 border-bottom d-flex justify-content-between">
                                  <router-link to="/buy-coin" class="color-green line-rule">Buy with BTC</router-link>
                                  <router-link to="/buy-coin-eth" class="color-deep-gray">Buy with ETH</router-link>
                                </div>
                                <form class="px-3">
                                    <div class="form-group mb-2">
                                        <label for="amount-buy-pyl" class="font-sm">Amount to buy(PYL)</label>                                            
                                        <input type="email" id="amount-buy-pyl" class="form-control rounded-pill border-0 font-half px-4 bg-color-gray">
                                    </div>
                                <div class="form-group mb-2">
                                    <label for="amout-buy-btc" class="font-sm">Amount to buy(BTC)</label>
                                    <input type="email" id="amount-buy-btc" class="form-control rounded-pill border-0 font-half px-4 bg-color-gray">
                                </div>
                                <div class="d-flex justify-content-between font-sm mb-2">
                                    <p>Note: Ensure you send the exact amount specified and wait for A few minutes so the transaction can be verified before your PYL Wallet will be funded</p>
                                </div>
                                <div class="d-flex mb-4">
                                    <router-link to="/buy-btc-add" class="mybtn btn-block badge badge-pill bg-main-color color-white mx-auto py-2 mb-2" >Proceed</router-link>
                                </div>
                            </form>
                          </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class="card mx-auto border shadow">
                            <div class="card-body">
                                <div class="card-title font-weight-bold pb-3 px-4 border-bottom d-flex justify-content-between">
                                    <router-link to="/sell-btc-proceed" class="color-green line-rule">Sell to BTC</router-link>
                                    <router-link to="/sell-eth-proceed" class="color-deep-gray">Sell to ETH</router-link>
                              </div>
                              <div class="my-5">
                                <div class="d-flex padd-3">
                                    <i class="fas fa-check-circle big-font py-3 mx-auto"></i>
                                </div>
                                <p class="text-center pt-3 pb-4">Transaction successful</p>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-2">
                        <div class="card border shadow">
                            <div class="card-body">
                                <div class="py-3 text-left border-bottom d-flex justify-content-between">
                                    <h5 class="card-title">PYL Addresses</h5>
                                    <router-link to="/buy-coin-add-external-address" class="main-color text-decoration-none mybtn-sm font-sm">Generate Address</router-link>
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
                </div>
            </div>
        </main>
    </div>
</template>
