
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

const MarkdownItContainer = require('markdown-it-container')
const striptags = require('./strip-tags')

const vueMarkdown = {
    preprocess: (MarkdownIt, source) => {
        MarkdownIt.renderer.rules.table_open = function () {
        return '<table class="table">'
        }
        MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
        return source
    },
    use: [
        [MarkdownItContainer, 'demo', {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: function(tokens, idx) {

            var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

            if (tokens[idx].nesting === 1) {
            var desc = tokens[idx + 2].content;
            const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
            // 移除描述，防止被添加到代码块
            tokens[idx + 2].children = [];

            return `<demo-block>
                            <div slot="desc">${html}</div>
                            <div slot="highlight">`;
            }
            return '</div></demo-block>\n';
        }
        }]
    ]
}

module.exports = {
    // 加载器
    module: {
        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
        rules: [
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader',
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?sourceMap'
                ]
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader',
                options: vueMarkdown
            }
        ]
    },
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader',
        },
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
