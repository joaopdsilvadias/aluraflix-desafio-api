import { format } from 'date-fns';

const logger = {
    info: (message: string) => {
        console.log('[INFO]', format(new Date(), 'dd/MM/yyyy HH:mm:ss'), message);
    },

    sucess: (message: string) => {
        console.log('[SUCESS]', format(new Date(), 'dd/MM/yyyy HH:mm:ss'), message);
    },

    error: (message: string) => {
        console.log('[ERROR]', format(new Date(), 'dd/MM/yyyy HH:mm:ss'), message);
    },

    debug: (message: string) => {
        console.log('[DEBUG]', format(new Date(), 'dd/MM/yyyy HH:mm:ss'), message);
    }
}

export default logger;