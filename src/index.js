import app from './app'

const run = () => {
    if (process.env.NODE_ENV === 'development') {
        app.use(require('morgan')('dev'))
    }

    app.listen(process.env.PORT || 80, () => {
        console.log(`Server running on \x1b[33mhttp://${process.env.HOST}:${process.env.PORT}\x1b[0m`);
        console.log(new Date());
    })
}

run()