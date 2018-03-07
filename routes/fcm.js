var FCM = require('fcm-node');
var serverKey = 'AAAAyb6hoWE:APA91bGYv6XuH3dk-g5Th7d9Y6KUAfGhVqYKCSAvJSdx38857uybxBJbnedkZllXXepmXz32YtA-Jqqg-9Jks-HUda_O9eL6J-jJ2WwI5PXGo0TCor8kBBH1a-2j1cAKXb8iTg5Fog94';
var fcm = new FCM(serverKey);
var Promise = require('bluebird');
var debug = require('debug')('fcm');
var wrapper = {

    updateSync() {
        var message = {
            to: '/topics/drishti',
            data: {
                'type': 'EVENT_SYNC'
            }
        };

        var promise = new Promise((resolve,reject)=>{
            fcm.send(message, (err, res) => {
                if (err){
                    debug("Error : ",err);
                    reject(err);
                }
                else{
                    debug("Resolve : ",res);
                    resolve(res);
                }
            })
        })

        return promise;
    },

    updateHighlightSync() {
        var message = {
            to: '/topics/drishti',
            data: {
                'type': 'HIGHLIGHT_SYNC'
            }
        };

        var promise = new Promise((resolve,reject)=>{
            fcm.send(message, (err, res) => {
                if (err){
                    debug("Error : ",err);
                    reject(err);
                }
                else{
                    debug("Resolve : ",res);
                    resolve(res);
                }
            })
        })

        return promise;
    },

    notification(title, body) {
        var message = {
                to: '/topics/drishti' ,
                notification: {
                    'title': title,
                    'body': body
                }
            }

        var promise = new Promise((resolve,reject)=>{
            fcm.send(message, (err, res) => {
                if (err){
                    debug("Error : ",err);
                    reject(err);
                }
                else{
                    debug("Resolve : ",res);
                    resolve(res);
                }
            })
        })

        return promise;
    }
};
module.exports = wrapper;
