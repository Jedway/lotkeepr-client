import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-image.jpg"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { UserCircle, Shield, Zap } from "lucide-react"

function App() {
  return (
    <div className="w-full">
      <header className="border-b fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto flex h-16 items-center px-4">
          <div className="mr-4 flex items-center">
            <a href="/" className="text-xl font-bold">
              Lotkeepr
            </a>
          </div>
          
          <div className="flex flex-1 items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/properties">
                    Properties
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/donate">
                    Donate
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Manage your properties effortlessly
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Streamline your property management across Nigeria with our comprehensive platform. 
              Find, manage, and grow your real estate portfolio in Lagos, Abuja, and beyond.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="default">
                Find a property
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm">
                Login
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About Lotkeepr</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionizing property management through innovative technology and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Story Card */}
            <Card>
              <CardContent>
                <div className="flex justify-center mb-6 mt-6">
                  <UserCircle className="size-12 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>Our Story</CardTitle>
                  <CardDescription>
                    Founded by property management experts who understood the challenges of traditional systems.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Read More</AccordionTrigger>
                      <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde omnis iste ipsa. Temporibus explicabo dolores officia ut, consequatur distinctio voluptatum veniam.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </CardContent>
            </Card>

            {/* Our Services Card */}
            <Card>
              <CardContent>
                <div className="flex justify-center mb-6 mt-6">
                  <Shield className="size-12 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>Our Services</CardTitle>
                  <CardDescription>
                    Comprehensive property management solutions for owners, tenants, and property managers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Read More</AccordionTrigger>
                      <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde omnis iste ipsa. Temporibus explicabo dolores officia ut, consequatur distinctio voluptatum veniam.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </CardContent>
            </Card>

            {/* Why Lotkeepr Card */}
            <Card>
              <CardContent>
                <div className="flex justify-center mb-6 mt-6">
                  <Zap className="size-12 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>Why Lotkeepr</CardTitle>
                  <CardDescription>
                    Modern technology meets industry expertise to deliver unparalleled property management.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Read More</AccordionTrigger>
                      <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde omnis iste ipsa. Temporibus explicabo dolores officia ut, consequatur distinctio voluptatum veniam.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App