module.exports = [
"[externals]/next/dist/build/adapter/setup-node-env.external.js [external] (next/dist/build/adapter/setup-node-env.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/build/adapter/setup-node-env.external.js", () => require("next/dist/build/adapter/setup-node-env.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/memory-cache.external.js [external] (next/dist/server/lib/incremental-cache/memory-cache.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/memory-cache.external.js", () => require("next/dist/server/lib/incremental-cache/memory-cache.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/shared-cache-controls.external.js [external] (next/dist/server/lib/incremental-cache/shared-cache-controls.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js", () => require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/admin-access-cookie.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminSecretsEqual",
    ()=>adminSecretsEqual,
    "getAdminAccessCookieName",
    ()=>getAdminAccessCookieName,
    "signAdminSession",
    ()=>signAdminSession,
    "verifyAdminSession",
    ()=>verifyAdminSession
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
/** Signed session cookie for /admin. Set ADMIN_ACCESS_COOKIE_SECRET (16+ chars). */ const COOKIE_NAME = "admin_access";
function getCookieSecret() {
    const s = process.env.ADMIN_ACCESS_COOKIE_SECRET;
    if (!s || s.length < 16) return null;
    return s;
}
function getAdminAccessCookieName() {
    return COOKIE_NAME;
}
function signAdminSession() {
    const secret = getCookieSecret();
    if (!secret) return null;
    const payload = Buffer.from(JSON.stringify({
        v: 1,
        exp: Date.now() + 7 * 24 * 60 * 60 * 1000
    }), "utf8").toString("base64url");
    const sig = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac("sha256", secret).update(payload).digest("base64url");
    return `${payload}.${sig}`;
}
function verifyAdminSession(token) {
    if (!token || !token.includes(".")) return false;
    const secret = getCookieSecret();
    if (!secret) return false;
    const lastDot = token.lastIndexOf(".");
    const payload = token.slice(0, lastDot);
    const sig = token.slice(lastDot + 1);
    const expected = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac("sha256", secret).update(payload).digest("base64url");
    try {
        if (sig.length !== expected.length) return false;
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].timingSafeEqual(Buffer.from(sig, "utf8"), Buffer.from(expected, "utf8"))) return false;
    } catch  {
        return false;
    }
    try {
        const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
        if (typeof data.exp !== "number" || data.exp < Date.now()) return false;
        return true;
    } catch  {
        return false;
    }
}
function adminSecretsEqual(a, b) {
    if (!a || !b) return false;
    const da = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(a, "utf8").digest();
    const db = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(b, "utf8").digest();
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].timingSafeEqual(da, db);
}
}),
"[project]/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$access$2d$cookie$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/admin-access-cookie.ts [middleware] (ecmascript)");
;
;
const ADMIN_COOKIE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$access$2d$cookie$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getAdminAccessCookieName"])();
function proxy(req) {
    const pathname = req.nextUrl.pathname;
    if (pathname.startsWith("/api/admin")) {
        const method = req.method;
        if (pathname === "/api/admin/access" && (method === "POST" || method === "DELETE")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        const token = req.cookies.get(ADMIN_COOKIE)?.value;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$access$2d$cookie$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["verifyAdminSession"])(token)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized"
            }, {
                status: 401
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (pathname.startsWith("/admin")) {
        if (pathname === "/admin/login" || pathname.startsWith("/admin/login/")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", req.url));
        }
        if (pathname === "/admin/register" || pathname.startsWith("/admin/register/")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/signup", req.url));
        }
        const token = req.cookies.get(ADMIN_COOKIE)?.value;
        const ok = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$access$2d$cookie$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["verifyAdminSession"])(token);
        const isGate = pathname === "/admin/gate" || pathname.startsWith("/admin/gate/");
        if (isGate) {
            if (ok) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/admin", req.url));
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        if (!ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/admin/gate", req.url));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const accessToken = req.cookies.get("accessToken");
    const isAuth = !!accessToken;
    const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/signup") || pathname.startsWith("/email-verification") || pathname.startsWith("/reset-password-email") || pathname.startsWith("/reset-password-otp") || pathname.startsWith("/reset-password-confirm");
    const isProtectedRoute = pathname.startsWith("/dashboard") || pathname.startsWith("/checkout");
    if (isAuthPage && isAuth) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dashboard", req.url));
    }
    if (isProtectedRoute && !isAuth) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", req.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
        "/api/admin/:path*"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0krduz0._.js.map