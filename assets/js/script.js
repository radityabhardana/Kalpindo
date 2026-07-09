// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    // Simple Fade Up Reveal (Professional/Corporate, no extreme physics)
    const revealElements = document.querySelectorAll(".gs-reveal");
    
    revealElements.forEach((el) => {
        gsap.fromTo(el, 
            { 
                y: 30, 
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%", // Trigger slightly earlier for corporate sites
                    toggleActions: "play none none none"
                }
            }
        );
    });
});
