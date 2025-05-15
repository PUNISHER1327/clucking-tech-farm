import React, { useState, useEffect } from 'react';

interface SensorCardProps {
  title: string;
  icon: React.ReactNode;
  currentValue: number;
  unit: string;
  minValue: number;
  maxValue: number;
  idealRange: [number, number];
  color: string;
}

const SensorCard = ({
  title,
  icon,
  currentValue,
  unit,
  minValue,
  maxValue,
  idealRange,
  color
}: SensorCardProps) => {
  const [value, setValue] = useState(currentValue);
  
  useEffect(() => {
    // Simulate live data by randomly fluctuating the value
    const interval = setInterval(() => {
      const fluctuation = Math.random() * 0.4 - 0.2; // Random value between -0.2 and 0.2
      let newValue = value + fluctuation;
      
      // Keep within min and max bounds
      if (newValue < minValue) newValue = minValue;
      if (newValue > maxValue) newValue = maxValue;
      
      setValue(parseFloat(newValue.toFixed(1)));
    }, 2000);
    
    return () => clearInterval(interval);
  }, [value, minValue, maxValue]);
  
  // Calculate percentage for progress bar
  const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
  
  // Determine if value is within ideal range
  const isIdeal = value >= idealRange[0] && value <= idealRange[1];
  
  return (
    <div className="glass-morphism rounded-lg p-6 relative overflow-hidden group transition-all duration-300 hover:border-highlight/50">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="mr-3 text-highlight">{icon}</div>
          <h3 className="font-medium text-lg">{title}</h3>
        </div>
        <span className={`text-sm px-2 py-1 rounded ${isIdeal ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {isIdeal ? 'Ideal' : 'Warning'}
        </span>
      </div>
      
      <div className="flex items-end mb-1">
        <span className="text-4xl font-space font-bold">{value}</span>
        <span className="text-xl ml-1 mb-1 text-gray-400">{unit}</span>
      </div>
      
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-700 rounded-full mt-4 mb-2 relative">
        <div 
          className="absolute h-full rounded-full transition-all duration-700 ease-in-out"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
        
        {/* Ideal range indicator */}
        <div 
          className="absolute h-full bg-green-500/30 rounded-full"
          style={{ 
            left: `${((idealRange[0] - minValue) / (maxValue - minValue)) * 100}%`,
            width: `${((idealRange[1] - idealRange[0]) / (maxValue - minValue)) * 100}%` 
          }}
        ></div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{minValue} {unit}</span>
        <span>{maxValue} {unit}</span>
      </div>
      
      {/* Animated ring */}
      <div className="absolute -bottom-12 -right-12 w-24 h-24 border border-highlight/10 rounded-full group-hover:border-highlight/30 transition-all duration-500"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 border border-highlight/5 rounded-full group-hover:border-highlight/20 transition-all duration-700 delay-100"></div>
    </div>
  );
};

export default SensorCard;
