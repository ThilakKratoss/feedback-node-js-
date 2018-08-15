if(process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI :'mongodb://praveen:praveen1@ds121312.mlab.com:21312/phoenicorn'}
}else{
    module.exports = {mongoURI : 'mongodb://localhost/phoenicorn'}
}