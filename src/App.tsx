import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import heroImage from "@/assets/hero-image.jpg"
import placeholderImage from "@/assets/placeholder.svg"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { UserCircle, Shield, Zap, Search, ChevronDown, Heart, MapPin, Eye, Menu, Star, Grid, Image, Video, Calendar, Phone, Mail, Instagram, Twitter, Linkedin, Github, Building2, Home, Users, User, UserPlus } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function App() {

  return (
    <>
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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-white mb-6"
            >
              Manage your properties effortlessly
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Streamline your property management across Nigeria with our comprehensive platform. 
              Find, manage, and grow your real estate portfolio in Lagos, Abuja, and beyond.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <Button size="lg" variant="default">
                Find a property
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm">
                Login
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-black hover:bg-white/90"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-slate-50">
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

      <section id="properties" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Find Your Dream Property</h2>
            <p className="text-xl text-muted-foreground">
              Search through our extensive database of properties
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Status Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      <span>Status</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    <DropdownMenuItem>Available</DropdownMenuItem>
                    <DropdownMenuItem>Rented</DropdownMenuItem>
                    <DropdownMenuItem>Sold</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Category Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      <span>Category</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    <DropdownMenuItem>Residential</DropdownMenuItem>
                    <DropdownMenuItem>Commercial</DropdownMenuItem>
                    <DropdownMenuItem>Industrial</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Location Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      <span>Location</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    <DropdownMenuItem>Uyo</DropdownMenuItem>
                    <DropdownMenuItem>Port-Harcourt</DropdownMenuItem>
                    <DropdownMenuItem>Abuja</DropdownMenuItem>
                    <DropdownMenuItem>Lagos</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Search Button */}
                <Button className="w-full">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>

              {/* Price Range Slider */}
              <div className="mb-8">
                <div className="flex justify-between mb-2 text-sm text-muted-foreground">
                  <span>Price Range</span>
                  <span>₦0 - ₦100,000,000</span>
                </div>
                <Slider 
                  defaultValue={[0, 100000000]} 
                  max={100000000} 
                  step={1000000}
                />
              </div>

              {/* Property Type Radio Group */}
              <div>
                <div className="mb-2 text-sm text-muted-foreground">Property Type</div>
                <RadioGroup className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-4 md:gap-8" defaultValue="apartment">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="apartment" id="apartment" />
                    <label htmlFor="apartment">Apartment</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="house" id="house" />
                    <label htmlFor="house">House</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="condo" id="condo" />
                    <label htmlFor="condo">Condo</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="townhouse" id="townhouse" />
                    <label htmlFor="townhouse">Townhouse</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="studio" id="studio" />
                    <label htmlFor="studio">Studio</label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Property Cards */}
            {[
              {
                title: "Modern Downtown Apartment",
                location: "15 Admiralty Way, Victoria Island",
                price: "₦450,000/mo",
                views: 245,
                status: "Available"
              },
              {
                title: "Luxury Villa with Pool",
                location: "Banana Island, Ikoyi",
                price: "₦850,000/mo",
                views: 389,
                status: "Available"
              },
              {
                title: "Cozy Studio Apartment",
                location: "Lekki Phase 1, Lagos",
                price: "₦280,000/mo",
                views: 167,
                status: "Available"
              },
              {
                title: "Executive Office Space",
                location: "Victoria Island, Lagos",
                price: "₦1,200,000/mo",
                views: 421,
                status: "Available"
              },
              {
                title: "Family Townhouse",
                location: "Osborne Estate, Ikoyi",
                price: "₦750,000/mo",
                views: 298,
                status: "Available"
              },
              {
                title: "Penthouse Suite",
                location: "Eko Atlantic City",
                price: "₦1,500,000/mo",
                views: 512,
                status: "Available"
              }
            ].map((property, index) => (
              <Card key={index} className="overflow-hidden rounded-2xl">
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gray-100">
                    <div className="absolute top-3 left-3">
                      <Badge>{property.status}</Badge>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-2 right-2 hover:bg-white/20"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Property Details */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1 shrink-0" />
                      {property.location}
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xl font-bold text-blue-600">
                        {property.price}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Eye className="h-4 w-4 mr-1" />
                        {property.views} views
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-5 pb-5 pt-0">
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-12">
            <Button size="lg" variant="outline">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by property owners, managers, and tenants worldwide
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="relative"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    review: "Finding and applying for properties has never been easier. The whole process is streamlined and transparent.",
                    name: "Sarah Johnson",
                    title: "Tenant",
                    avatar: "/avatars/sarah.jpg"
                  },
                  {
                    review: "As a property manager, Lotkeepr has revolutionized how I handle multiple properties. The automation is incredible.",
                    name: "Michael Chen",
                    title: "Property Manager",
                    avatar: "/avatars/michael.jpg"
                  },
                  {
                    review: "Managing my rental properties used to be a headache. Now it's a breeze with Lotkeepr's intuitive platform.",
                    name: "David Okonkwo",
                    title: "Property Owner",
                    avatar: "/avatars/david.jpg"
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="p-6">
                      <CardContent className="space-y-4">
                        {/* Stars */}
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Review */}
                        <p className="text-center text-muted-foreground">
                          {testimonial.review}
                        </p>

                        {/* Avatar and Name */}
                        <div className="flex flex-col items-center space-y-2">
                          <Avatar className="size-12">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="text-center">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-12" />
              <CarouselNext className="-right-4 md:-right-12" />
            </Carousel>
            <div className="flex justify-center mt-12">
              <Button size="lg" variant="outline">
                Submit a Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Media Gallery</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our collection of property photos, videos, and events
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="outline" size="lg" className="min-w-[120px]">
                <Grid className="mr-2 h-5 w-5" />
                All
              </Button>
              <Button variant="outline" size="lg" className="min-w-[120px]">
                <Image className="mr-2 h-5 w-5" />
                Photos
              </Button>
              <Button variant="outline" size="lg" className="min-w-[120px]">
                <Video className="mr-2 h-5 w-5" />
                Videos
              </Button>
              <Button variant="outline" size="lg" className="min-w-[120px]">
                <Calendar className="mr-2 h-5 w-5" />
                Events
              </Button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[...Array(8)].map((_, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer">
                  <div className="relative aspect-[4/3]">
                    {/* Image */}
                    <img
                      src={placeholderImage}
                      alt={`Gallery item ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <Button variant="outline" size="icon" className="mr-2 bg-white/10 hover:bg-white/20 border-white/50">
                        <Eye className="h-5 w-5 text-white" />
                      </Button>
                      <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/50">
                        <Heart className="h-5 w-5 text-white" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about Lotkeepr
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">How do I get started with Lotkeepr?</AccordionTrigger>
                <AccordionContent>
                  Getting started is easy! Simply click the 'Get Started' button, choose your role (Owner, Manager, or Tenant), and follow the registration process. You'll be up and running in minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">What types of properties can I manage?</AccordionTrigger>
                <AccordionContent>
                  Lotkeepr supports all types of properties including residential apartments, houses, condos, commercial spaces, and industrial properties. Our platform is flexible to accommodate any property type.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Is there a mobile app available?</AccordionTrigger>
                <AccordionContent>
                  Yes! We have mobile apps for both iOS and Android that allow you to manage your properties on the go. You can handle maintenance requests, communicate with tenants, and access reports from anywhere.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">How secure is my data?</AccordionTrigger>
                <AccordionContent>
                  Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with industry standards to ensure your data is always protected.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards, bank transfers, and digital payment methods. Our platform also supports automated rent collection and payment processing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex justify-center mt-12">
              <Button size="lg" variant="outline">
                More FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Message Card */}
            <Card className="lg:row-span-2">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px] resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-sm text-muted-foreground">+234 (800) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sm text-muted-foreground">hello@lotkeepr.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-sm text-muted-foreground">123 Business District, Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Socials Card */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
