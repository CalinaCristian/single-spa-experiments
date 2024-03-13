import {
    LifeCycles,
    navigateToUrl,
    registerApplication,
    start,
} from 'single-spa';

import manifest from './manifest.json';

Object.entries(manifest).forEach(([appName, appRoute]) => {
    registerApplication({
        name: appName,
        app: () => System.import(appName) as Promise<LifeCycles>,
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
