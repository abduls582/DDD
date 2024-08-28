// import React, { useEffect, useRef } from "react";
// import "./CustomCursor.css";

// const CustomCursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const moveCircle = (e) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${e.pageX}px`;
//         cursorRef.current.style.top = `${e.pageY}px`;
//       }
//     };

//     const handleMouseEnter = () => {
//       cursorRef.current.classList.add("hovered");
//     };

//     const handleMouseLeave = () => {
//       cursorRef.current.classList.remove("hovered");
//     };

//     window.addEventListener("mousemove", moveCircle);

//     // Attach listeners only to elements that are supposed to have the custom cursor
//     const hoverTargets = document.querySelectorAll(".hover-target");
//     hoverTargets.forEach((el) => {
//       el.addEventListener("mouseenter", handleMouseEnter);
//       el.addEventListener("mouseleave", handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener("mousemove", moveCircle);
//       hoverTargets.forEach((el) => {
//         el.removeEventListener("mouseenter", handleMouseEnter);
//         el.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <div className="cursor" ref={cursorRef}>
//       <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
//         <path d="M75,100 C88.8,100 100,88.8 100,75 C100,61.2 88.8,50 75,50 C61.2,50 50,61.2 50,75 C50,88.8 61.2,100 75,100 Z"></path>
//       </svg>
//     </div>
//   );
// };

// export default CustomCursor;
// src/components/CustomCursor.js
import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const speed = 0.1; // Adjust this value for speed of following effect

  useEffect(() => {
    const moveCircle = () => {
      const diffX = targetRef.current.x - currentRef.current.x;
      const diffY = targetRef.current.y - currentRef.current.y;

      currentRef.current.x += diffX * speed;
      currentRef.current.y += diffY * speed;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentRef.current.x}px`;
        cursorRef.current.style.top = `${currentRef.current.y}px`;
      }

      requestAnimationFrame(moveCircle);
    };

    const handleMouseMove = (e) => {
      targetRef.current.x = e.pageX;
      targetRef.current.y = e.pageY;
    };

    const handleMouseEnter = () => {
      cursorRef.current.classList.add("hovered");
    };

    const handleMouseLeave = () => {
      cursorRef.current.classList.remove("hovered");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll(".hover-target").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    requestAnimationFrame(moveCircle); // Start the animation

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll(".hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <path d="M75,100 C88.8,100 100,88.8 100,75 C100,61.2 88.8,50 75,50 C61.2,50 50,61.2 50,75 C50,88.8 61.2,100 75,100 Z"></path>
      </svg>
    </div>
  );
};

export default CustomCursor;
