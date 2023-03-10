import SidebarItem from "./SidebarItem"
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
const Sidebar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    const sidebar = [
        {
            title: "General",
            icon: "fa-solid fa-gear",
            children: [
                {
                    title: "Home",
                    icon: "fa-solid fa-house",
                    path: "/"
                }, {
                    title: "About",
                    icon: "fa-solid fa-circle-info",
                    path: "/about"
                }, {
                    title: "Contact",
                    icon: "fa-solid fa-phone",
                    children: [
                        {
                            title: "Facebook",
                            icon: "fa-brands fa-facebook"
                        }, {
                            title: "Twitter",
                            icon: "fa-brands fa-twitter"
                        }, {
                            title: "Instagram",
                            icon: "fa-brands fa-instagram"
                        }
                    ]
                }, {
                    title: "FAQ",
                    icon: "fa-solid fa-question"
                }
            ]
        },
        {
            title: "Account",
            icon: "fa-solid fa-circle-info",
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
            icon: "fa-solid fa-circle-user",
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
            icon: "fa-solid fa-list",
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
            icon: "fa-solid fa-question",
            path: "/support"
        }, {
            title: "Report Bug",
            icon: "fa-solid fa-bug",
            path: "/report-bug"
        }
    ]

    return (
        <div className={`sidebar w-64 shrink-0 bg-[rgba(22,22,22,1)] h-full overflow-auto fixed transition-transform duration-300 ${isOpen ? "" : `-left-[99999px]`}`}>
            <div className="text-3xl font-bold text-center my-3 flex justify-evenly items-center">
                <i onClick={() => setIsOpen((prev: any) => !prev)} className="fa-solid fa-bars text-2xl"></i>
                Sidebar
            </div>
            <hr />
            {
                sidebar.map((item: any, index: number) => (
                    <SidebarItem key={index} item={item} />
                ))
            }
        </div >
    )
}

export default Sidebar
