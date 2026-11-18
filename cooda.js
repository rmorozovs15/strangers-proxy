let method = $request.method;
let storeKey = "coda_user_settings_data";
let savedDataStr = $persistentStore.read(storeKey);
let savedSettings = {};

if (savedDataStr) {
    try { savedSettings = JSON.parse(savedDataStr); } catch (e) {}
}

const baseProfile = {
    "success": true,
    "email": "rmorozovs123@gmail.com",
    "name": "Roman",
    "licenseKeyHash": "9f6108d7f6c03c4598fd534aebecad4f8e8aa9f6c36610561ade31d3affe22eb",
    "apnsToken": null,
    "codeLength": 4,
    "buttonShape": "square",
    "buttonStyleKind": "flat",
    "buttonColorHex": "#15151C",
    "dotsDisplay": "show",
    "useBGImage": false,
    "bgColorHex": "#0A0A0F",
    "mainTitle": "",
    "subtitle": "",
    "showBottomButtons": false,
    "bottomLeftLabel": "",
    "bottomRightLabel": "",
    "buttonSize": "large",
    "buttonsPerRow": 3,
    "buttonAlignment": "center",
    "showLetters": false,
    "useGetReady": false,
    "autoKill": false,
    "pushNotificationsEnabled": false,
    "bgImageId": "",
    "liveCode": "",
    "imageApiKey": null,
    "unlockOnAttempt": null,
    "aiCleanup": null,
    "showPickerOnLaunch": null,
    "runShortcutOnLaunch": null,
    "proId": null,
    "revealApp": null,
    "spectreUnlock": null,
    "spectreType": null,
    "spectreInitialDelay": null,
    "spectreVibrateDelay": null,
    "spectreInputDelay": null,
    "screenshotDarkId": null,
    "screenshotLightId": null,
    "redirectURL": null,
    "lastCapture": null,
    "lastCaptureAt": null,
    "spectreAutoKill": null,
    "getReadyTitle1": null,
    "getReadySubtitle1": null,
    "getReadyTitle2": null,
    "getReadyTitle3": null,
    "getReadySubtitle2": null,
    "getReadyBadge": null,
    "getReadyButton": null,
    "nativeCodeLength": null,
    "peekLastCode": null,
    "keypadType": null,
    "shortcutSource": null,
    "wallpaperSource": null,
    "getReadyLowerAction": null,
    "getReadyBootSkip": null,
    "getReadyPickerAction": null,
    "lockDesign": null,
    "getReadyDesign": null,
    "calcDesign": null,
    "notesDesign": null,
    "shortcutFileId": null,
    "shortcutLink": null,
    "shortcutName": null,
    "shortcutFileName": null,
    "pinnedSettings": [],
    "getReadyEnabled": null,
    "shortcutOnLongPressZero": null,
    "shortcutOnVolumeDown": null,
    "shortcutThenPicker": null,
    "shortcutReceiveData": null,
    "pickerOnVolumeUp": null,
    "pickerOnLongPressZero": null,
    "pasteOnLongPress": null,
    "pickerOnTitleTap": null,
    "allowRemoteWallpaper": null,
    "pickerScreenshotsOnly": null,
    "calcTopLeftOpensCalculator": null,
    "calcHistoryPeek": null,
    "calcLongPressReset": null,
    "calcOpensSettings": null,
    "calcHoldRevealsCode": null,
    "notesTopLeftOpensNotes": null,
    "notesOpensSettings": null,
    "notesHoldRevealsCode": null,
    "presetsJSON": null,
    "lastCaptureSource": null,
    "$id": "applereview",
    "$createdAt": "2026-08-31T10:50:24.104+00:00",
    "$updatedAt": "2026-08-31T10:50:24.104+00:00",
    "$permissions": ["read(\"any\")"],
    "$databaseId": "coda_db",
    "$collectionId": "users",
    "data": "{\"buttonsPerRow\":3,\"useBGImage\":false,\"screenshotLightId\":\"\",\"calcOpensSettings\":false,\"pushNotificationsEnabled\":false,\"getReadyTitle3\":\"\",\"bgColorHex\":\"#0A0A0F\",\"spectreVibrateDelay\":1,\"calcDesign\":\"\",\"buttonStyleKind\":\"flat\",\"revealApp\":\"calculator\",\"shortcutOnLongPressZero\":false,\"keypadType\":\"classic\",\"shortcutLink\":\"\",\"spectreInputDelay\":1,\"getReadyBadge\":\"\",\"pickerOnLongPressZero\":false,\"notesHoldRevealsCode\":false,\"notesDesign\":\"\",\"bottomRightLabel\":\"\",\"getReadySubtitle1\":\"\",\"shortcutFileId\":\"\",\"subtitle\":\"\",\"getReadyEnabled\":false,\"bottomLeftLabel\":\"\",\"unlockOnAttempt\":1,\"calcHoldRevealsCode\":false,\"shortcutOnVolumeDown\":false,\"pinnedSettings\":[],\"notesTopLeftOpensNotes\":false,\"peekLastCode\":false,\"shortcutSource\":\"none\",\"getReadyBootSkip\":\"doubleTap\",\"showPickerOnLaunch\":true,\"buttonAlignment\":\"center\",\"calcLongPressReset\":false,\"pickerOnTitleTap\":false,\"aiCleanup\":false,\"autoKill\":false,\"redirectURL\":\"\",\"getReadyPickerAction\":\"nothing\",\"getReadyTitle1\":\"\",\"bgImageId\":\"\",\"notesOpensSettings\":false,\"screenshotDarkId\":\"\",\"nativeCodeLength\":6,\"pickerOnVolumeUp\":false,\"calcTopLeftOpensCalculator\":false,\"showLetters\":false,\"buttonColorHex\":\"#15151C\",\"spectreType\":\"basic\",\"getReadyLowerAction\":\"nothing\",\"spectreInitialDelay\":2,\"allowRemoteWallpaper\":false,\"mainTitle\":\"\",\"showBottomButtons\":false,\"lockDesign\":\"\",\"shortcutName\":\"\",\"getReadySubtitle2\":\"\",\"pickerScreenshotsOnly\":false,\"shortcutThenPicker\":false,\"presetsJSON\":\"[]\",\"calcHistoryPeek\":false,\"spectreAutoKill\":false,\"dotsDisplay\":\"show\",\"codeLength\":4,\"buttonSize\":\"large\",\"getReadyButton\":\"\",\"getReadyTitle2\":\"\",\"pasteOnLongPress\":false,\"runShortcutOnLaunch\":false,\"buttonShape\":\"square\",\"shortcutReceiveData\":false,\"shortcutFileName\":\"\",\"spectreUnlock\":false,\"getReadyDesign\":\"\",\"wallpaperSource\":\"color\"}"
};

let baseDataObj = {};
try { baseDataObj = JSON.parse(baseProfile.data); } catch(e) {}

if (method === "PATCH" || method === "PUT") {
    if ($request.body) {
        try {
            let reqBody = JSON.parse($request.body);
            if (reqBody.data) {
                let newChanges = typeof reqBody.data === 'string' ? JSON.parse(reqBody.data) : reqBody.data;
                savedSettings = Object.assign({}, savedSettings, newChanges);
                $persistentStore.write(JSON.stringify(savedSettings), storeKey);
            } else {
                savedSettings = Object.assign({}, savedSettings, reqBody);
                $persistentStore.write(JSON.stringify(savedSettings), storeKey);
            }
        } catch (e) {}
    }
}

let finalDataObj = Object.assign({}, baseDataObj, savedSettings);
baseProfile.data = JSON.stringify(finalDataObj);
let finalProfile = Object.assign({}, baseProfile, savedSettings);
finalProfile.data = baseProfile.data;

$done({ 
    status: 200, 
    body: JSON.stringify(finalProfile), 
    headers: { "Content-Type": "application/json" } 
});