module.exports = {
publicPath: process.env.NODE_ENV === 'production'
? '~rohitkul/ax/' //production path
: '/' //development path
}