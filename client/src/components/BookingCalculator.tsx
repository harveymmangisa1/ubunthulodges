import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, CreditCard, Minus, Plus, BedDouble, ShieldCheck, Crown, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingCalculatorProps {
  onCalculate?: (calculation: BookingCalculation) => void;
  externalNights?: number;
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

export function BookingCalculator({ onCalculate, externalNights }: BookingCalculatorProps) {
  const [roomType, setRoomType] = useState<'standard' | 'executive'>('standard');
  const [bedType, setBedType] = useState<'single' | 'double'>('single');
  const [internalNights, setInternalNights] = useState<number>(1);

  const nights = externalNights || internalNights;

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
    setInternalNights(prev => Math.max(1, Math.min(30, prev + val)));
  };

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm border border-stone-200/50 rounded-xl shadow-xl overflow-hidden sticky top-24"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="bg-stone-900 p-8 text-white flex justify-between items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-serif italic">Rate Estimator</h3>
          <p className="text-stone-400 text-[10px] uppercase tracking-[0.3em] mt-2">Real-time Calculation</p>
        </div>
        <CreditCard className="text-white/20 w-10 h-10 stroke-1 relative z-10" />
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
                  "relative p-6 text-left border rounded-lg transition-all duration-300 group flex flex-col justify-between h-32",
                  roomType === type
                    ? "border-stone-900 bg-stone-900 text-white shadow-lg scale-[1.02]"
                    : "border-stone-100 hover:border-stone-300 bg-white text-stone-500 hover:bg-stone-50"
                )}
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    {type === 'executive' ? (
                      <Crown className={cn("w-5 h-5", roomType === type ? "text-amber-400" : "text-stone-300")} strokeWidth={1.5} />
                    ) : (
                      <Star className={cn("w-5 h-5", roomType === type ? "text-stone-200" : "text-stone-300")} strokeWidth={1.5} />
                    )}
                    {roomType === type && (
                      <motion.div layoutId="activeRoom" className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <div className={cn(
                    "text-sm font-serif capitalize tracking-wide",
                    roomType === type ? "text-white" : "text-stone-900"
                  )}>
                    {type} Room
                  </div>
                </div>
                <div className={cn(
                  "text-xs font-light",
                  roomType === type ? "text-stone-400" : "text-stone-400"
                )}>
                  From K{ROOM_RATES[type].single.toLocaleString()}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Configuration Selection */}
        <section className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 flex items-center gap-2">
            <BedDouble className="w-3 h-3" /> 02. Occupancy
          </label>
          <div className="flex p-1 bg-stone-100 rounded-lg">
            {(['single', 'double'] as const).map((bed) => (
              <button
                key={bed}
                onClick={() => setBedType(bed)}
                className={cn(
                  "flex-1 py-3 px-4 text-xs font-medium uppercase tracking-widest rounded-md transition-all duration-300",
                  bedType === bed
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-400 hover:text-stone-600"
                )}
              >
                {bed}
              </button>
            ))}
          </div>
        </section>

        {/* Nights Control - Only show if not controlled externally */}
        {!externalNights && (
          <section className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 flex items-center gap-2">
                <Calendar className="w-3 h-3" /> 03. Duration
              </label>
              <span className="text-3xl font-serif italic text-stone-900">{nights} <span className="text-sm not-italic font-sans text-stone-400 font-light">Nights</span></span>
            </div>

            <div className="flex items-center gap-4 bg-white p-2 rounded-full border border-stone-200 shadow-sm">
              <button
                onClick={() => updateNights(-1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-stone-900 hover:text-white transition-all"
              >
                <Minus className="w-3 h-3" />
              </button>

              <input
                type="range" min="1" max="30" value={nights}
                onChange={(e) => setInternalNights(parseInt(e.target.value))}
                className="flex-1 accent-stone-900 h-1 bg-stone-100 rounded-lg appearance-none cursor-pointer"
              />

              <button
                onClick={() => updateNights(1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-stone-900 hover:text-white transition-all"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </section>
        )}

        {externalNights && (
          <section className="space-y-4 bg-stone-50 p-6 rounded-lg border border-stone-100">
            <div className="flex justify-between items-end mb-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 flex items-center gap-2">
                <Calendar className="w-3 h-3" /> 03. Duration
              </label>
              <span className="text-3xl font-serif italic text-stone-900">{externalNights} <span className="text-sm not-italic font-sans text-stone-400 font-light">Nights</span></span>
            </div>
            <div className="h-1 w-full bg-stone-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-stone-900"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
            <p className="text-[10px] text-stone-400 italic mt-2 text-right">Synced with booking dates</p>
          </section>
        )}

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
                  className="text-5xl font-serif text-stone-900 tracking-tight"
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