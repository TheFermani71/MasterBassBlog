//mongoDB
const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://alfred:alfred12@cluster0.mseob.mongodb.net/?retryWrites=true&w=majority'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}