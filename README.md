# 🎯 ScrollFocusList

A smooth, scroll-activated list component built with React, Motion, and Lenis. Each list item dynamically scales, fades, and slides into focus as it aligns with the center of the viewport—creating an elegant, minimal, and modern scroll experience.

Perfect for portfolios, feature lists, brand sections, or any UI that needs a subtle but premium interaction.

## ✨ Technologies

- `React`
- `Motion` (motion/react)
- `Lenis` (smooth scrolling)
- `Vite`
- `CSS / SCSS`

## 🚀 Features

- Smooth scrolling powered by Lenis
- Scroll-linked animations using Motion’s `useScroll + useTransform`
- Each list item animates individually when passing through the viewport center
- Scale, opacity, and position transitions inspired by premium websites
- Clean, reusable architecture with a custom hook for scroll animations
- Works on all modern desktop browsers

## 📍 The Process

I wanted to recreate a scroll behavior often seen in high-end websites—where each item “comes alive” as it crosses the viewer’s focus point. I rebuilt the entire interaction with Motion + Lenis, keeping it React-friendly and lightweight.

Each item listens to its own scroll position using `useScroll()` and transforms smoothly between inactive → active → inactive states. The result is a subtle but satisfying effect where the item in the viewport center naturally draws attention.

The component is clean, reusable, and perfect for expanding into multi-column layouts or advanced UI sections.

## 🚦 Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser at: `http://localhost:5173`

## 🎞️ Preview



https://github.com/user-attachments/assets/4b5b7ba5-a737-43b0-b94f-f21a688a6a9c

