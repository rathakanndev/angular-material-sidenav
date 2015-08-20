'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
    .module('demoApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'ui.router',
        'sasrio.angular-material-sidenav'
    ])
    .config([
        '$mdThemingProvider',
        '$locationProvider',
        '$urlRouterProvider',
        '$stateProvider',
        'ssSideNavSectionsProvider',
        function (
            $mdThemingProvider,
            $locationProvider,
            $urlRouterProvider,
            $stateProvider,
            ssSideNavSectionsProvider) {

            $mdThemingProvider
                .theme('default')
                .primaryPalette('blue', {
                    'default': '700'
                });

            $urlRouterProvider.otherwise(function () {
                return '/';
            });

            $stateProvider.state({
                name: 'common',
                abstract: true,
                templateUrl: 'views/_common.html',
                controller: 'CommonCtrl'
            });

            $stateProvider.state({
                name: 'common.home',
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            });

            $stateProvider.state({
                name: 'common.toggle1',
                url: '/toogle1',
                abstract: true,
                template: '<ui-view/>'
            });

            $stateProvider.state({
                name: 'common.toggle1.item1',
                url: '/item1',
                template: 'hello toggle1 item1'
            });

            $stateProvider.state({
                name: 'common.toggle1.item2',
                url: '/item2',
                template: 'hello toggle1 item2'
            });

            $stateProvider.state({
                name: 'common.toggle1.item3',
                url: '/item3',
                template: 'hello toggle1 item3'
            });

            $stateProvider.state({
                name: 'common.link1',
                url: '/link1',
                template: 'hello link1'
            });

            $stateProvider.state({
                name: 'common.link2',
                url: '/link2',
                template: 'hello link2'
            });

            $stateProvider.state({
                name: 'common.link3',
                url: '/link3',
                template: 'hello link3'
            });

            $stateProvider.state({
                name: 'common.toggle2',
                url: '/toogle2',
                abstract: true,
                template: '<ui-view/>'
            });

            $stateProvider.state({
                name: 'common.toggle2.item1',
                url: '/item1',
                template: 'hello toggle2 item1'
            });

            ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
            ssSideNavSectionsProvider.initWithSections([{
                id: 'toogle_1',
                name: 'Section Heading 1',
                type: 'heading',
                children: [{
                    name: 'Toogle 1',
                    type: 'toggle',
                    pages: [{
                        id: 'toogle_1_link_1',
                        name: 'item 1',
                        state: 'common.toggle1.item1'
                    }, {
                        id: 'toogle_1_link_2',
                        name: 'item 2',
                        state: 'common.toggle1.item2',
                        hidden: true
                    }, {
                        id: 'toogle_1_link_3',
                        name: 'item 3',
                        state: 'common.toggle1.item3'
                    }]
                }]
            }, {
                id: 'link_1',
                name: 'Link 1 ',
                state: 'common.link1',
                type: 'link'
            }, {
                id: 'link_2',
                name: 'Link 2',
                state: 'common.link2',
                type: 'link'
            }, {
                id: 'link_3',
                name: 'Link 3',
                state: 'common.link3',
                type: 'link',
                hidden: true
            },  {
                id: 'toogle_2',
                name: 'Section Heading 2',
                type: 'heading',
                children: [{
                    name: 'Toogle 2',
                    type: 'toggle',
                    pages: [{
                        id: 'toogle_2_link_1',
                        name: 'item 1',
                        state: 'common.toggle2.item1'
                    }]
                }]
            }]);
        }
    ]);