# Animated Portfolio

A one-page animated portfolio built with React, Vite and Framer Motion: a hero section, parallax backgrounds, a services section, scroll-driven project showcases, a custom cursor and a contact form that sends email through EmailJS.

![Screenshot](public/Screenshot%202024-02-17%20190115.png)

## Features

- **Framer Motion animations:** hero entrance, scroll-linked parallax and portfolio items that animate with scroll position.
- **Sidebar menu** with an animated toggle button.
- **Custom cursor** that follows the pointer.
- **Contact form** that sends email from the browser with EmailJS.
- **Sass** styles, one stylesheet per component.

## Stack

React 18 · Vite · Framer Motion · Sass · EmailJS

## Project structure

```
src/components/
├─ navbar/      top bar
├─ sidebar/     slide-out menu and its toggle
├─ hero/        intro section
├─ parallax/    parallax background sections
├─ services/    services section
├─ portfolio/   scroll-animated project showcase
├─ contact/     contact form (EmailJS)
└─ cursor/      custom cursor
```

## Run it locally

```bash
git clone https://github.com/motlagh-parsa/Animated-Portfolio-Resume.git
cd Animated-Portfolio-Resume
npm install
npm run dev        # http://localhost:5173
```

The contact form needs your own EmailJS service, template and public key in `src/components/contact/Contact.jsx`.
