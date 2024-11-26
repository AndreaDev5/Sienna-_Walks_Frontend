import ax from "./axios.js";
//export const registroRequest = user => axios.post('http://localhost:3000/api/registrar', user);
export const registerRequest = (user) => ax.post('/register',user, {
    headers: {
      'Content-Type': 'multipart/form-data', // Especificar que estamos enviando archivos
    },});
//export const loginRequest = user => axios.post('http://localhost:3000/api/iniciar', user);
export const loginRequest = (user) => ax.post('/login',user);

export const verifyToken = () => ax.get('/verify')

export const salir = () => ax.get('/logout')