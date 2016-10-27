var axios = require('axios')

var id = "1dfa798fc2b1daf48100"
var sec = "b980ca193ea5a101f3abee2112dc0f29b4292299"
var param = "?client_id=" + id + "&client_secret=" + sec

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
    getPlayersInfo: function(players) {
        return axios.all(players.map(function(username) {
            return getUserInfo(username)
        })).then(function (info) {
            return info.map(function (user) {
                return user.data
            })
        }).catch(function (err) {
            console.warn('Error in getPlayersInfo', err)
        })
    }
}

module.exports = helpers
