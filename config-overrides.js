const {
    override,
} = require('customize-cra');

const addChunkName = () => (config) => {
    config.output = {
        ...config.output,
        chunkFilename: '[name].[chunkhash].js',
    };
    return config;
};

module.exports = override(
    addChunkName(),
);
