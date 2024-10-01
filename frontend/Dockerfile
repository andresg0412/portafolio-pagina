# Usa la imagen oficial de Node.js como imagen base para construir
FROM node:18 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expone el puerto en el que Nginx servirá la aplicación
EXPOSE 3000

# Comando por defecto para iniciar Nginx
CMD ["npm", "start"]
