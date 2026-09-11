import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/OIT-GPA-Calculator/',
    plugins: [tailwindcss()],
  };
});
