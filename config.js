module.exports.conf = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "11",
        deviceName: "emulator-5554",
        app: "C:/Users/Mazen/Downloads/com.robusta.befit.127.apk",
        appPackage: "com.robusta.befit",
        appActivity: "com.robusta.befit.features.splash.SplashActivity",
        automationName: "UiAutomator2"
    }
};
