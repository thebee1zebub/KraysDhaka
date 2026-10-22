import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
 return {
  base: '/KraysDhaka/',
  plugins: [react(), tailwindcss()],
  // Keep the rest of your existing configuration.
   };
  };
});
