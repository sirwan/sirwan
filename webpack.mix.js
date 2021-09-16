const mix = require('laravel-mix');

mix.autoload({
    jquery: ['$', 'window.jQuery']
});

mix.options({
    processCssUrls: true,
})

mix.sass('src/styles/style.scss', '/asset/styles');