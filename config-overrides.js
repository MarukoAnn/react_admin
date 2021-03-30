const {override, fixBabelImports} = require('customize-cra')

const path = require('path')

module.exports = override(
    fixBabelImports('antd', {
        libraryDirectory: 'es',
        style: 'scss'
    }),
    (config) => {

        // 暴露webpack的配置config
        const paths = require('react-scripts/config/paths')

        paths.appBuild =  path.join(path.dirname(paths.appBuild), 'dist/web-admin');

        config.output.path = paths.appBuild;

        // 配置访问子目录 /web-admin/
        // paths.publicUrlOrPath = '/web-admin/';
        // config.output.publicPath = '/web-admin/';

        return config;
    }
)

