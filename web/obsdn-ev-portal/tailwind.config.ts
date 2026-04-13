import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // The Intelligence (Cobalt)
        cobalt: {
          100: '#D6DEFF',
          300: '#7A98FF',
          400: '#5277FF',
          500: '#2D5BFF',
          600: '#1A44E8',
        },
        // The Void (Neutral)
        void: {
          100: '#C7C7CC',
          200: '#AEAEB2',
          300: '#8E8E93',
          400: '#636366',
          500: '#48484A',
          600: '#3A3A3C',
          700: '#2C2C2E',
          800: '#1C1C1E',
          900: '#111113',
          950: '#0A0A0B',
        },
        // The Signal
        signal: {
          white: '#F2F2F7',
        },
        // Semantic
        success: '#30D158',
        'success-bg': '#0D3B1E',
        warning: '#FFD60A',
        'warning-bg': '#3B3000',
        error: '#FF453A',
        'error-bg': '#3B0D0A',
        // Legacy aliases (backward compatibility)
        cobaltDefault: '#2D5BFF',
      },
      fontFamily: {
        display: ['Syncopate', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', "'JetBrains Mono'", "'Courier New'", 'monospace'],
      },
      fontSize: {
        'xs':   ['11px', { lineHeight: '16px', letterSpacing: '0' }],
        'sm':   ['13px', { lineHeight: '20px', letterSpacing: '0' }],
        'base': ['15px', { lineHeight: '24px', letterSpacing: '0' }],
        'md':   ['17px', { lineHeight: '28px', letterSpacing: '0' }],
        'lg':   ['20px', { lineHeight: '32px', letterSpacing: '0' }],
        'xl':   ['24px', { lineHeight: '36px', letterSpacing: '0.02em' }],
        '2xl':  ['32px', { lineHeight: '44px', letterSpacing: '0.04em' }],
        '3xl':  ['48px', { lineHeight: '60px', letterSpacing: '0.08em' }],
        'hero': ['clamp(56px,8vw,96px)', { lineHeight: '1.0', letterSpacing: '0.10em' }],
        // Mono sub-scale
        'mono-sm':   ['13px', { lineHeight: '20px' }],
        'mono-base': ['15px', { lineHeight: '24px' }],
        'mono-lg':   ['20px', { lineHeight: '32px' }],
        'mono-xl':   ['28px', { lineHeight: '40px' }],
      },
      letterSpacing: {
        tight:   '0em',
        normal:  '0.02em',
        wide:    '0.04em',
        wider:   '0.08em',
        widest:  '0.10em',
        label:   '0.04em',  // form labels, nav
        brand:   '0.30em',  // mono brand labels ("@obsdn.ev")
        caps:    '0.40em',  // small caps trackers
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      borderRadius: {
        'sm':   '4px',
        'md':   '8px',
        'lg':   '12px',
        'xl':   '16px',
        'full': '9999px',
      },
      maxWidth: {
        'container-sm': '640px',
        'container-md': '960px',
        'container-lg': '1280px',
        'container-xl': '1440px',
      },
      boxShadow: {
        'glow-cobalt':    '0 0 24px rgba(45, 91, 255, 0.35)',
        'glow-cobalt-sm': '0 0 12px rgba(45, 91, 255, 0.25)',
        'glow-cobalt-lg': '0 0 48px rgba(45, 91, 255, 0.55)',
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'ambient-glow': 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(45,91,255,0.08) 0%, transparent 70%)',
        'ambient-hero': 'radial-gradient(ellipse 100% 80% at 50% -10%, rgba(45,91,255,0.12) 0%, transparent 60%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'breath':     'breath 4s ease-in-out infinite',
        'fade-up':    'fadeUp 0.5s cubic-bezier(0,0,0.2,1) forwards',
        'shimmer':    'shimmer 1.5s linear infinite',
        'slide-down': 'slideDown 0.3s cubic-bezier(0,0,0.2,1)',
      },
      keyframes: {
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 12px rgba(45,91,255,0.25)' },
          '50%':     { boxShadow: '0 0 40px rgba(45,91,255,0.65)' },
        },
        breath: {
          '0%,100%': { opacity: '0.06', transform: 'scale(1)' },
          '50%':     { opacity: '0.10', transform: 'scale(1.05)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'appear':   'cubic-bezier(0.0, 0.0, 0.2, 1)',
        'exit':     'cubic-bezier(0.4, 0.0, 1, 1)',
        'standard': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        'instant':  '100ms',
        'fast':     '150ms',
        'base':     '200ms',
        'moderate': '300ms',
        'slow':     '500ms',
        'ambient':  '3000ms',
      },
      height: {
        'btn-sm': '36px',
        'btn-md': '48px',
        'btn-lg': '56px',
      },
    },
  },
  plugins: [],
};

export default config;
