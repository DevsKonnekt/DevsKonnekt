"use client";

import Image from "next/image";
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./themeToggle";
import { navLinks } from "@/constants";
import { ChevronDown, ChevronDownIcon, MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { forwardRef } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarTrigger,
} from "./ui/menubar";
import { MenubarMenu } from "@radix-ui/react-menubar";

const NavBar = () => {
  const user = useUser();
  return (
    <header className="fixed w-full left-0 px-4 sm:px-6 md:px-16 mx-auto h-20 shadow-xl z-50 dark:bg-gray-700">
      <nav className="flex justify-end w-full items-center h-full px-2 2xl:px-16">
        <Link href="/" className="justify-self-start flex mr-auto">
          <Image
            src="/logo.svg"
            alt="DevsKonnekt Logo"
            width="150"
            height="100"
            className="w-24 sm:w-[150px]"
          />
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                {link.href && Array.isArray(link.href) ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-md tracking-widest font-semibold hover:font-bold opacity-70 hover:opacity-100 bg-transparent"
                      )}
                    >
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:bg-gray-800">
                        {link.href.map((subLink) => (
                          <ListItem
                            key={subLink.name}
                            title={subLink.name}
                            href={subLink.href}
                          >
                            {subLink.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-md tracking-widest font-semibold hover:font-bold opacity-70 hover:opacity-100 bg-transparent"
                    )}
                  >
                    {link.name}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
            <SignedIn>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href={`/profile/${user?.user?.id}`}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "mr-8 text-md tracking-widest font-semibold hover:font-bold opacity-70 hover:opacity-100 bg-transparent"
                  )}
                >
                  My Profile
                </NavigationMenuLink>
              </NavigationMenuItem>
            </SignedIn>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4 mr-4 w-max">
          <ModeToggle />
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="secondary"
                className="text-sm text-background font-bold"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
        <NavigationMenu className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 px-0 dark:bg-gray-700">
              <SheetHeader className="p-4 mt-4">
                <Image
                  src="/logo.svg"
                  alt="DevsKonnekt Logo"
                  width="200"
                  height="200"
                  className="block mx-auto"
                />
              </SheetHeader>
              <Separator className="h-[2px] bg-primary dark:bg-background opacity-45" />
              <NavigationMenuList className="p-4 w-full flex flex-col gap-4 mb-8 justify-between items-start">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    {link.href && Array.isArray(link.href) ? (
                      <Menubar className="dark:bg-gray-700 border-none">
                        <MenubarMenu>
                          <MenubarTrigger
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "text-md tracking-widest dark:bg-gray-700 p-2 flex items-center justify-center gap-2 font-semibold hover:font-bold opacity-70 hover:opacity-100"
                            )}
                          >
                            {link.name} <ChevronDownIcon size={24} />
                          </MenubarTrigger>
                          <MenubarContent className="dark:bg-gray-700">
                            <ul>
                              {link.href.map((subLink) => (
                                <li key={subLink.name}>
                                  <SheetClose asChild>
                                    <MenubarItem>
                                      <Link href={subLink.href}>
                                        {subLink.name}
                                      </Link>
                                    </MenubarItem>
                                  </SheetClose>
                                </li>
                              ))}
                            </ul>
                          </MenubarContent>
                        </MenubarMenu>
                      </Menubar>
                    ) : (
                      <SheetClose asChild>
                        <NavigationMenuLink
                          href={link.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "text-md tracking-widest dark:bg-gray-700 font-semibold hover:font-bold opacity-70 hover:opacity-100"
                          )}
                        >
                          {link.name}
                        </NavigationMenuLink>
                      </SheetClose>
                    )}
                  </NavigationMenuItem>
                ))}
                <SignedIn>
                  <NavigationMenuItem className="px-4">
                    <SheetClose asChild>
                      <NavigationMenuLink
                        href={
                          user.isLoaded ? `/profile/${user?.user?.id}` : "/"
                        }
                        className="text-sm tracking-widest font-bold "
                      >
                        My Profile
                      </NavigationMenuLink>
                    </SheetClose>
                  </NavigationMenuItem>
                </SignedIn>
              </NavigationMenuList>
            </SheetContent>
          </Sheet>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default NavBar;

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent dark:bg-gray-700 dark:text-background hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
