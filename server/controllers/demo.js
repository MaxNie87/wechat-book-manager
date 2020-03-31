// For Demo
module.exports = async (ctx, next) => {
    ctx.state.data = {
        'demo': 'yes'
    }
}
