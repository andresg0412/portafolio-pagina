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

# Usa una imagen de servidor Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos desde la imagen anterior a la carpeta predeterminada de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto en el que Nginx servirá la aplicación
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
