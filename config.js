require('dotenv').config()

const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        develpment: {
            dialect: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: process.env.DEV_DB_PASS,
            port: 5432,
            database: 'posts-db',
            define: {
                timestamps: true, 
                underscored: true, 
                underscoredAll: true
            }
        }
    }    
}

module.exports = configs