import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, CreditCard } from "lucide-react";

interface BookingCalculatorProps {
  onCalculate?: (calculation: BookingCalculation) => void;
}

interface BookingCalculation {
  roomType: 'standard' | 'executive';
  bedType: 'single' | 'double';
  nights: number;
  roomRate: number;
  subtotal: number;
  total: number;
}

const ROOM_RATES = {
  standard: {
    single: 50000,
    double: 65000
  },
  executive: {
    single: 60000,
    double: 75000
  }
};

export function BookingCalculator({ onCalculate }: BookingCalculatorProps) {
  const [roomType, setRoomType] = useState<'standard' | 'executive'>('standard');
  const [bedType, setBedType] = useState<'single' | 'double'>('single');
  const [nights, setNights] = useState<number>(1);

  const calculation: BookingCalculation = {
    roomType,
    bedType,
    nights,
    roomRate: ROOM_RATES[roomType][bedType],
    subtotal: ROOM_RATES[roomType][bedType] * nights,
    total: ROOM_RATES[roomType][bedType] * nights
  };

  useEffect(() => {
    if (onCalculate) {
      onCalculate(calculation);
    }
  }, [calculation, onCalculate]);

  return (
    <motion.div 
      className="bg-stone-50 p-6 border border-stone-200 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="w-5 h-5 text-stone-600" />
        <h3 className="text-lg font-serif text-stone-900">Booking Calculator</h3>
      </div>

      {/* Room Type Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
          <span className="text-xl">🏨</span> Room Type
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'standard', label: 'Standard Room', desc: 'K50,000-K65,000' },
            { value: 'executive', label: 'Executive Suite', desc: 'K60,000-K75,000' }
          ].map((option) => (
            <motion.button
              key={option.value}
              type="button"
              onClick={() => setRoomType(option.value as 'standard' | 'executive')}
              className={`p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                roomType === option.value
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-medium">{option.label}</div>
              <div className="text-sm opacity-75">{option.desc}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bed Type Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
          <span className="text-xl">🛏</span> Bed Configuration
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'single', label: 'Single Bed', desc: 'One guest' },
            { value: 'double', label: 'Double/Twin', desc: 'Two guests' }
          ].map((option) => (
            <motion.button
              key={option.value}
              type="button"
              onClick={() => setBedType(option.value as 'single' | 'double')}
              className={`p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                bedType === option.value
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-medium">{option.label}</div>
              <div className="text-sm opacity-75">{option.desc}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Number of Nights */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-stone-700 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Number of Nights
        </label>
        <div className="flex items-center gap-4">
          <motion.input
            type="range"
            min="1"
            max="30"
            value={nights}
            onChange={(e) => setNights(parseInt(e.target.value))}
            className="flex-1"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.div 
            className="bg-stone-900 text-white px-4 py-2 rounded-lg min-w-[80px] text-center font-bold"
            key={nights}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {nights} {nights === 1 ? 'night' : 'nights'}
          </motion.div>
        </div>
      </div>

      {/* Price Display */}
      <div className="border-t border-stone-300 pt-6">
        <motion.div 
          className="bg-white p-6 rounded-lg border border-stone-200"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-stone-600 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Rate per night
              </span>
              <span className="font-bold text-stone-900">
                K{calculation.roomRate.toLocaleString()}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-stone-600 text-sm flex items-center gap-2">
                <Users className="w-4 h-4" />
                {nights} {nights === 1 ? 'night' : 'nights'}
              </span>
              <span className="font-bold text-stone-900">
                K{calculation.subtotal.toLocaleString()}
              </span>
            </div>
            
            <div className="border-t border-stone-300 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-stone-900">Total Amount</span>
                <span className="text-2xl font-bold text-stone-900">
                  K{calculation.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}