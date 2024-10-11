import { useState } from "react";

const useScrollAnimation = () => {
  const [isInView, setIsInView] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [scale, setScale] = useState(1);

  // Function to detect if an element is in view based on percentage
  const applyInView = (elementId, percentage = 100) => {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const decimalPercentage = percentage / 100;
      const isInView =
        rect.top <= windowHeight * decimalPercentage &&
        rect.bottom >= windowHeight * decimalPercentage;

      setIsInView(isInView);
    }
  };

  // Function to apply blur and scale effect based on scroll percentage
  const applyBlurScale = (elementId, triggerPercentage) => {
    const element = document.getElementById(elementId);
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;

    const scrolledPercentage = Math.abs(rect.top / elementHeight) * 100;
    if (scrolledPercentage > triggerPercentage && scrolledPercentage <= 100) {
      setIsBlurred(true);
      setScale(0.8);
    } else {
      setIsBlurred(false);
      setScale(1);
    }
  };

  return {
    inView: {
      applyInView,
      isInView,
      setIsInView,
    },
    blurScale: {
      applyBlurScale,
      isBlurred,
      scale,
      setScale,
    },
  };
};

export default useScrollAnimation;
