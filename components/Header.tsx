'use client'

import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { ThemeToggler } from "./ui/theme-toggle";

export default function Header() {
    return (<div className="flex items-center justify-between align-center sticky top-0 w-100 p-4 border-b border-slate-100 backdrop-blur-sm">
        <div className="icon">
            <Link href="/">Main Icon</Link>
        </div>
        <div className="menu flex justify-between">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:cursor-pointer`}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/blog" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Blog
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="ms-4">
                <ThemeToggler/>
            </div>
        </div>
    </div>)
}