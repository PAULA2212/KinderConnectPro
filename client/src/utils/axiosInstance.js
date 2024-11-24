import axios from 'axios';

// Obtener la URL base desde una variable de entorno o usar una por defecto (local)
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

// Crear una instancia de Axios con configuración predeterminada
const axiosInstance = axios.create({
    baseURL, // URL base para la API que se usará en todas las solicitudes
    timeout: 20000, // Tiempo máximo de espera para la respuesta (en milisegundos)
});

// Exportar la instancia de Axios para ser utilizada en otros módulos
export default axiosInstance;
