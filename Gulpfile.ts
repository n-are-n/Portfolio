import haml from 'gulp-haml'
import styl from 'gulp-stylus'
import ts from 'gulp-typescript'
import server from 'browser-sync'
import { src, dest, watch, parallel } from 'gulp'
const Server = () => {
    server.init({
        server: {
            baseDir: './'
        }
    })
}
// Markups
const HAML = () => {
    watch('**/*.haml', {
        delay: 100
    }, (cb) => {
        src('assets/haml/index.haml').pipe(haml()).pipe(dest('./'))
        cb()
    })
}
const HTML = () => {
    watch('**/*.html',{ 
        delay: 50 
    }, (cb) => {
        src('./index.html').on( 'change', server.reload())
        cb()
    })
}
// Styles
const STYL = () => {
    watch('**/*.styl', {
        delay: 100
    }, (cb) => {
        src('assets/styl/style.styl').pipe(styl()).pipe(dest('assets/css/'))
        cb()
    })
}
const CSS = () => {
    watch('**/*.css', {
        delay: 50
    }, (cb) => {
        src('assets/css/style.css').on( 'change', server.reload())
        cb()
    })
}
// Scripts
const TS = () => {
    watch('**/*.ts', {
        delay: 100
    }, (cb) => {
        src('assets/ts/script.ts').pipe(ts()).pipe(dest('assets/js/'))
        cb()
    })
}
const JS = () => {
    watch('**/*.js', {
        delay: 50
    }, (cb) => {
        src('assets/js/script.js').on( 'change', server.reload())
        cb()
    })
}
exports.default = parallel(Server, HAML, HTML, STYL, CSS, TS, JS)