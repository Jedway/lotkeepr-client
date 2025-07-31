import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Landmark, CircleDollarSign } from "lucide-react"

const Donate = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">Support Lotkeepr</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your contribution helps us improve our platform and continue to provide a valuable service to the real estate community in Nigeria.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>Choose your preferred donation method</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="one-time" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="one-time">One-Time</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
              <TabsContent value="one-time">
                <div className="mt-6">
                  <Label className="text-lg font-semibold">Select Amount</Label>
                  <RadioGroup defaultValue="25" className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    {['10', '25', '50', '100'].map((amount) => (
                      <div key={amount}>
                        <RadioGroupItem value={amount} id={`amount-${amount}`} className="peer sr-only" />
                        <label
                          htmlFor={`amount-${amount}`}
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <span className="text-2xl font-bold">${amount}</span>
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                  <div className="mt-6">
                    <Label htmlFor="custom-amount" className="text-lg font-semibold">Custom Amount</Label>
                    <Input id="custom-amount" type="number" placeholder="Enter amount" className="mt-2" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="monthly">
                <div className="mt-6">
                  <Label className="text-lg font-semibold">Select Monthly Amount</Label>
                  <RadioGroup defaultValue="15" className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    {['5', '15', '30', '50'].map((amount) => (
                      <div key={amount}>
                        <RadioGroupItem value={amount} id={`monthly-amount-${amount}`} className="peer sr-only" />
                        <label
                          htmlFor={`monthly-amount-${amount}`}
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <span className="text-2xl font-bold">${amount}</span>
                          <span className="text-sm text-muted-foreground">/month</span>
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                  <div className="mt-6">
                    <Label htmlFor="custom-monthly-amount" className="text-lg font-semibold">Custom Amount</Label>
                    <Input id="custom-monthly-amount" type="number" placeholder="Enter amount" className="mt-2" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Label className="text-lg font-semibold">Payment Method</Label>
              <Tabs defaultValue="card" className="w-full mt-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="card">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Card
                  </TabsTrigger>
                  <TabsTrigger value="bank">
                    <Landmark className="mr-2 h-5 w-5" />
                    Bank
                  </TabsTrigger>
                  <TabsTrigger value="crypto">
                    <CircleDollarSign className="mr-2 h-5 w-5" />
                    Crypto
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="card" className="mt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="Enter card number" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry-date">Expiry Date</Label>
                        <Input id="expiry-date" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="CVC" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="bank" className="mt-6 text-center">
                  <p className="text-muted-foreground">Bank transfer details will be provided upon selecting this option.</p>
                </TabsContent>
                <TabsContent value="crypto" className="mt-6 text-center">
                  <p className="text-muted-foreground">Crypto wallet addresses will be provided upon selecting this option.</p>
                </TabsContent>
              </Tabs>
            </div>

            <Button className="w-full mt-8 text-lg py-6">
              Donate Now
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default Donate
