
import React from 'react'
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ThemeProvider } from "@/components/theme-provider"
import { Building2, Home, Users, User, UserPlus, Menu } from "lucide-react"
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [showLoginDialog, setShowLoginDialog] = React.useState(false);
  const [showGetStartedDialog, setShowGetStartedDialog] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginDialog(true);
  };

  const handleGetStartedClick = () => {
    setShowGetStartedDialog(true);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full">
      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login to Lotkeepr</DialogTitle>
            <DialogDescription>
              Select your role to continue
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <RadioGroup defaultValue="owner" className="grid grid-cols-2 gap-4">
              <div>
                <RadioGroupItem value="owner" id="owner" className="peer sr-only" />
                <label
                  htmlFor="owner"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <Home className="mb-2 h-6 w-6" />
                  <div className="text-sm font-medium">Owner</div>
                </label>
              </div>
              
              <div>
                <RadioGroupItem value="manager" id="manager" className="peer sr-only" />
                <label
                  htmlFor="manager"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <Users className="mb-2 h-6 w-6" />
                  <div className="text-sm font-medium">Manager</div>
                </label>
              </div>

              <div>
                <RadioGroupItem value="tenant" id="tenant" className="peer sr-only" />
                <label
                  htmlFor="tenant"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <User className="mb-2 h-6 w-6" />
                  <div className="text-sm font-medium">Tenant</div>
                </label>
              </div>

              <div>
                <RadioGroupItem value="guest" id="guest" className="peer sr-only" />
                <label
                  htmlFor="guest"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <UserPlus className="mb-2 h-6 w-6" />
                  <div className="text-sm font-medium">Guest</div>
                </label>
              </div>
            </RadioGroup>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <Button className="w-full">
                Login
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Get Started Dialog */}
      <Dialog open={showGetStartedDialog} onOpenChange={setShowGetStartedDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Get Started with Lotkeepr</DialogTitle>
            <DialogDescription>
              Create your account to begin managing properties
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="owner" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="owner">Owner</TabsTrigger>
              <TabsTrigger value="manager">Manager</TabsTrigger>
              <TabsTrigger value="tenant">Tenant</TabsTrigger>
              <TabsTrigger value="guest">Guest</TabsTrigger>
            </TabsList>
            {['owner', 'manager', 'tenant', 'guest'].map((role) => (
              <TabsContent key={role} value={role} className="space-y-4 mt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-name`}>Full Name</Label>
                    <Input
                      id={`${role}-name`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-email`}>Email</Label>
                    <Input
                      id={`${role}-email`}
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-phone`}>Phone Number</Label>
                    <Input
                      id={`${role}-phone`}
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-password`}>Password</Label>
                    <Input
                      id={`${role}-password`}
                      type="password"
                      placeholder="Create a password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-confirm-password`}>Confirm Password</Label>
                    <Input
                      id={`${role}-confirm-password`}
                      type="password"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <Button className="w-full mt-6">
                    Create {role.charAt(0).toUpperCase() + role.slice(1)} Account
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </DialogContent>
      </Dialog>

      <header className="border-b fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto flex h-16 items-center px-4">
          <div className="flex-1 flex justify-start">
            <Link to="/" className="text-xl font-bold">
              Lotkeepr
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-none">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className="px-4 py-2">Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                    <NavigationMenuLink className="px-4 py-2">About</NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#properties" onClick={(e) => handleNavClick(e, 'properties')}>
                    <NavigationMenuLink className="px-4 py-2">Properties</NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                    <NavigationMenuLink className="px-4 py-2">Contact</NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/donate">
                    <NavigationMenuLink className="px-4 py-2">Donate</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center gap-4">
            <Button variant="ghost" onClick={handleLoginClick}>
              Log In
            </Button>
            <Button onClick={handleGetStartedClick}>
              Get Started
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 py-4">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#about" onClick={(e) => { handleNavClick(e, 'about'); setIsSidebarOpen(false); }}>About</a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#properties" onClick={(e) => { handleNavClick(e, 'properties'); setIsSidebarOpen(false); }}>Properties</a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#contact" onClick={(e) => { handleNavClick(e, 'contact'); setIsSidebarOpen(false); }}>Contact</a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/donate">Donate</Link>
            </Button>
            <Separator className="my-2" />
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-medium">Theme</span>
              <ModeToggle />
            </div>
            <Separator className="my-2" />
            <Button variant="outline" className="w-full" onClick={handleLoginClick}>Log In</Button>
            <Button className="w-full" onClick={handleGetStartedClick}>Get Started</Button>
          </div>
        </SheetContent>
      </Sheet>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-12 pb-8 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Lotkeepr</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-[256px]">
                Revolutionizing property management through innovative technology and exceptional service across Nigeria.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-base">Product</h4>
              <div className="mt-4 flex flex-col space-y-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  API
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Integrations
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-base">Company</h4>
              <div className="mt-4 flex flex-col space-y-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Press
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Partners
                </a>
              </div>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-base">Support</h4>
              <div className="mt-4 flex flex-col space-y-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>

          <Separator className="mt-8" />
          
          <div className="text-center text-sm text-muted-foreground mt-6">
            © 2025 Lotkeepr. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
    </ThemeProvider>
  )
}

export default RootLayout
