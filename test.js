// Loon response handler for the exact activateViaPurchase executions URL.
// Intended for local testing of the application's activation response.
const originalBody = $response.body || "";
let body;

try {
    body = JSON.parse(originalBody);
} catch (error) {
    body = null;
}

if (!body || typeof body !== "object" || Array.isArray(body)) {
    $done({});
} else {
    const executionError = typeof body.responseBody === "string" &&
        body.responseBody.includes("userId must be 3-36 characters");

    if (body.functionId === "activateViaPurchase" || executionError) {
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
}
