let bodyStr = $response.body || "";
let body = {};

try {
    body = JSON.parse(bodyStr);
} catch (e) {
    $done({ body: bodyStr });
    return;
}

if (
    (body.functionId === "activateLicense") || 
    (body.responseBody && body.responseBody.includes("userId must be 3-36 characters"))
) {
    body.responseStatusCode = 200;
    body.functionId = "activateViaPurchase";
    body.responseBody = JSON.stringify({
        success: true,
        message: "Purchase activated successfully",
        licenseStatus: "active",
        purchaseStatus: "active"
    });
    body.$updatedAt = new Date().toISOString();
}

$done({ body: JSON.stringify(body) });