(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AWS_ACCESS_KEY",
    ()=>AWS_ACCESS_KEY,
    "AWS_ACCESS_KEY_ID",
    ()=>AWS_ACCESS_KEY_ID,
    "AWS_BUCKET",
    ()=>AWS_BUCKET,
    "AWS_REGION",
    ()=>AWS_REGION,
    "AWS_SECRET_ACCESS_KEY",
    ()=>AWS_SECRET_ACCESS_KEY,
    "AWS_SECRET_KEY",
    ()=>AWS_SECRET_KEY,
    "BASE_API_URL",
    ()=>BASE_API_URL,
    "BASE_AUTH_API_URL",
    ()=>BASE_AUTH_API_URL,
    "COGNITO_CLIENT_ID",
    ()=>COGNITO_CLIENT_ID,
    "COGNITO_CLIENT_SECRET",
    ()=>COGNITO_CLIENT_SECRET,
    "DATABASE_URL",
    ()=>DATABASE_URL,
    "NEXT_PUBLIC_RAZORPAY_KEY_ID",
    ()=>NEXT_PUBLIC_RAZORPAY_KEY_ID,
    "NEXT_PUBLIC_S3_BASE_URL",
    ()=>NEXT_PUBLIC_S3_BASE_URL,
    "RAZORPAY_KEY_ID",
    ()=>RAZORPAY_KEY_ID,
    "RAZORPAY_KEY_SECRET",
    ()=>RAZORPAY_KEY_SECRET,
    "USER_POOL_ID",
    ()=>USER_POOL_ID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const DATABASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.DATABASE_URL;
const AWS_REGION = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.AWS_REGION;
const AWS_ACCESS_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.AWS_SECRET_ACCESS_KEY;
const AWS_BUCKET = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.AWS_BUCKET;
const NEXT_PUBLIC_S3_BASE_URL = ("TURBOPACK compile-time value", "https://morzze.s3.ap-south-1.amazonaws.com");
const RAZORPAY_KEY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.RAZORPAY_KEY_SECRET;
const NEXT_PUBLIC_RAZORPAY_KEY_ID = ("TURBOPACK compile-time value", "rzp_test_SdJzsB1BH8Arbm");
const AWS_ACCESS_KEY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.AWS_SECRET_ACCESS_KEY;
const COGNITO_CLIENT_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.COGNITO_CLIENT_ID;
const COGNITO_CLIENT_SECRET = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.COGNITO_CLIENT_SECRET;
const USER_POOL_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.USER_POOL_ID;
const BASE_AUTH_API_URL = ("TURBOPACK compile-time value", "https://www.morzze.com/");
const BASE_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.BASE_API_URL;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/helper/auth/action.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changePassword",
    ()=>changePassword,
    "confirmForgotPassword",
    ()=>confirmForgotPassword,
    "forgotPassword",
    ()=>forgotPassword,
    "isUserLoggedIn",
    ()=>isUserLoggedIn,
    "logout",
    ()=>logout,
    "refreshToken",
    ()=>refreshToken,
    "resendOtp",
    ()=>resendOtp,
    "resendOtpPhone",
    ()=>resendOtpPhone,
    "sendOtpToPhone",
    ()=>sendOtpToPhone,
    "session",
    ()=>session,
    "signIn",
    ()=>signIn,
    "signUp",
    ()=>signUp,
    "verifyOtp",
    ()=>verifyOtp,
    "verifyOtpPhone",
    ()=>verifyOtpPhone
]);
/* eslint-disable @typescript-eslint/no-explicit-any */ var __TURBOPACK__imported__module__$5b$project$5d2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/env.ts [app-client] (ecmascript)");
;
async function request(endpoint, options) {
    try {
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_AUTH_API_URL"]}${endpoint}`, {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            ...options
        });
        // Guard: only parse JSON if the response is actually JSON
        const contentType = res.headers.get("content-type") ?? "";
        if (!contentType.includes("application/json")) {
            throw new Error(`Unexpected response (${res.status}): ${res.statusText}`);
        }
        const data = await res.json();
        if (!res.ok) {
            const error = new Error(data.message || "Something went wrong");
            error.code = data.code;
            error.status = res.status;
            throw error;
        }
        return data;
    } catch (error) {
        const nextError = new Error(error.message);
        nextError.code = error.code;
        nextError.status = error.status;
        throw nextError;
    }
}
async function signUp(payload) {
    return request("/sign-up", {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
async function signIn(payload) {
    return request("/sign-in", {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
async function forgotPassword(email) {
    return request("/forgot-password", {
        method: "POST",
        body: JSON.stringify({
            email
        })
    });
}
async function resendOtp(email) {
    return request("/resend-otp", {
        method: "POST",
        body: JSON.stringify({
            email
        })
    });
}
async function confirmForgotPassword(payload) {
    return request("/confirm-forgot-password", {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
async function verifyOtp(payload) {
    return request("/verify-otp", {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
async function sendOtpToPhone(phone) {
    return request("/send-otp-phone", {
        method: "POST",
        body: JSON.stringify({
            phone
        })
    });
}
async function verifyOtpPhone(payload) {
    return request("/verify-otp-phone", {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
async function resendOtpPhone(phone) {
    return request("/resend-otp-phone", {
        method: "POST",
        body: JSON.stringify({
            phone
        })
    });
}
async function refreshToken(payload) {
    return request("/refersh-token", {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
async function logout() {
    await request("/logout", {
        method: "POST"
    });
}
async function session() {
    return request('/session', {
        method: "GET"
    });
}
async function isUserLoggedIn() {
    try {
        const res = await session();
        return res?.authenticated ?? false;
    } catch (error) {
        console.error("Auth check failed:", error);
        return false;
    }
}
async function changePassword(payload) {
    return request("/change-password", {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/uploadClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /* eslint-disable @typescript-eslint/no-explicit-any */
__turbopack_context__.s([
    "uploadFileToS3",
    ()=>uploadFileToS3
]);
async function uploadFileToS3(file, folder) {
    const res = await fetch("/api/s3_upload", {
        method: "POST",
        body: JSON.stringify({
            fileName: file.name,
            fileType: file.type,
            folder: folder
        })
    });
    if (!res.ok) throw new Error("Failed to get upload URL");
    const { uploadUrl, fileKey } = await res.json();
    const upload = await fetch(uploadUrl, {
        method: "PUT",
        headers: {
            "Content-Type": file.type
        },
        body: file
    });
    if (!upload.ok) throw new Error("Upload failed");
    // ✅ IMPORTANT: build S3 public URL
    const fileUrl = `https://morzze.s3.ap-south-1.amazonaws.com/${fileKey}`;
    return {
        fileKey,
        fileUrl
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/helper/useFileUpload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFileUpload",
    ()=>useFileUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uploadClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/uploadClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
/* eslint-disable @typescript-eslint/no-explicit-any */ "use client";
;
;
function useFileUpload() {
    _s();
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const upload = async (file, folder)=>{
        setUploading(true);
        try {
            const preview = URL.createObjectURL(file);
            const { fileKey, fileUrl } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uploadClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFileToS3"])(file, folder);
            return {
                preview,
                fileKey,
                fileUrl
            };
        } finally{
            setUploading(false);
        }
    };
    return {
        upload,
        uploading
    };
}
_s(useFileUpload, "7fSqO2OqLYyCuGUs/ZTqKghpSFk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/helper/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// category
__turbopack_context__.s([]);
//auth
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$auth$2f$action$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/auth/action.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$useFileUpload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/useFileUpload.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/helper/wishlist/data:1368a6 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToWishlistDB",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"403b872da5d206ee72f73b17ac61207428ca6ba668":{"name":"addToWishlistDB"}},"helper/wishlist/action.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("403b872da5d206ee72f73b17ac61207428ca6ba668", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addToWishlistDB");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/helper/wishlist/data:d5fc73 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeFromWishlistDB",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40eb5ae571f2e2ec1da3d2f1820d49c57142750c57":{"name":"removeFromWishlistDB"}},"helper/wishlist/action.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40eb5ae571f2e2ec1da3d2f1820d49c57142750c57", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "removeFromWishlistDB");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/helper/wishlist/data:dedbfc [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWishlistDB",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00109ec76ae666f9dc58a26c3a9d745d6b0e72d710":{"name":"getWishlistDB"}},"helper/wishlist/action.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00109ec76ae666f9dc58a26c3a9d745d6b0e72d710", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getWishlistDB");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/WishlistContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistProvider",
    ()=>WishlistProvider,
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/helper/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$wishlist$2f$data$3a$1368a6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/helper/wishlist/data:1368a6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$wishlist$2f$data$3a$d5fc73__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/helper/wishlist/data:d5fc73 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$wishlist$2f$data$3a$dedbfc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/helper/wishlist/data:dedbfc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$auth$2f$action$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/auth/action.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const WISHLIST_STORAGE_KEY = "morzze_wishlist";
const WishlistContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    wishlistSlugs: [],
    isInWishlist: ()=>false,
    toggleWishlist: ()=>{},
    loading: false
});
const useWishlist = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WishlistContext);
};
_s(useWishlist, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
// Local storage helpers
function getLocalWishlist() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem(WISHLIST_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch  {
        return [];
    }
}
function setLocalWishlist(slugs) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(slugs));
}
function WishlistProvider({ children }) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [wishlistSlugs, setWishlistSlugs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loggedIn, setLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Check auth status on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistProvider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$auth$2f$action$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUserLoggedIn"])().then({
                "WishlistProvider.useEffect": (status)=>setLoggedIn(status)
            }["WishlistProvider.useEffect"]).catch({
                "WishlistProvider.useEffect": ()=>setLoggedIn(false)
            }["WishlistProvider.useEffect"]);
        }
    }["WishlistProvider.useEffect"], []);
    // Load wishlist based on auth status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistProvider.useEffect": ()=>{
            if (loggedIn === null) return; // still checking
            const loadWishlist = {
                "WishlistProvider.useEffect.loadWishlist": async ()=>{
                    setLoading(true);
                    try {
                        if (loggedIn) {
                            // Sync local wishlist to DB first (if any local items exist)
                            const localSlugs = getLocalWishlist();
                            if (localSlugs.length > 0) {
                                // We can't sync slugs to DB without productIds, so we keep them as-is
                                // The DB wishlist uses productIds, local uses slugs
                                // Clear local after login since DB is the source of truth
                                // Note: local items without DB product IDs will be lost on login
                                setLocalWishlist([]);
                            }
                            // Load from DB
                            const dbItems = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$wishlist$2f$data$3a$dedbfc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getWishlistDB"])();
                            // dbItems have productId and product details, but we need slugs
                            // Since the DB join returns product info, we can extract slugs
                            const slugs = dbItems.map({
                                "WishlistProvider.useEffect.loadWishlist.slugs": (item)=>item.slug
                            }["WishlistProvider.useEffect.loadWishlist.slugs"]).filter({
                                "WishlistProvider.useEffect.loadWishlist.slugs": (slug)=>Boolean(slug)
                            }["WishlistProvider.useEffect.loadWishlist.slugs"]);
                            setWishlistSlugs(slugs);
                        } else {
                            // Load from localStorage
                            setWishlistSlugs(getLocalWishlist());
                        }
                    } catch  {
                        // Fallback to local storage
                        setWishlistSlugs(getLocalWishlist());
                    } finally{
                        setLoading(false);
                    }
                }
            }["WishlistProvider.useEffect.loadWishlist"];
            loadWishlist();
        }
    }["WishlistProvider.useEffect"], [
        loggedIn
    ]);
    const isInWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WishlistProvider.useCallback[isInWishlist]": (slug)=>wishlistSlugs.includes(slug)
    }["WishlistProvider.useCallback[isInWishlist]"], [
        wishlistSlugs
    ]);
    const toggleWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WishlistProvider.useCallback[toggleWishlist]": async (slug, productId)=>{
            const isCurrentlyInWishlist = wishlistSlugs.includes(slug);
            // Optimistic update
            const newSlugs = isCurrentlyInWishlist ? wishlistSlugs.filter({
                "WishlistProvider.useCallback[toggleWishlist]": (s)=>s !== slug
            }["WishlistProvider.useCallback[toggleWishlist]"]) : [
                ...wishlistSlugs,
                slug
            ];
            setWishlistSlugs(newSlugs);
            if (loggedIn && productId) {
                // Logged in → DB operations
                try {
                    if (isCurrentlyInWishlist) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$wishlist$2f$data$3a$d5fc73__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["removeFromWishlistDB"])(productId);
                    } else {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$wishlist$2f$data$3a$1368a6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addToWishlistDB"])(productId);
                    }
                } catch (error) {
                    // Revert optimistic update
                    setWishlistSlugs(wishlistSlugs);
                    const message = error instanceof Error ? error.message : "Failed to update wishlist";
                    if (message.toUpperCase().includes("UNAUTHORIZED")) {
                        setLoggedIn(false);
                        router.push("/login");
                        return;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message);
                }
            } else {
                // Not logged in → localStorage
                setLocalWishlist(newSlugs);
            }
        }
    }["WishlistProvider.useCallback[toggleWishlist]"], [
        wishlistSlugs,
        loggedIn,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WishlistContext.Provider, {
        value: {
            wishlistSlugs,
            isInWishlist,
            toggleWishlist,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/WishlistContext.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s1(WishlistProvider, "GhPrCWO/4tzcnwAf2UKyGA3jleY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = WishlistProvider;
var _c;
__turbopack_context__.k.register(_c, "WishlistProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/helper/cart/data:92457a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCart",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"007392c103f727903d6596b877627008d5823e7ac8":{"name":"clearCart"}},"helper/cart/action.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("007392c103f727903d6596b877627008d5823e7ac8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "clearCart");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/helper/cart/data:549464 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCart",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00a733dec8b038b23e440e611618395815a3605f5f":{"name":"getCart"}},"helper/cart/action.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00a733dec8b038b23e440e611618395815a3605f5f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCart");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/helper/cart/data:337a05 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setUserCartItemQuantity",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4000750c44a95339d304eb63d37bc779b6066c3514":{"name":"setUserCartItemQuantity"}},"helper/cart/action.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4000750c44a95339d304eb63d37bc779b6066c3514", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "setUserCartItemQuantity");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/imagekit-url.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageKitUrl",
    ()=>imageKitUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const IMAGEKIT_STATIC_URL = ("TURBOPACK compile-time value", "https://d2icu6klh68l1z.cloudfront.net");
function imageKitUrl(path) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const cleanBaseUrl = IMAGEKIT_STATIC_URL.replace(/\/$/, "");
    const cleanPath = path.replace(/^\//, "");
    return `${cleanBaseUrl}/${cleanPath}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$cart$2f$data$3a$92457a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/helper/cart/data:92457a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$cart$2f$data$3a$549464__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/helper/cart/data:549464 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$cart$2f$data$3a$337a05__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/helper/cart/data:337a05 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$auth$2f$action$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helper/auth/action.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$imagekit$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/imagekit-url.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const CART_STORAGE_KEY = "morzze_cart";
const CART_SYNC_DEBOUNCE_MS = 500;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    cartItems: [],
    addToCart: ()=>{},
    removeFromCart: ()=>{},
    updateQuantity: ()=>{},
    clearCart: ()=>{},
    getItemQuantity: ()=>0,
    totalItems: 0,
    appliedCoupon: null,
    setAppliedCoupon: ()=>{},
    clearCoupon: ()=>{}
});
const pendingSyncs = new Map();
const syncVersions = new Map();
const useCart = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
};
_s(useCart, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function getLocalCart() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem(CART_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch  {
        return [];
    }
}
function setLocalCart(items) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}
function getItemKey(item) {
    return `${item.productId ?? item.slug}:${item.productVarientBox ?? "default"}`;
}
function matchesCartItem(item, itemOrSlug) {
    if (typeof itemOrSlug === "string") {
        return item.slug === itemOrSlug;
    }
    return getItemKey(item) === getItemKey(itemOrSlug);
}
function normalizeQuantity(quantity) {
    if (!Number.isFinite(quantity)) return 1;
    return Math.max(0, Math.trunc(quantity));
}
function mapDbCartItems(items) {
    return items.reduce((mappedItems, item)=>{
        const row = item;
        if (!row.productId) return mappedItems;
        mappedItems.push({
            productId: row.productId,
            productVarientBox: row.productVarientBox ?? null,
            isTypeSubscription: row.isTypeSubscription,
            frequencyInMonths: row.frequencyInMonths ?? null,
            slug: row.slug || row.productId,
            name: row.title || "Product",
            image: row.image || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$imagekit$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageKitUrl"])("product.png"),
            price: row.price || 0,
            oldPrice: row.originalPrice || undefined,
            sku: row.sku || undefined,
            quantity: row.quantity ?? 1
        });
        return mappedItems;
    }, []);
}
function CartProvider({ children }) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cartLoaded, setCartLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [appliedCoupon, setAppliedCoupon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const syncCartFromDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[syncCartFromDb]": async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$cart$2f$data$3a$549464__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCart"])();
            if (result.success && result.items) {
                setCartItems(mapDbCartItems(result.items));
            }
        }
    }["CartProvider.useCallback[syncCartFromDb]"], []);
    const syncItemNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[syncItemNow]": async (item, quantity)=>{
            if (!item.productId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unable to sync this cart item");
                return false;
            }
            const key = getItemKey(item);
            const existingTimer = pendingSyncs.get(key);
            if (existingTimer) {
                clearTimeout(existingTimer);
                pendingSyncs.delete(key);
            }
            const version = (syncVersions.get(key) ?? 0) + 1;
            syncVersions.set(key, version);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$cart$2f$data$3a$337a05__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["setUserCartItemQuantity"])({
                    productId: item.productId,
                    productVarientBox: item.productVarientBox ?? null,
                    quantity,
                    isTypeSubscription: item.isTypeSubscription,
                    frequencyInMonths: item.frequencyInMonths ?? null,
                    clientCartItemId: item.clientCartItemId ?? null
                });
                if (syncVersions.get(key) !== version) {
                    return true;
                }
                if (result.userIsNotLoggedIn) {
                    await syncCartFromDb();
                    return false;
                }
                if (!result.success) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.message ?? "Unable to update cart");
                    await syncCartFromDb();
                    return false;
                }
                return true;
            } catch (error) {
                console.error(error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unable to update cart");
                await syncCartFromDb();
                return false;
            }
        }
    }["CartProvider.useCallback[syncItemNow]"], [
        syncCartFromDb
    ]);
    const debouncedSyncItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[debouncedSyncItem]": (item, quantity)=>{
            if (!item.productId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unable to sync this cart item");
                return false;
            }
            const key = getItemKey(item);
            const existingTimer = pendingSyncs.get(key);
            if (existingTimer) {
                clearTimeout(existingTimer);
            }
            const version = (syncVersions.get(key) ?? 0) + 1;
            syncVersions.set(key, version);
            const timer = setTimeout({
                "CartProvider.useCallback[debouncedSyncItem].timer": async ()=>{
                    pendingSyncs.delete(key);
                    try {
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$cart$2f$data$3a$337a05__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["setUserCartItemQuantity"])({
                            productId: item.productId,
                            productVarientBox: item.productVarientBox ?? null,
                            quantity,
                            isTypeSubscription: item.isTypeSubscription,
                            frequencyInMonths: item.frequencyInMonths ?? null,
                            clientCartItemId: item.clientCartItemId ?? null
                        });
                        if (syncVersions.get(key) !== version) {
                            return;
                        }
                        if (result.userIsNotLoggedIn) {
                            await syncCartFromDb();
                            return;
                        }
                        if (!result.success) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.message ?? "Unable to update cart");
                            await syncCartFromDb();
                        }
                    } catch (error) {
                        console.error(error);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unable to update cart");
                        await syncCartFromDb();
                    }
                }
            }["CartProvider.useCallback[debouncedSyncItem].timer"], CART_SYNC_DEBOUNCE_MS);
            pendingSyncs.set(key, timer);
            return true;
        }
    }["CartProvider.useCallback[debouncedSyncItem]"], [
        syncCartFromDb
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const timer = setTimeout({
                "CartProvider.useEffect.timer": ()=>{
                    setCartItems(getLocalCart());
                    setCartLoaded(true);
                    void syncCartFromDb();
                }
            }["CartProvider.useEffect.timer"], 0);
            return ({
                "CartProvider.useEffect": ()=>clearTimeout(timer)
            })["CartProvider.useEffect"];
        }
    }["CartProvider.useEffect"], [
        syncCartFromDb
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            if (!cartLoaded) return;
            setLocalCart(cartItems);
        }
    }["CartProvider.useEffect"], [
        cartItems,
        cartLoaded
    ]);
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[addToCart]": async (slug, quantity = 1, productData)=>{
            const loggedIn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$auth$2f$action$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUserLoggedIn"])();
            if (!loggedIn) {
                router.push("/login");
                return;
            }
            const safeQuantity = normalizeQuantity(quantity || 1);
            let nextSyncTarget;
            setCartItems({
                "CartProvider.useCallback[addToCart]": (prev)=>{
                    const candidate = {
                        slug,
                        quantity: safeQuantity,
                        ...productData ?? {}
                    };
                    const existing = prev.find({
                        "CartProvider.useCallback[addToCart].existing": (item)=>getItemKey(item) === getItemKey(candidate)
                    }["CartProvider.useCallback[addToCart].existing"]);
                    if (existing) {
                        nextSyncTarget = {
                            ...existing,
                            ...productData ?? {},
                            quantity: existing.quantity + safeQuantity
                        };
                        return prev.map({
                            "CartProvider.useCallback[addToCart]": (item)=>getItemKey(item) === getItemKey(candidate) ? nextSyncTarget : item
                        }["CartProvider.useCallback[addToCart]"]);
                    }
                    nextSyncTarget = candidate;
                    return [
                        ...prev,
                        candidate
                    ];
                }
            }["CartProvider.useCallback[addToCart]"]);
            if (nextSyncTarget) {
                debouncedSyncItem(nextSyncTarget, nextSyncTarget.quantity);
            }
        }
    }["CartProvider.useCallback[addToCart]"], [
        debouncedSyncItem,
        router
    ]);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[removeFromCart]": (itemOrSlug)=>{
            const item = cartItems.find({
                "CartProvider.useCallback[removeFromCart].item": (cartItem)=>matchesCartItem(cartItem, itemOrSlug)
            }["CartProvider.useCallback[removeFromCart].item"]);
            if (!item) return;
            setCartItems({
                "CartProvider.useCallback[removeFromCart]": (prev)=>prev.filter({
                        "CartProvider.useCallback[removeFromCart]": (cartItem)=>!matchesCartItem(cartItem, item)
                    }["CartProvider.useCallback[removeFromCart]"])
            }["CartProvider.useCallback[removeFromCart]"]);
            void syncItemNow(item, 0);
        }
    }["CartProvider.useCallback[removeFromCart]"], [
        cartItems,
        syncItemNow
    ]);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[updateQuantity]": (itemOrSlug, quantity)=>{
            const item = cartItems.find({
                "CartProvider.useCallback[updateQuantity].item": (cartItem)=>matchesCartItem(cartItem, itemOrSlug)
            }["CartProvider.useCallback[updateQuantity].item"]);
            if (!item) return;
            const safeQuantity = normalizeQuantity(quantity);
            const updatedItem = {
                ...item,
                quantity: safeQuantity
            };
            if (safeQuantity <= 0) {
                setCartItems({
                    "CartProvider.useCallback[updateQuantity]": (prev)=>prev.filter({
                            "CartProvider.useCallback[updateQuantity]": (cartItem)=>!matchesCartItem(cartItem, item)
                        }["CartProvider.useCallback[updateQuantity]"])
                }["CartProvider.useCallback[updateQuantity]"]);
                void syncItemNow(item, 0);
                return;
            }
            setCartItems({
                "CartProvider.useCallback[updateQuantity]": (prev)=>prev.map({
                        "CartProvider.useCallback[updateQuantity]": (cartItem)=>matchesCartItem(cartItem, item) ? updatedItem : cartItem
                    }["CartProvider.useCallback[updateQuantity]"])
            }["CartProvider.useCallback[updateQuantity]"]);
            debouncedSyncItem(updatedItem, safeQuantity);
        }
    }["CartProvider.useCallback[updateQuantity]"], [
        cartItems,
        debouncedSyncItem,
        syncItemNow
    ]);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[clearCart]": ()=>{
            setCartItems([]);
            setAppliedCoupon(null);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$helper$2f$cart$2f$data$3a$92457a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["clearCart"])();
        }
    }["CartProvider.useCallback[clearCart]"], []);
    const clearCoupon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[clearCoupon]": ()=>{
            setAppliedCoupon(null);
        }
    }["CartProvider.useCallback[clearCoupon]"], []);
    const getItemQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[getItemQuantity]": (slug)=>{
            return cartItems.find({
                "CartProvider.useCallback[getItemQuantity]": (item)=>item.slug === slug
            }["CartProvider.useCallback[getItemQuantity]"])?.quantity ?? 0;
        }
    }["CartProvider.useCallback[getItemQuantity]"], [
        cartItems
    ]);
    const totalItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartProvider.useMemo[totalItems]": ()=>cartItems.reduce({
                "CartProvider.useMemo[totalItems]": (sum, item)=>sum + item.quantity
            }["CartProvider.useMemo[totalItems]"], 0)
    }["CartProvider.useMemo[totalItems]"], [
        cartItems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getItemQuantity,
            totalItems,
            appliedCoupon,
            setAppliedCoupon,
            clearCoupon
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/CartContext.tsx",
        lineNumber: 387,
        columnNumber: 5
    }, this);
}
_s1(CartProvider, "a/73pHdRTxWILdTiD2s5k/NKOks=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CartProvider;
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/commom/ScrollToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollToTop() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "manual";
            }
            window.requestAnimationFrame({
                "ScrollToTop.useEffect": ()=>{
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant"
                    });
                }
            }["ScrollToTop.useEffect"]);
        }
    }["ScrollToTop.useEffect"], [
        pathname
    ]);
    return null;
}
_s(ScrollToTop, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0dn326d._.js.map