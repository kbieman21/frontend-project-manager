import axios from "axios";


export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers:{
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzFjYjg0NzViYTYwZGZmNDVkM2NjZiIsInVzZXJuYW1lIjoidXNlcjExMSIsImVtYWlsIjoidXNlcjExMUB0ZXN0LmNvbSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTc2NDk3NDAyNywiZXhwIjoxNzY1MDYwNDI3fQ.Q93K-44UYN0mY1LZY2rj4Xjk4vM5w-mA-OKSIBleSF8"
    }
});