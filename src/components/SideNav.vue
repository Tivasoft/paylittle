<template>
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
</template>
