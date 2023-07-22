'use client';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (<div className="footer bottom-0 w-100 p-4 border-t border-slate-500 backdrop-blur-sm flex justify-between items-center">
        <div className="attribution">© Anushka Anand, {new Date().getFullYear()}</div>
        <div className="social-media flex justify-between">
            <NavigationMenu>
                <NavigationMenuList className="flex">
                    <NavigationMenuItem>
                        <a href={`https://www.instagram.com/itsanushkaanand/`} target="_blank">
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:cursor-pointer`}>
                                <InstagramLogoIcon width={24} height={24}/>
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <a href={`https://in.linkedin.com/in/itsanushkaanand/`} target="_blank">
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:cursor-pointer`}>
                                <LinkedInLogoIcon width={24} height={24}/>
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>)
}