import {
    LifeCycles,
    navigateToUrl,
    registerApplication,
    start,
} from 'single-spa';

import manifest from './manifest.json';
console.log(manifest);
Object.entries(manifest).forEach(([appName, appRoute]) => {
    console.log(appName, appRoute)
    registerApplication({
        name: appName,
        app: (...args) => {
            console.log('loading', appName, args);
            return import(/* webpackIgnore: true */ appName).then(module => {
                console.log('module', module);
                return module;
            })
        },
        activeWhen: appRoute
    });
});

document.querySelectorAll('#nav a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToUrl(a.getAttribute('href'));
    });
})

start();
