(function (window) {
    window.__env = window.__env || {};

    // API url
    window.__env.currentLogo = 'assets/logo/logo-blue.svg';

    // API url
    window.__env.apiUrl = '';

    // Base url
    window.__env.baseUrl = '/';

    // type environment
    window.__env.typeEnv = 'developer';

    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = true;
}(this));

const firebaseConfig = {
    apiKey: "AIzaSyCzDmG1PE05AOmdBkTz83uRkJBOLz28zjw",
    authDomain: "todone-bbc1e.firebaseapp.com",
    databaseURL: "https://todone-bbc1e.firebaseio.com",
    projectId: "todone-bbc1e",
    storageBucket: "todone-bbc1e.appspot.com",
    messagingSenderId: "543380855614",
    appId: "1:543380855614:web:e633988a8930001b"
};
