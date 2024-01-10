// let tl1 = gsap.timeline()
// tl1
// .fromTo('.intro > img', { opacity: 0, scale: 0, }, { opacity: 1, scale: 1, duration: 2 })
// .fromTo('.intro', { opacity: 1, scale: 1, }, { opacity: 0, scale: 2, duration: 1, delay: .7 })
// .fromTo('.intro', { display: 'block' }, { display: 'none' })
// .fromTo('.navbar', { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
// .fromTo('.first_section h1', { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
// .fromTo('.first_section p', { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '<.1')
// .fromTo('.fs__btns__container', { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '<.1')
// .fromTo('.lightning', { display: 'none' }, { display: 'inline' }, '<.1')
// .fromTo('.phone', { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '<.1')

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second__section",
    start: "top bottom",
    end: "50% bottom",
    scrub: 1,
  },
});

tl2.fromTo(".second__section *", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
// fromTo('.second__section h1', { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '<.4')

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third__section",
    start: "40% bottom",
    end: "bottom bottom",
    scrub: 1,
  },
});

tl3
  .fromTo(
    ".third__section img",
    { scale: 0.4, opacity: 0 },
    { scale: 1, opacity: 1 }
  )
  .fromTo(".third__section h1", { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo(
    ".third__section h1 > span",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1 }
  )
  .fromTo(".third__section p", { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo(
    ".third__section > span",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1 }
  )
  .fromTo(
    ".ts__social__media__container",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1 }
  );

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".forth__section",
    start: "10% bottom",
    end: "50% bottom",
    scrub: 0.5,
  },
});

tl5.fromTo(
  ".forth__section",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ox1__third__section",
    start: "center bottom",
    end: "80% bottom",
    scrub: 1,
  },
});

if (window.innerWidth > 728) {
  tl6.fromTo(
    ".ox1__third__section h1",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  );
}

tl6
  .fromTo(
    "#first_drfr__element",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 },
    "<0"
  )
  .fromTo(
    ".desktop__roadmap .second__row .sr__line",
    { width: 0, opacity: 0 },
    { width: "100%", opacity: 1, duration: 1 },
    "<0.1"
  )
  .fromTo(
    ".desktop__roadmap .second__row .sr__dot",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, stagger: 0.3, duration: 1 },
    "<0"
  )
  .fromTo(
    "#third_drfr__element",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 },
    "<0"
  )
  .fromTo(
    "#second_drfr__element",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 },
    "<0"
  );

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ox1__second__section",
    start: "top bottom",
    end: "80% 90%",
    scrub: 2,
  },
});

tl7
  .fromTo(
    "#ox1__ss__left__side span",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo(
    "#ox1__ss__left__side h1",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo(
    "#ox1__ss__left__side p",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo(
    "#ox1__ss__left__side a",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 }
  )
  .fromTo(
    ".ox1__ss__right__side__row .hexagon",
    { scale: 0.1, opacity: 0 },
    { scale: 1, opacity: 1, stagger: 0.3, duration: 2 }
  );

if (window.innerWidth > 728) {
  let tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".ox1__first__section",
      start: "top bottom",
      end: "80% 90%",
      scrub: 3,
    },
  });

  tl8
    .fromTo(
      "#ox1__fs__left__side span",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      "#ox1__fs__left__side h1",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      "#ox1__fs__left__side p",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      "#ox1__fs__left__side a",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    )

    .fromTo(
      ".ox1__fs__right__side .ox1__rs__element",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.3, duration: 1 },
      "<0"
    );
} else {
  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".ox1__third__section",
      start: "top bottom",
      end: "top 90%",
      scrub: 2,
    },
  });

  tl6.fromTo(
    ".ox1__third__section h1",
    { y: 0, opacity: 1 },
    { y: 0, opacity: 1, duration: 1 }
  );

  let tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mobile__roadmap",
      start: "top bottom",
      end: "top 90%",
      scrub: 2,
    },
  });

  tl7
    .fromTo(
      ".mobile__line__wrapper",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
    .fromTo(
      ".drfr__elements .drfr__element",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.3, duration: 1 },
      "<0"
    );

  let tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".ox1__first__section",
      start: "top bottom",
      end: "80% 90%",
      scrub: 1,
    },
  });

  tl8
    .fromTo(
      "#ox1__fs__left__side span",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      "#ox1__fs__left__side h1",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      "#ox1__fs__left__side p",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      "#ox1__fs__left__side a",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      ".ox1__fs__right__side .ox1__rs__element",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.3, duration: 1 }
    );
}
