"use strict";
exports.__esModule = true;
exports.routes = void 0;
var welcome_component_1 = require("./welcome/welcome.component");
var home_component_1 = require("./home/home.component");
// Use export const to export the routes
exports.routes = [
    { path: '', component: welcome_component_1.WelcomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
];
