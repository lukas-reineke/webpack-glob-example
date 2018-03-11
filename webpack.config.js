const glob = require('glob');

module.exports = () => {

    return {
        mode: 'development',
        entry: () => {
            return glob.sync('./src/*.js').reduce((pre, cur) => {
                pre[cur.replace(/^.*[\\\/]/, '').split('.')[0]] = cur;
                return pre;
            }, {});
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js',
        },
    };
};

