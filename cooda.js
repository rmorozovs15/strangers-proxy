const method = String($request.method || "").toUpperCase();
const requestUrl = String($request.url || "");
const isAccountEndpoint = /^https:\/\/appwrite\.digitalforestapp\.xyz\/v1\/account(?:[/?]|$)/i.test(requestUrl);
const isRequestPhase = typeof $response === "undefined";
const storeKey = "coda_user_settings_data";

function parseObject(value) {
    if (value && typeof value === "object" && !Array.isArray(value)) return value;
    if (typeof value !== "string" || !value.trim()) return null;

    try {
        const parsed = JSON.parse(value);
        return parsed && typeof parsed === "object" && !Array.isArray(parsed)
            ? parsed : null;
    } catch (e) {
        // Some app requests send form-encoded values instead of JSON.
        if (value.indexOf("=") < 0) return null;
        const form = {};
        value.split("&").forEach(function (part) {
            const index = part.indexOf("=");
            if (index < 0) return;
            try {
                const key = decodeURIComponent(part.slice(0, index).replace(/\+/g, " "));
                const item = decodeURIComponent(part.slice(index + 1).replace(/\+/g, " "));
                form[key] = item;
            } catch (error) {}
        });
        return Object.keys(form).length ? form : null;
    }
}

const savedSettings = Object.assign({}, parseObject($persistentStore.read(storeKey)) || {});

const baseProfile = {
    "success": true,
    "email": "",
    "name": "",
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

// Read only the account's own profile fields, including Appwrite's nested data.
function extractIdentity(payload) {
    const root = parseObject(payload);
    if (!root) return {};
    const queue = [root];
    const result = {};

    for (let i = 0; i < queue.length && i < 16; i++) {
        const item = queue[i];
        if (!item) continue;

        const email = item.email || item.userEmail || item.user_email;
        const name = item.name || item.displayName || item.fullName || item.full_name || item.userName;

        if (!result.email && typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            result.email = email.trim();
        }
        if (!result.name && typeof name === "string" && name.trim()) {
            result.name = name.trim();
        }

        ["data", "user", "profile", "document"].forEach(function (key) {
            const nested = parseObject(item[key]);
            if (nested) queue.push(nested);
        });
        if (Array.isArray(item.documents) && item.documents.length) {
            const document = parseObject(item.documents[0]);
            if (document) queue.push(document);
        }
    }
    return result;
}

const requestBody = parseObject($request.body);
const responseBody = isRequestPhase ? null : parseObject($response.body);
const mutation = method === "POST" || method === "PATCH" || method === "PUT";
let shouldSave = false;

// Only store known app settings, never passwords, tokens, or unrelated request fields.
if (mutation && requestBody) {
    const inputData = parseObject(requestBody.data) || parseObject(requestBody.settings) || requestBody;
    Object.keys(baseDataObj).forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(inputData, key)) {
            savedSettings[key] = inputData[key];
            shouldSave = true;
        }
    });
}

// What the person typed has priority over any default returned by the backend.
const identity = Object.assign({}, extractIdentity(responseBody), extractIdentity(requestBody));
Object.keys(identity).forEach(function (key) {
    if (mutation || isAccountEndpoint || !savedSettings[key]) {
        if (savedSettings[key] !== identity[key]) {
            savedSettings[key] = identity[key];
            shouldSave = true;
        }
    }
});

if (shouldSave) {
    $persistentStore.write(JSON.stringify(savedSettings), storeKey);
}

const finalDataObj = Object.assign({}, baseDataObj);
Object.keys(baseDataObj).forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(savedSettings, key)) {
        finalDataObj[key] = savedSettings[key];
    }
});

const finalProfile = Object.assign({}, baseProfile, {
    email: typeof savedSettings.email === "string" ? savedSettings.email : "",
    name: typeof savedSettings.name === "string" ? savedSettings.name : "",
    data: JSON.stringify(finalDataObj)
});

// Requests are sent unchanged. Account responses are also passed through:
// the sole purpose of observing them is to remember the user's own identity.
if (isRequestPhase || isAccountEndpoint) {
    $done({});
} else {
    $done({
        status: 200,
        body: JSON.stringify(finalProfile),
        headers: { "Content-Type": "application/json" }
    });
}
