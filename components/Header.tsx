'use client'

import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { ThemeToggler } from "./ui/theme-toggle";

const navigationItems = [
    {
        displayName: "About Me",
        path: "/about"
    },
    {
        displayName: "Consult",
        path: "/consult"
    },
    {
        displayName: "FAQs",
        path: "/faq"
    },
    {
        displayName: "Blog",
        path: "/blog"
    },
]

export default function Header() {
    return (<div className="flex items-center justify-between align-center sticky top-0 w-100 p-4 border-b border-slate-500 backdrop-blur-sm">
        <div className="icon">
            <Link href="/">Anushka</Link>
        </div>
        <div className="menu flex justify-between">
            <NavigationMenu>
                <NavigationMenuList>
                    { navigationItems.map((navItem, idx) => <NavigationMenuItem key={idx}>
                        <Link href={navItem.path} legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:cursor-pointer`}>
                                {navItem.displayName}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>) }
                </NavigationMenuList>
            </NavigationMenu>
            <div className="ms-4">
                <ThemeToggler />
            </div>
        </div>
    </div>)
}