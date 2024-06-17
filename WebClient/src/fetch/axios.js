//require('dotenv').config()
import axios from 'axios';


const instance = axios.create({
    baseURL: 'your server host',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance 