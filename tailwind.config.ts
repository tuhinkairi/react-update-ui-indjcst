import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        peach: {
          100: '#FCEFE5',
          200: '#F5D5B2',
        },
        primary: '#5C6BC0',         // CTAs, highlights
        primaryHover: '#2B325A',    // CTA hover
        dark: '#1A1A1A',            // Deep black text
        primary_bg: '#f9f9f9',       // Background sections
        divider: '#5C6BC0',         // Dividers, outlines
        primaryText: '#5C6BC0',        // Base paragraph text
        secondaryText: '#6B7280',           // Secondary text (gray-600)
        paragraph: '#6B7280',           // Secondary text (gray-600)
        whiteText: '#FFFFFF',           // White (default)
        accentBlue: '#007BFF',      // Link / hover
        warning: '#FBBF24',         // Icons / highlights
        notification_dark: '#1e293b',        // Footer or strong sections
        notification: '#EBF4FF',        // Notification / info backgrounds
      }
    }
  }
};

export default config;
