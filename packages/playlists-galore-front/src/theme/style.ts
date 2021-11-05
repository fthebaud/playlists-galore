// MUI uses a recommended 8px scaling factor by default. https://material.io/design/layout/understanding-layout.html#layout-anatomy
export const SPACING = 8;

export const BORDER_RADIUS = {
  BASE: 4,
  LG: 8,
  XL: 16,
};

export const FONT = {
  FAMILY: 'Verdana, Geneva, Tahoma, sans-serif',
  // Sizes are given in pixel for 1rem = 16px
  SIZE: {
    '3XS': '0.5rem', // 8px
    '2XS': '0.625rem', // 10px
    XS: '0.75rem', // 12px
    SM: '0.875rem', // 14px
    BASE: '1rem', // 16px
    LG: '1.125rem', // 18px - h6
    XL: '1.25rem', // 20px - h5
    '2XL': '1.5rem', // 24px - h4
    '3XL': '1.75rem', // 28px - h3
    '4XL': '2rem', // 32px - h2
    '5XL': '2.375rem', // 38px - h1
  },
  WEIGHT: {
    THIN: 100,
    EXTRALIGHT: 200,
    LIGHT: 300,
    NORMAL: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
    EXTRABOLD: 800,
    BLACK: 900,
  },
};
