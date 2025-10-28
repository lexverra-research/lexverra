import { createContext, useCallback, useRef, useState } from "react";

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
///button animation on background color

const btnRef = useRef(null);

  const handleMouseEnter = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const fromLeft = x < rect.width / 2;
    const fromTop = y < rect.height / 2;

    btn.style.setProperty('--hover-x', `${x}px`);
    btn.style.setProperty('--hover-y', `${y}px`);
    btn.classList.add('hovering');
  };

  const handleMouseLeave = () => {
    btnRef.current.classList.remove('hovering');
  };

    return(
        <Context.Provider value={{counts,startCount,resetCount,handleMouseLeave,btnRef,handleMouseEnter}}>
            {children}
        </Context.Provider>
    )
} 
export default CounterProvider;