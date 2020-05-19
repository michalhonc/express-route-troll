exports.routeTroll = function(options) {
    var defaultRoutes = ['/.env', '/wp-admin', '/wp-login.php'];
    var defaultRedirectUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    var routes = defaultRoutes;
    var redirectUrl = defaultRedirectUrl;
    if (options) {
        routes = options.routes || defaultRoutes;
        redirectUrl = options.redirectUrl || defaultRedirectUrl;
    }

    return function(req, res, next) {
        if (Array.isArray(routes) && routes.some((route) => route === req.path)) {
            res.redirect(redirectUrl);
        }
        next();
    }
}
