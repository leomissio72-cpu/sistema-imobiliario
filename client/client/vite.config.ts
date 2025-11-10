import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Obtenha o nome do repositório para usar como base.
// O nome do seu repositório é 'sistema-imobiliario'
const repoName = 'sistema-imobiliario'; 

export default defineConfig({
  plugins: [react()],
  // Define o caminho base como /nome-do-repositorio/
  base: `/${repoName}/`, 
})
