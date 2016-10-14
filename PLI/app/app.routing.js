"use strict";
var router_1 = require('@angular/router');
var header_component_1 = require('./header.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/header',
        pathMatch: 'full'
    },
    {
        path: 'header',
        component: header_component_1.HeaderComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map