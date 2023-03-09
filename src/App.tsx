import { useState } from 'react'

import './App.css'

function App() {

    const sidebar = [
        {
            title: "General",
            icon: "bi-gear-fill",
            children: [
                {
                    title: "Home",
                    icon: "bi-house-fill",
                    path: "/"
                }, {
                    title: "About",
                    icon: "bi-info-circle-fill",
                    path: "/about"
                }, {
                    title: "Contact",
                    icon: "bi-phone-fill",
                    children: [
                        {
                            title: "Facebook",
                            icon: "bi-facebook"
                        }, {
                            title: "Twitter",
                            icon: "bi-twitter"
                        }, {
                            title: "Instagram",
                            icon: "bi-instagram"
                        }
                    ]
                }, {
                    title: "FAQ",
                    icon: "bi-question-circle-fill"
                }
            ]
        },
        {
            title: "Account",
            icon: "bi-info-circle-fill",
            children: [
                {
                    title: "Login",
                    path: "/login"
                }, {
                    title: "Register",
                    path: "/register"
                }, {
                    title: "Forgot Password",
                    path: "/forgot-password"
                }, {
                    title: "Reset Password",
                    path: "/reset-password"
                }
            ]
        },
        {
            title: "Profile",
            icon: "bi-person-fill",
            children: [
                {
                    title: "Profile",
                    path: "/profile"
                }, {
                    title: "Settings",
                    children: [
                        {
                            title: "Account",
                            path: "/settings/account"
                        }, {
                            title: "Billing",
                            children: [
                                {
                                    title: "Payment",
                                    path: "/settings/billing/payment"
                                }, {
                                    title: "Subscription",
                                    path: "/settings/billing/subscription"
                                }
                            ]
                        }, {
                            title: "Notifications",
                            path: "/settings/notifications"
                        }
                    ]
                }, {
                    title: "Logout",
                    path: "/logout"
                }
            ]
        },
        {
            title: "Advance",
            icon: "bi-view-list",
            children: [
                {
                    title: "Search",
                    path: "/search"
                }, {
                    title: "History",
                    path: "/history"
                }
            ]
        }, {
            title: "Support",
            icon: "bi-question-circle-fill",
            path: "/support"
        }, {
            title: "Report Bug",
            icon: "bi-bug",
            path: "/report-bug"
        }
    ]

    return (
        <div className="main flex h-screen text-white">
            <div className="sidebar w-64 shrink-0 bg-[rgba(22,22,22,1)] h-full overflow-auto">
                Hello
            </div>
            <div className="conatiner flex justify-center items-center flex-col w-full">
                <h1 className="title text-5xl my-3">My React App</h1>
                <p className="info text-lg tracking-widest  m-6 text-[rgb(224, 224, 224)] max-w-xl my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="btn my-3">Explore now</button>
            </div>
        </div>
    )
}

export default App
