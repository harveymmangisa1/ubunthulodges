import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, Loader2, Info, CheckCircle2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { BookingCalculator } from "@/components/BookingCalculator";

export function BookingForm() {
  const mutation = useCreateInquiry();
  const [bookingCalc, setBookingCalc] = useState<{
    roomType: 'standard' | 'executive';
    bedType: 'single' | 'double';
    nights: number;
    roomRate: number;
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

  // Automatically calculate nights if both dates are present
  const checkIn = form.watch("checkIn");
  const checkOut = form.watch("checkOut");

  useEffect(() => {
    if (checkIn && checkOut) {
      const days = differenceInDays(new Date(checkOut), new Date(checkIn));
      // You can pass this logic to your BookingCalculator via props if needed
    }
  }, [checkIn, checkOut]);

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        setBookingCalc(null);
      }
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Column: Calculator & Summary (The 'Hook') */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
        <BookingCalculator 
          onCalculate={(calculation) => setBookingCalc(calculation)}
        />

        <AnimatePresence>
          {bookingCalc && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-stone-900 text-white p-8 rounded-sm shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CheckCircle2 size={120} />
              </div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-8">Reservation Summary</h4>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="font-light text-stone-400">Accomodation</span>
                  <span className="capitalize">{bookingCalc.roomType} Suite</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-light text-stone-400">Duration</span>
                  <span>{bookingCalc.nights} Nights</span>
                </div>
                <div className="h-[1px] bg-stone-800 w-full my-4" />
                <div className="flex justify-between items-end">
                  <span className="text-sm font-light text-stone-400">Total Estimate</span>
                  <span className="text-3xl font-serif italic text-white">
                    K{bookingCalc.total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-stone-800/50 rounded-sm text-[11px] leading-relaxed text-stone-300">
                <Info className="shrink-0 w-4 h-4 text-stone-500" />
                <p>Final pricing may vary based on seasonal demands and special requests.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Column: The Form (The 'Commitment') */}
      <motion.div 
        className="lg:col-span-7 bg-white p-8 md:p-12 border border-stone-100 shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-10">
          <h3 className="text-3xl font-serif text-stone-900 mb-2">Guest Details</h3>
          <p className="text-stone-500 text-sm font-light">Please provide your contact information to finalize the enquiry.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Alexander Malabwe" className="border-0 border-b border-stone-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-stone-900 transition-all bg-transparent h-10" {...field} />
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
                    <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="alex@example.com" className="border-0 border-b border-stone-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-stone-900 transition-all bg-transparent h-10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Phone Number</FormLabel>
                    <FormControl>
                       <Input type="tel" placeholder="+265..." className="border-0 border-b border-stone-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-stone-900 transition-all bg-transparent h-10" {...field} value={field.value || ""} />
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
                    <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Total Guests</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                        className="w-full border-0 border-b border-stone-200 bg-transparent h-10 text-sm focus:outline-none focus:border-stone-900 transition-all cursor-pointer"
                      >
                        {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Check In */}
              <FormField
                control={form.control}
                name="checkIn"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2">Arrival</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("justify-start text-left font-light border-stone-200 rounded-none h-12", !field.value && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                          {field.value ? format(new Date(field.value), "PPP") : "Select Date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value ? new Date(field.value) : undefined} onSelect={(date) => field.onChange(date?.toISOString())} disabled={(date) => date < new Date()} />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              {/* Check Out */}
              <FormField
                control={form.control}
                name="checkOut"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2">Departure</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("justify-start text-left font-light border-stone-200 rounded-none h-12", !field.value && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                          {field.value ? format(new Date(field.value), "PPP") : "Select Date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value ? new Date(field.value) : undefined} onSelect={(date) => field.onChange(date?.toISOString())} disabled={(date) => date < (new Date(checkIn) || new Date())} />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Preferences & Requests</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Dietary requirements, airport pickup, or special occasions..." className="rounded-none border-stone-200 focus:border-stone-900 bg-stone-50 min-h-[120px] font-light italic" {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={mutation.isPending}
              className="w-full h-14 bg-stone-900 hover:bg-stone-800 text-white rounded-none uppercase tracking-[0.2em] text-xs font-bold transition-all"
            >
              {mutation.isPending ? <Loader2 className="animate-spin" /> : "Request Reservation"}
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}