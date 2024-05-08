<!-- START Header Scroll Animation by dianaoviedo.work -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"></script>

<script>

  gsap.registerPlugin(ScrollTrigger);  

/* Navigation Wrapper */
  gsap.from("#collection-6627af3469c23d7939320c95 .header-inner", {
   scale: 3,
    scrollTrigger:{
      trigger: 'section[data-section-id="6627cbf0b34c38077f358d7a"]',
      start: "top top",
      end: "top top",
      endTrigger: 'section[data-section-id="6627cbf0b34c38077f358d7a"]',
      scrub: 0.8,
    }
});
ScrollTrigger.refresh()  

/* Burger */
  gsap.from("#collection-6627af3469c23d7939320c95 .burger", {
   opacity: 0,
    scrollTrigger:{
      trigger: 'section[data-section-id="6627cbf0b34c38077f358d7a"]',
      start: "top top",
      end: "top top",
      endTrigger: 'section[data-section-id="6627cbf0b34c38077f358d7a"]',
      scrub: 0,
    }
});
ScrollTrigger.refresh()  

/* Announcement Bar */
  gsap.from("#collection-6627af3469c23d7939320c95 .header .sqs-announcement-bar-dropzone", {
   opacity: 0,
    scrollTrigger:{
      trigger: 'section[data-section-id="6627cbf0b34c38077f358d7a"]',
      start: "top top",
      end: "top top",
      endTrigger: 'section[data-section-id="6627cbf0b34c38077f358d7a"]',
      scrub: 0,
    }
});
ScrollTrigger.refresh()  
</script>
<!-- END Header Scroll Animation by dianaoviedo.work -->
