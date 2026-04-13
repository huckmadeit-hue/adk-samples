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
        obsidian: {
          DEFAULT: '#0A0A0B',
          surface: '#1C1C1E',
          elevated: '#2C2C2E',
          border: '#3A3A3C',
        },
        cobalt: {
          DEFAULT: '#2D5BFF',
          hover: '#4A6FFF',
          dim: '#1A3ACC',
          glow: 'rgba(45,91,255,0.35)',
        },
        neural: {
          white: '#F2F2F7',
          muted: 'rgba(242,242,247,0.60)',
          dim: 'rgba(242,242,247,0.35)',
        },
        status: {
          active: '#2D5BFF',
          pending: '#F5A623',
          overdue: '#FF3B30',
          success: '#30D158',
        },
      },
      fontFamily: {
        syncopate: ['var(--font-syncopate)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'breath': 'breath 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45,91,255,0.35)' },
          '50%': { boxShadow: '0 0 40px rgba(45,91,255,0.65)' },
        },
        breath: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'ambient-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(45,91,255,0.18) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
