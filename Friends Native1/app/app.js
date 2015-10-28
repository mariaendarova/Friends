var application = require("application");
application.mainModule = "./views/main-page";

/*
 * Define constants which we will use across the application
 */
global.BS_API_KEY = "cqEtBKgyuanxgE06";
global.BS_SCHEME = "http";
global.BS_URL = "";
global.TOKEN_DATA_KEY = "authenticationToken";
global.USER_ID = "userId";
global.EVERLIVE = null;
global.MONITOR = null;

application.onLaunch = function (context) {
    // For Android applications, the context is an android.content.Intent class.
    // For iOS applications, the context is undefined.
    if (application.android) {
        console.log("Launched Android application with the following intent: " + context + ".");
    }
    else if (application.ios) {
        console.log("Launched iOS application.");
        // Workaround for a bug in the iOS runtime version 1.2.2, should be fixed with next version
        // This constant is used in the location module but must be referenced earlier on so that the appropriate iOS framework can be loaded
        kCLDistanceFilterNone;
    }
};

application.onSuspend = function () {
    console.log("Application suspended.");
};

application.onResume = function () {
    console.log("Application resumed.");
};

application.onExit = function () {
    console.log("Application will exit.");
    if(MONITOR !== null){
        MONITOR.stop();
    }
};

application.onLowMemory = function () {
    console.log("Memory is low.");
};

application.onUncaughtError = function (error) {
    console.log("Application error: " + error.name + "; " + error.message + "; " + error.nativeError);
};

application.start();