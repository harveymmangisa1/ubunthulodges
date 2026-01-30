import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, CreditCard, Minus, Plus, BedDouble, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingCalculatorProps {
  onCalculate?: (calculation: BookingCalculation) => void;
}

interface BookingCalculation {
  roomType: 'standard' | 'executive';
  bedType: 'single' | 'double';
  nights: number;
  roomRate: number;
  total: number;
}

const ROOM_RATES = {
  standard: { single: 50000, double: 65000 },
  executive: { single: 60000, double: 75000 }
};

export function BookingCalculator({ onCalculate }: BookingCalculatorProps) {
  const [roomType, setRoomType] = useState<'standard' | 'executive'>('standard');
  const [bedType, setBedType] = useState<'single' | 'double'>('single');
  const [nights, setNights] = useState<number>(1);

  const calculation = useMemo(() => ({
    roomType,
    bedType,
    nights,
    roomRate: ROOM_RATES[roomType][bedType],
    total: ROOM_RATES[roomType][bedType] * nights
  }), [roomType, bedType, nights]);

  useEffect(() => {
    onCalculate?.(calculation);
  }, [calculation, onCalculate]);

  const updateNights = (val: number) => {
    setNights(prev => Math.max(1, Math.min(30, prev + val)));
  };

  return (
    <motion.div 
      className="bg-white border border-stone-200 rounded-sm shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="bg-stone-900 p-6 text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-serif italic">Rate Estimator</h3>
          <p className="text-stone-400 text-[10px] uppercase tracking-widest mt-1">Instant Pricing</p>
        </div>
        <CreditCard className="text-stone-500 w-8 h-8 stroke-1" />
      </div>

      <div className="p-8 space-y-10">
        {/* Room Selection */}
        <section className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 flex items-center gap-2">
            <ShieldCheck className="w-3 h-3" /> 01. Room Category
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(['standard', 'executive'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setRoomType(type)}
                className={cn(
                  "relative p-5 text-left border transition-all duration-500 group",
                  roomType === type 
                    ? "border-stone-900 bg-stone-50 ring-1 ring-stone-900" 
                    : "border-stone-100 hover:border-stone-300"
                )}
              >
                <div className={cn(
                  "text-sm font-serif mb-1 capitalize",
                  roomType === type ? "text-stone-900" : "text-stone-500"
                )}>
                  {type} Collection
                </div>
                <div className="text-xs text-stone-400 font-light">
                  From K{ROOM_RATES[type].single.toLocaleString()} / night
                </div>
                {roomType === type && (
                  <motion.div layoutId="activeRoom" className="absolute top-2 right-2 w-2 h-2 bg-stone-900 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Configuration Selection */}
        <section className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 flex items-center gap-2">
            <BedDouble className="w-3 h-3" /> 02. Occupancy
          </label>
          <div className="flex gap-4">
            {(['single', 'double'] as const).map((bed) => (
              <button
                key={bed}
                onClick={() => setBedType(bed)}
                className={cn(
                  "flex-1 py-3 px-4 text-xs font-medium uppercase tracking-widest border transition-all",
                  bedType === bed 
                    ? "bg-stone-900 text-white border-stone-900" 
                    : "bg-white text-stone-400 border-stone-200 hover:border-stone-400"
                )}
              >
                {bed}
              </button>
            ))}
          </div>
        </section>

        {/* Nights Control */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> 03. Duration
            </label>
            <span className="text-2xl font-serif italic text-stone-900">{nights} <span className="text-sm not-italic font-sans text-stone-400">Nights</span></span>
          </div>
          
          <div className="flex items-center gap-6 bg-stone-50 p-2 rounded-full border border-stone-100">
            <button 
              onClick={() => updateNights(-1)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-stone-200 hover:bg-stone-900 hover:text-white transition-all shadow-sm"
            >
              <Minus className="w-4 h-4" />
            </button>
            
            <input 
              type="range" min="1" max="30" value={nights}
              onChange={(e) => setNights(parseInt(e.target.value))}
              className="flex-1 accent-stone-900"
            />

            <button 
              onClick={() => updateNights(1)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-stone-200 hover:bg-stone-900 hover:text-white transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Summary Footer */}
        <div className="pt-8 border-t border-stone-100">
          <div className="flex justify-between items-center group">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-stone-400">Estimated Total</p>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={calculation.total}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-4xl font-serif text-stone-900"
                >
                  K{calculation.total.toLocaleString()}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold text-stone-900 flex items-center justify-end gap-1">
                <Users className="w-3 h-3" /> {bedType === 'single' ? '1 Guest' : '2 Guests'}
              </div>
              <p className="text-xs text-stone-400 font-light mt-1">K{calculation.roomRate.toLocaleString()} / Night</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}