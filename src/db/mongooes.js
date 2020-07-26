const mongooes=require('mongoose')

mongooes.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
