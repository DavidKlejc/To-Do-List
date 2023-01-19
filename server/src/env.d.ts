declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT_NUMBER: number,
            MONGO_URL: string,
        }
    }
}

export { }