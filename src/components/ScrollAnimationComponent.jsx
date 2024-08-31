// import React, { useEffect, useRef } from "react";
// import styles from "./ScrollAnimationComponent.module.css";
// import logo from "../assets/img/logo.png";

// const ScrollAnimationComponent = () => {
//   const logoRef = useRef(null);
//   const blocksRef = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         logoRef.current.style.zIndex = "-1";
//       } else {
//         logoRef.current.style.zIndex = "10";
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add(styles.visible);
//         } else {
//           entry.target.classList.remove(styles.visible);
//         }
//       });
//     }, observerOptions);

//     blocksRef.current.forEach((block) => observer.observe(block));

//     return () =>
//       blocksRef.current.forEach((block) => observer.unobserve(block));
//   }, []);

//   return (
//     <div>
//       <div className={styles.stickyLogo} ref={logoRef}>
//         <span className={styles.text_digital}>DIGITAL</span>
//         <img src={logo} alt="Digital Dammish Logo" className={styles.customLogo} />
//         <span className={styles.text_dammish}>DAMMISH</span>
//       </div>
//       <div className={styles.view}>
//         {Array.from({ length: 20 }, (_, index) => (
//           <div
//             key={index}
//             className={styles.block}
//             ref={(el) => (blocksRef.current[index] = el)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollAnimationComponent;
import React, { useEffect, useRef } from "react";
import styles from "./ScrollAnimationComponent.module.css";
import logo from "../assets/img/logo.png";

const ScrollAnimationComponent = () => {
  const logoRef = useRef(null);
  const blocksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        logoRef.current.style.zIndex = "-1";
      } else {
        logoRef.current.style.zIndex = "10";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    }, observerOptions);

    blocksRef.current.forEach((block) => observer.observe(block));

    return () =>
      blocksRef.current.forEach((block) => observer.unobserve(block));
  }, []);

  return (
    <div>
      <div className={styles.stickyLogo} ref={logoRef}>
        <span className={styles.text_digital}>DIGITAL</span>
        <img src={logo} alt="Digital Dammish Logo" className={styles.customLogo} />
        <span className={styles.text_dammish}>DAMMISH</span>
      </div>
      <div className={styles.view}>
        {Array.from({ length: 20 }, (_, index) => (
          <div
            key={index}
            className={styles.block}
            ref={(el) => (blocksRef.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimationComponent;
