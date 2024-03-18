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
        app: () => import(appName).then(m => console.log(m)) as Promise<LifeCycles>,
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
