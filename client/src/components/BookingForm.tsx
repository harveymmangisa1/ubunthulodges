import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookingCalculator } from "@/components/BookingCalculator";

export function BookingForm() {
  const mutation = useCreateInquiry();
  const [bookingCalc, setBookingCalc] = useState<{
    roomType: 'standard' | 'executive';
    bedType: 'single' | 'double';
    nights: number;
    roomRate: number;
    subtotal: number;
    total: number;
  } | null>(null);
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: 1,
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <div className="space-y-8">
      {/* Booking Calculator */}
      <BookingCalculator 
        onCalculate={(calculation) => {
          setBookingCalc(calculation);
        }}
      />

      {/* Booking Form */}
      <motion.div 
        className="bg-white p-8 md:p-10 shadow-xl border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <motion.h3 
          className="text-2xl font-serif text-primary mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Complete Your Reservation
        </motion.h3>
        
        {/* Booking Summary */}
        {bookingCalc && (
          <motion.div 
            className="bg-stone-50 p-6 rounded-lg mb-8 border border-stone-200"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-stone-700">
                Selected: {bookingCalc.roomType === 'executive' ? 'Executive Suite' : 'Standard Room'} - {bookingCalc.bedType}
              </span>
              <span className="text-lg font-bold text-stone-900">
                K{bookingCalc.total.toLocaleString()} total
              </span>
            </div>
            <div className="text-xs text-stone-600">
              {bookingCalc.nights} nights @ K{bookingCalc.roomRate.toLocaleString()}/night
            </div>
          </motion.div>
        )}
        
        <motion.p 
          className="text-muted-foreground mb-8 text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Fill out your details to confirm availability and complete your booking.
        </motion.p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" className="rounded-none h-12 bg-gray-50 border-gray-200 focus:border-primary transition-colors" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" className="rounded-none h-12 bg-gray-50 border-gray-200 focus:border-primary transition-colors" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                       <Input type="tel" placeholder="+265 999 123 456" className="rounded-none h-12 bg-gray-50 border-gray-200 focus:border-primary transition-colors" {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                        className="w-full h-12 px-4 bg-gray-50 border border-gray-200 focus:border-primary transition-colors rounded-none"
                      >
                        <option value={1}>1 Guest</option>
                        <option value={2}>2 Guests</option>
                        <option value={3}>3 Guests</option>
                        <option value={4}>4 Guests</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check-in Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full h-12 justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(new Date(field.value), "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => field.onChange(date?.toISOString().split('T')[0])}
                          disabled={(date) =>
                            date < new Date()
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requests</FormLabel>
                  <FormControl>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Textarea 
                        placeholder="Enter any special requests"
                        className="border-border/50 focus:border-primary transition-all focus:shadow-sm min-h-[100px]"
                        {...field} 
                        value={field.value || ""}
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <motion.button 
              type="submit" 
              className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-medium uppercase tracking-widest text-sm rounded-none"
              disabled={mutation.isPending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {mutation.isPending ? (
                <motion.div 
                  className="flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="mr-2 h-4 w-4" />
                  </motion.div>
                  Processing...
                </motion.div>
              ) : (
                <motion.span
                  whileHover={{ letterSpacing: "0.1em" }}
                  transition={{ duration: 0.2 }}
                >
                  Submit Booking Request
                </motion.span>
              )}
            </motion.button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}