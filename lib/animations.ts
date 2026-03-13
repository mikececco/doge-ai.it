export const EASE = [0.25, 0.1, 0.25, 1] as const;

export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  reveal: 0.4,
  counter: 1.4,
} as const;

export const STAGGER = {
  fast: 0.06,
  normal: 0.08,
  slow: 0.1,
  reveal: 0.1,
} as const;

// Framer Motion variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      delay: i * STAGGER.normal,
      ease: EASE,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.normal,
    },
  },
};

export const scaleX = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: DURATION.slow, ease: EASE },
  },
};
