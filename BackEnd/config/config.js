//mongoDB
const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://<user>:<password>@cluster0.mseob.mongodb.net/?retryWrites=true&w=majority'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}
