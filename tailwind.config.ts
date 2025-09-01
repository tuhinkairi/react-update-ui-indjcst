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
        primary: '#A52A2A',         // CTAs, highlights
        primaryHover: '#3F1010',    // CTA hover
        dark: '#1A1A1A',            // Deep black text
        primary_bg: '#f9f9f9',       // Background sections
        divider: '#A52A2A',         // Dividers, outlines
        primaryText: '#333333',        // Base paragraph text
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
