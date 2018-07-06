let mix = require('laravel-mix');
let build = require('./tasks/build.js');

mix.disableSuccessNotifications();
mix.setPublicPath('source');
mix.webpackConfig({
    plugins: [
        build.jigsaw,
        build.browserSync(),
        build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss']),
    ]
});

mix.scripts([
        'source/_assets/js/jquery.min.js',
        'source/_assets/js/browser.min.js',
        'source/_assets/js/breakpoints.min.js',
        'source/_assets/js/util.js',
        'source/_assets/js/main.js',
    ], 'source/js/main.js')
    .sass('source/_assets/sass/main.scss', 'source/css')
    .sass('source/_assets/sass/noscript.scss', 'source/css/noscript.css')
    .copyDirectory('node_modules/font-awesome/fonts', 'source/fonts')
    .version();
