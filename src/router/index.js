export default function init (Router) {
    let router = new Router({
        history: true,
        transitionOnLoad: true
    });

    router.map({
        '/': {
            component: require('../views/home'),
            name: 'Home',
            title: 'Home'
        },
        '/order': {
            component: require('../views/order'),
            name: 'Order',
            title: 'Order'
        },
        '/product': {
            component: require('../views/product'),
            name: 'Product',
            title: 'Product'
        },
        // 404
        '*': {
            component: {}
        }
    });

    router.beforeEach((transition) => {
        document.title = transition.to.title;
        transition.next();
    });

    router.afterEach(() => {
        $(window).resize();
    });

    return router
}