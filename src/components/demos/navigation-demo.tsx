"use client";

import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { cn } from "@/lib/utils";

export function NavigationDemo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Navigation Components</h2>
        <p className="text-muted-foreground mb-6">
          Components for navigation, routing, and page organization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Navigation Menu</CardTitle>
            <CardDescription>Main navigation with dropdowns</CardDescription>
          </CardHeader>
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix UI and Tailwind CSS.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Introduction</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Re-usable components built using Radix UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/docs/installation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Installation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              How to install dependencies and structure your app.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/docs/primitives/alert-dialog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Alert Dialog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A modal dialog that interrupts the user with important content.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/docs/primitives/hover-card" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Hover Card</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              For sighted users to preview content available behind a link.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/docs" className={cn("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50")}>
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Menubar</CardTitle>
            <CardDescription>Application menu bar with keyboard shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>New Incognito Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Share <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Find <MenubarShortcut>⌘F</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Actual Size <MenubarShortcut>⌘0</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Breadcrumb</CardTitle>
            <CardDescription>Navigation path indicator</CardDescription>
          </CardHeader>
          <CardContent>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Content organization with tab navigation</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="space-y-2">
                <h3 className="text-lg font-medium">Account Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Make changes to your account here. Click save when you&apos;re done.
                </p>
              </TabsContent>
              <TabsContent value="password" className="space-y-2">
                <h3 className="text-lg font-medium">Password Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Change your password here. After saving, you&apos;ll be logged out.
                </p>
              </TabsContent>
              <TabsContent value="notifications" className="space-y-2">
                <h3 className="text-lg font-medium">Notification Preferences</h3>
                <p className="text-sm text-muted-foreground">
                  Configure how you receive notifications.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pagination</CardTitle>
            <CardDescription>Page navigation controls</CardDescription>
          </CardHeader>
          <CardContent>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(Math.max(1, currentPage - 1));
                    }}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(1);
                    }}
                    isActive={currentPage === 1}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(2);
                    }}
                    isActive={currentPage === 2}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(3);
                    }}
                    isActive={currentPage === 3}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(Math.min(10, currentPage + 1));
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Current page: {currentPage}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}