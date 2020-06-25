/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Purchases from '@/components/Purchases.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import PrivacyPolicy from '@/components/PrivacyPolicy.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import SignUpComplete from '@/components/SignUpComplete.vue'
import PasswordReset from '@/components/PasswordReset.vue'
import PasswordResetVerify from '@/components/PasswordResetVerify.vue'
import PasswordResetChange from '@/components/PasswordResetChange.vue'
import Dashboard from '@/components/Dashboard.vue'
import Header from '@/components/Header.vue'
import Profile from '@/components/Profile.vue'
import Properties from '@/components/Properties.vue'
import Settings from '@/components/Settings.vue'
import SettingsPassword from '@/components/SettingsPassword.vue'
import SettingsVerification from '@/components/SettingsVerification.vue'
import Wallet from '@/components/Wallet.vue'
import BuyCoin from '@/components/BuyCoin.vue'
import BuyCoinETH from '@/components/BuyCoinETH.vue'
import BuyBTCAdd from '@/components/BuyBTCAdd.vue'
import SellETHProceed from '@/components/SellETHProceed.vue'
import SellBTCProceed from '@/components/SellBTCProceed.vue'
import BuyCoinAddExternalAddress from '@/components/BuyCoinAddExternalAddress.vue'

import Notifications from '@/components/Notifications.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/purchases',
      name: 'Purchases',
      component: Purchases
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/password-reset',
      name: 'PasswordReset',
      component: PasswordReset
    },
    {
      path: '/password-reset-verify',
      name: 'PasswordResetVerify',
      component: PasswordResetVerify
    },
    {
      path: '/password-reset-change',
      name: 'PasswordResetChange',
      component: PasswordResetChange
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/sign-up-complete',
      name: 'SignUpComplete',
      component: SignUpComplete
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/buy-coin',
      name: 'BuyCoin',
      component: BuyCoin
    },
    {
      path: '/buy-coin-eth',
      name: 'BuyCoinETH',
      component: BuyCoinETH
    },
    {
      path: '/buy-btc-add',
      name: 'BuyBTCAdd',
      component: BuyBTCAdd
    },
    {
      path: '/sell-eth-proceed',
      name: 'SellETHProceed',
      component: SellETHProceed
    },
    {
      path: '/sell-btc-proceed',
      name: 'SellBTCProceed',
      component: SellBTCProceed
    },
    {
      path: '/buy-coin-add-external-address',
      name: 'BuyCoinAddExternalAddress',
      component: BuyCoinAddExternalAddress
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/properties',
      name: 'Properties',
      component: Properties
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/settings-password',
      name: 'SettingsPassword',
      component: SettingsPassword
    },
    {
      path: '/settings-verification',
      name: 'SettingsVerification',
      component: SettingsVerification
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    }
  ]
})
export default router
