import { createContext, useCallback, useState } from "react";

export const Context=createContext();
const CounterProvider = ({ children }) => {
    const [counts, setCounts] = useState({});

    // Reusable count-up function
  const startCount = useCallback((key, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      // update the specific counter value
      setCounts((prev) => ({
        ...prev,
        [key]: Math.floor(start),
      }));
    }, 16);
  }, []);

  // Reset count to zero (for replay)
  const resetCount = useCallback((key) => {
    setCounts((prev) => ({
      ...prev,
      [key]: 0,
    }));
  }, []);

    return(
        <Context.Provider value={{counts,startCount,resetCount}}>
            {children}
        </Context.Provider>
    )
} 
export default CounterProvider;