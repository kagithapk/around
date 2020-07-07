# around
Around is the social media app clone.

Steps to run this project:

1. npm i in the respective folders, around_UI and around_backend

2. In android_UI, add './android/local.properties' file with the content

sdk.dir=<sdk path>

Example:
sdk.dir=C\:\\Users\\<username>\\AppData\\Local\\Android\\Sdk

3. Install globally, npm i -g react-native-cli nodemon (ignore if installed already)

4. Add baseurl.js in 'around_UI/src/api/' with the content

export const baseurl = {
  baseURL: '<server url>',
};

5. Add manifest.js in 'around_UI/' with the content

export const manifest = {
  WebClientId: <web client id>,
};

6. Add manifest.js in '/around_backend' with the content

module.exports = {
  manifest: {
    WebClientID: <web client id>,
  },
};

7. In around_UI, start the application with the command

react-native run-android

In around_backend, start the server with the command

nodemon app.js

Note: If you're running the application in the emulator, then it is recommended to host the server externally (globally).

Example: ngrok 
a) npm i -g ngrok
b) ngrok http <port number> (eg: 1337 by default)
c) Add the ngrok server url in baseurl.js (in step 4)

Happy AROUND!!!
