var React = require('react')
var ReactDOM = require('react-dom')
var routes = require('./config/routes')
var Raven = require('raven-js')

var sentryKey = '1a7f8dc1168241aface4e8c1b45eb2f5'
var sentryApp = '108499'
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp

var _APP_INFO = {
    name: 'Github Battle',
    branch: 'video4',
    version: '1.0'
}

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch,
    }
}).install()

console.log(window.thing.nope)

ReactDOM.render(
    routes,
    document.getElementById('app')
)
