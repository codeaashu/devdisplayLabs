(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/BreakTitle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BreakTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BreakTitle(param) {
    let { text, align = "left", className = "" } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BreakTitle.useMemo[words]": ()=>text.split(/\s+/).filter(Boolean)
    }["BreakTitle.useMemo[words]"], [
        text
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BreakTitle.useEffect": ()=>{
            if (!containerRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const targets = containerRef.current.querySelectorAll("span[data-word]");
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "BreakTitle.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(targets, {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        force3D: true,
                        duration: 1.0,
                        ease: "power3.out",
                        stagger: 0.12,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 85%",
                            once: true
                        }
                    });
                }
            }["BreakTitle.useEffect.ctx"], containerRef);
            return ({
                "BreakTitle.useEffect": ()=>ctx.revert()
            })["BreakTitle.useEffect"];
        }
    }["BreakTitle.useEffect"], []);
    const alignClass = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
    const justify = align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        ref: containerRef,
        className: "text-3xl sm:text-title/tight font-semibold leading-tight ".concat(alignClass, " ").concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex flex-wrap ".concat(justify, " gap-x-2 gap-y-1"),
            children: words.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-word": true,
                    className: "inline-block will-change-transform opacity-0",
                    style: {
                        transform: "translateY(28px) rotateX(-18deg)"
                    },
                    children: w
                }, "".concat(w, "-").concat(i), false, {
                    fileName: "[project]/src/components/ui/BreakTitle.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/BreakTitle.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/BreakTitle.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(BreakTitle, "iTxC4I4F36mb6dSxqj5UO47vpck=");
_c = BreakTitle;
var _c;
__turbopack_context__.k.register(_c, "BreakTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ClientsMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$MotionPathPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/MotionPathPlugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$MotionPathPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionPathPlugin"]);
const logos = [
    "/images/clients/lowes.png",
    "/images/clients/cognizant.png",
    "/images/clients/trimble.png",
    "/images/clients/e2open.png",
    "/images/clients/toyota.png",
    "/images/clients/owasp.png",
    "/images/clients/injazat.png"
];
const ClientsMarquee = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientsMarquee.useEffect": ()=>{
            if (!containerRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "ClientsMarquee.useEffect.ctx": ()=>{
                    const items = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray(containerRef.current.querySelectorAll("image"));
                    const spacing = 1 / items.length;
                    items.forEach({
                        "ClientsMarquee.useEffect.ctx": (item, i)=>{
                            const start = i * spacing;
                            const end = start + 1;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(item, {
                                duration: 20,
                                repeat: -1,
                                ease: "none",
                                motionPath: {
                                    path: "#curvePath",
                                    align: "#curvePath",
                                    autoRotate: true,
                                    alignOrigin: [
                                        0.5,
                                        0.5
                                    ],
                                    start,
                                    end
                                }
                            });
                        }
                    }["ClientsMarquee.useEffect.ctx"]);
                }
            }["ClientsMarquee.useEffect.ctx"], containerRef);
            return ({
                "ClientsMarquee.useEffect": ()=>ctx.revert()
            })["ClientsMarquee.useEffect"]; // clean up animations on unmount
        }
    }["ClientsMarquee.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[600px] -mb-96 flex flex-col items-center justify-center relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    ref: containerRef,
                    viewBox: "0 0 1200 400",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-[1500px] h-full absolute left-1/2 -translate-x-1/2 top-0 z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "curvePath",
                            d: "M0.5 86.5004C471.448 -28.4531 738.829 -27.0502 1221.5 86.5004",
                            fill: "transparent",
                            stroke: "transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ClientsMarquee.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        logos.map((src)=>{
                            var _src_split_pop;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                href: src,
                                width: "120",
                                height: "60",
                                "aria-label": "Client logo ".concat((_src_split_pop = src.split("/").pop()) === null || _src_split_pop === void 0 ? void 0 : _src_split_pop.split(".")[0])
                            }, src, false, {
                                fileName: "[project]/src/components/ui/ClientsMarquee.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/ClientsMarquee.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/Fadebg.png",
                    alt: "fade",
                    width: 300,
                    height: 200,
                    className: "top-0 -left-[130px] h-[200px] w-[300px] absolute z-20 -rotate-15"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ClientsMarquee.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/Fadebg.png",
                    alt: "fade",
                    width: 300,
                    height: 200,
                    className: "top-0 -right-[130px] h-[200px] w-[300px] absolute z-20 rotate-195"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ClientsMarquee.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/clientsLightCurve.jpg",
                    alt: "Light rays DevDisplay",
                    width: 1458,
                    height: 86,
                    className: "absolute top-[90px] left-1/2 -translate-x-1/2 w-full h-auto object-contain"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ClientsMarquee.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ClientsMarquee.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ClientsMarquee.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ClientsMarquee, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = ClientsMarquee;
const __TURBOPACK__default__export__ = ClientsMarquee;
var _c;
__turbopack_context__.k.register(_c, "ClientsMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$css$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/css/Button.module.css [app-client] (css module)");
"use client";
;
;
const Button = (param)=>{
    let { children, ...props } = param;
    function handleMouseMove(e) {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--reflextX", "".concat((e.clientX - rect.left) * 0.7, "px"));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$css$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
        onMouseMove: handleMouseMove,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/bits/DarkVeilBG.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DarkVeil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/math/Vec2.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const vertex = "\nattribute vec2 position;\nvoid main(){gl_Position=vec4(position,0.0,1.0);}\n";
const fragment = "\n#ifdef GL_ES\nprecision lowp float;\n#endif\nuniform vec2 uResolution;\nuniform float uTime;\nuniform float uHueShift;\nuniform float uNoise;\nuniform float uScan;\nuniform float uScanFreq;\nuniform float uWarp;\n#define iTime uTime\n#define iResolution uResolution\n\nvec4 buf[8];\nfloat rand(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}\n\nmat3 rgb2yiq=mat3(0.299,0.587,0.114,0.596,-0.274,-0.322,0.211,-0.523,0.312);\nmat3 yiq2rgb=mat3(1.0,0.956,0.621,1.0,-0.272,-0.647,1.0,-1.106,1.703);\n\nvec3 hueShiftRGB(vec3 col,float deg){\n    vec3 yiq=rgb2yiq*col;\n    float rad=radians(deg);\n    float cosh=cos(rad),sinh=sin(rad);\n    vec3 yiqShift=vec3(yiq.x,yiq.y*cosh-yiq.z*sinh,yiq.y*sinh+yiq.z*cosh);\n    return clamp(yiq2rgb*yiqShift,0.0,1.0);\n}\n\nvec4 sigmoid(vec4 x){return 1./(1.+exp(-x));}\n\nvec4 cppn_fn(vec2 coordinate,float in0,float in1,float in2){\n    buf[6]=vec4(coordinate.x,coordinate.y,0.3948333106474662+in0,0.36+in1);\n    buf[7]=vec4(0.14+in2,sqrt(coordinate.x*coordinate.x+coordinate.y*coordinate.y),0.,0.);\n    buf[0]=mat4(vec4(6.5404263,-3.6126034,0.7590882,-1.13613),vec4(2.4582713,3.1660357,1.2219609,0.06276096),vec4(-5.478085,-6.159632,1.8701609,-4.7742867),vec4(6.039214,-5.542865,-0.90925294,3.251348))*buf[6]+mat4(vec4(0.8473259,-5.722911,3.975766,1.6522468),vec4(-0.24321538,0.5839259,-1.7661959,-5.350116),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(0.21808943,1.1243913,-1.7969975,5.0294676);\n    buf[1]=mat4(vec4(-3.3522482,-6.0612736,0.55641043,-4.4719114),vec4(0.8631464,1.7432913,5.643898,1.6106541),vec4(2.4941394,-3.5012043,1.7184316,6.357333),vec4(3.310376,8.209261,1.1355612,-1.165539))*buf[6]+mat4(vec4(5.24046,-13.034365,0.009859298,15.870829),vec4(2.987511,3.129433,-0.89023495,-1.6822904),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-5.9457836,-6.573602,-0.8812491,1.5436668);\n    buf[0]=sigmoid(buf[0]);buf[1]=sigmoid(buf[1]);\n    buf[2]=mat4(vec4(-15.219568,8.095543,-2.429353,-1.9381982),vec4(-5.951362,4.3115187,2.6393783,1.274315),vec4(-7.3145227,6.7297835,5.2473326,5.9411426),vec4(5.0796127,8.979051,-1.7278991,-1.158976))*buf[6]+mat4(vec4(-11.967154,-11.608155,6.1486754,11.237008),vec4(2.124141,-6.263192,-1.7050359,-0.7021966),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-4.17164,-3.2281182,-4.576417,-3.6401186);\n    buf[3]=mat4(vec4(3.1832156,-13.738922,1.879223,3.233465),vec4(0.64300746,12.768129,1.9141049,0.50990224),vec4(-0.049295485,4.4807224,1.4733979,1.801449),vec4(5.0039253,13.000481,3.3991797,-4.5561905))*buf[6]+mat4(vec4(-0.1285731,7.720628,-3.1425676,4.742367),vec4(0.6393625,3.714393,-0.8108378,-0.39174938),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-1.1811101,-21.621881,0.7851888,1.2329718);\n    buf[2]=sigmoid(buf[2]);buf[3]=sigmoid(buf[3]);\n    buf[4]=mat4(vec4(5.214916,-7.183024,2.7228765,2.6592617),vec4(-5.601878,-25.3591,4.067988,0.4602802),vec4(-10.57759,24.286327,21.102104,37.546658),vec4(4.3024497,-1.9625226,2.3458803,-1.372816))*buf[0]+mat4(vec4(-17.6526,-10.507558,2.2587414,12.462782),vec4(6.265566,-502.75443,-12.642513,0.9112289),vec4(-10.983244,20.741234,-9.701768,-0.7635988),vec4(5.383626,1.4819539,-4.1911616,-4.8444734))*buf[1]+mat4(vec4(12.785233,-16.345072,-0.39901125,1.7955981),vec4(-30.48365,-1.8345358,1.4542528,-1.1118771),vec4(19.872723,-7.337935,-42.941723,-98.52709),vec4(8.337645,-2.7312303,-2.2927687,-36.142323))*buf[2]+mat4(vec4(-16.298317,3.5471997,-0.44300047,-9.444417),vec4(57.5077,-35.609753,16.163465,-4.1534753),vec4(-0.07470326,-3.8656476,-7.0901804,3.1523974),vec4(-12.559385,-7.077619,1.490437,-0.8211543))*buf[3]+vec4(-7.67914,15.927437,1.3207729,-1.6686112);\n    buf[5]=mat4(vec4(-1.4109162,-0.372762,-3.770383,-21.367174),vec4(-6.2103205,-9.35908,0.92529047,8.82561),vec4(11.460242,-22.348068,13.625772,-18.693201),vec4(-0.3429052,-3.9905605,-2.4626114,-0.45033523))*buf[0]+mat4(vec4(7.3481627,-4.3661838,-6.3037653,-3.868115),vec4(1.5462853,6.5488915,1.9701879,-0.58291394),vec4(6.5858274,-2.2180402,3.7127688,-1.3730392),vec4(-5.7973905,10.134961,-2.3395722,-5.965605))*buf[1]+mat4(vec4(-2.5132585,-6.6685553,-1.4029363,-0.16285264),vec4(-0.37908727,0.53738135,4.389061,-1.3024765),vec4(-0.70647055,2.0111287,-5.1659346,-3.728635),vec4(-13.562562,10.487719,-0.9173751,-2.6487076))*buf[2]+mat4(vec4(-8.645013,6.5546675,-6.3944063,-5.5933375),vec4(-0.57783127,-1.077275,36.91025,5.736769),vec4(14.283112,3.7146652,7.1452246,-4.5958776),vec4(2.7192075,3.6021907,-4.366337,-2.3653464))*buf[3]+vec4(-5.9000807,-4.329569,1.2427121,8.59503);\n    buf[4]=sigmoid(buf[4]);buf[5]=sigmoid(buf[5]);\n    buf[6]=mat4(vec4(-1.61102,0.7970257,1.4675229,0.20917463),vec4(-28.793737,-7.1390953,1.5025433,4.656581),vec4(-10.94861,39.66238,0.74318546,-10.095605),vec4(-0.7229728,-1.5483948,0.7301322,2.1687684))*buf[0]+mat4(vec4(3.2547753,21.489103,-1.0194173,-3.3100595),vec4(-3.7316632,-3.3792162,-7.223193,-0.23685838),vec4(13.1804495,0.7916005,5.338587,5.687114),vec4(-4.167605,-17.798311,-6.815736,-1.6451967))*buf[1]+mat4(vec4(0.604885,-7.800309,-7.213122,-2.741014),vec4(-3.522382,-0.12359311,-0.5258442,0.43852118),vec4(9.6752825,-22.853785,2.062431,0.099892326),vec4(-4.3196306,-17.730087,2.5184598,5.30267))*buf[2]+mat4(vec4(-6.545563,-15.790176,-6.0438633,-5.415399),vec4(-43.591583,28.551912,-16.00161,18.84728),vec4(4.212382,8.394307,3.0958717,8.657522),vec4(-5.0237565,-4.450633,-4.4768,-5.5010443))*buf[3]+mat4(vec4(1.6985557,-67.05806,6.897715,1.9004834),vec4(1.8680354,2.3915145,2.5231109,4.081538),vec4(11.158006,1.7294737,2.0738268,7.386411),vec4(-4.256034,-306.24686,8.258898,-17.132736))*buf[4]+mat4(vec4(1.6889864,-4.5852966,3.8534803,-6.3482175),vec4(1.3543309,-1.2640043,9.932754,2.9079645),vec4(-5.2770967,0.07150358,-0.13962056,3.3269649),vec4(28.34703,-4.918278,6.1044083,4.085355))*buf[5]+vec4(6.6818056,12.522166,-3.7075126,-4.104386);\n    buf[7]=mat4(vec4(-8.265602,-4.7027016,5.098234,0.7509808),vec4(8.6507845,-17.15949,16.51939,-8.884479),vec4(-4.036479,-2.3946867,-2.6055532,-1.9866527),vec4(-2.2167742,-1.8135649,-5.9759874,4.8846445))*buf[0]+mat4(vec4(6.7790847,3.5076547,-2.8191125,-2.7028968),vec4(-5.743024,-0.27844876,1.4958696,-5.0517144),vec4(13.122226,15.735168,-2.9397483,-4.101023),vec4(-14.375265,-5.030483,-6.2599335,2.9848232))*buf[1]+mat4(vec4(4.0950394,-0.94011575,-5.674733,4.755022),vec4(4.3809423,4.8310084,1.7425908,-3.437416),vec4(2.117492,0.16342592,-104.56341,16.949184),vec4(-5.22543,-2.994248,3.8350096,-1.9364246))*buf[2]+mat4(vec4(-5.900337,1.7946124,-13.604192,-3.8060522),vec4(6.6583457,31.911177,25.164474,91.81147),vec4(11.840538,4.1503043,-0.7314397,6.768467),vec4(-6.3967767,4.034772,6.1714606,-0.32874924))*buf[3]+mat4(vec4(3.4992442,-196.91893,-8.923708,2.8142626),vec4(3.4806502,-3.1846354,5.1725626,5.1804223),vec4(-2.4009497,15.585794,1.2863957,2.0252278),vec4(-71.25271,-62.441242,-8.138444,0.50670296))*buf[4]+mat4(vec4(-12.291733,-11.176166,-7.3474145,4.390294),vec4(10.805477,5.6337385,-0.9385842,-4.7348723),vec4(-12.869276,-7.039391,5.3029537,7.5436664),vec4(1.4593618,8.91898,3.5101583,5.840625))*buf[5]+vec4(2.2415268,-6.705987,-0.98861027,-2.117676);\n    buf[6]=sigmoid(buf[6]);buf[7]=sigmoid(buf[7]);\n    buf[0]=mat4(vec4(1.6794263,1.3817469,2.9625452,0.),vec4(-1.8834411,-1.4806935,-3.5924516,0.),vec4(-1.3279216,-1.0918057,-2.3124623,0.),vec4(0.2662234,0.23235129,0.44178495,0.))*buf[0]+mat4(vec4(-0.6299101,-0.5945583,-0.9125601,0.),vec4(0.17828953,0.18300213,0.18182953,0.),vec4(-2.96544,-2.5819945,-4.9001055,0.),vec4(1.4195864,1.1868085,2.5176322,0.))*buf[1]+mat4(vec4(-1.2584374,-1.0552157,-2.1688404,0.),vec4(-0.7200217,-0.52666044,-1.438251,0.),vec4(0.15345335,0.15196142,0.272854,0.),vec4(0.945728,0.8861938,1.2766753,0.))*buf[2]+mat4(vec4(-2.4218085,-1.968602,-4.35166,0.),vec4(-22.683098,-18.0544,-41.954372,0.),vec4(0.63792,0.5470648,1.1078634,0.),vec4(-1.5489894,-1.3075932,-2.6444845,0.))*buf[3]+mat4(vec4(-0.49252132,-0.39877754,-0.91366625,0.),vec4(0.95609266,0.7923952,1.640221,0.),vec4(0.30616966,0.15693925,0.8639857,0.),vec4(1.1825981,0.94504964,2.176963,0.))*buf[4]+mat4(vec4(0.35446745,0.3293795,0.59547555,0.),vec4(-0.58784515,-0.48177817,-1.0614829,0.),vec4(2.5271258,1.9991658,4.6846647,0.),vec4(0.13042648,0.08864098,0.30187556,0.))*buf[5]+mat4(vec4(-1.7718065,-1.4033192,-3.3355875,0.),vec4(3.1664357,2.638297,5.378702,0.),vec4(-3.1724713,-2.6107926,-5.549295,0.),vec4(-2.851368,-2.249092,-5.3013067,0.))*buf[6]+mat4(vec4(1.5203838,1.2212278,2.8404984,0.),vec4(1.5210563,1.2651345,2.683903,0.),vec4(2.9789467,2.4364579,5.2347264,0.),vec4(2.2270417,1.8825914,3.8028636,0.))*buf[7]+vec4(-1.5468478,-3.6171484,0.24762098,0.);\n    buf[0]=sigmoid(buf[0]);\n    return vec4(buf[0].x,buf[0].y,buf[0].z,1.);\n}\n\nvoid mainImage(out vec4 fragColor,in vec2 fragCoord){\n    vec2 uv=fragCoord/uResolution.xy*2.-1.;\n    uv.y*=-1.;\n    uv+=uWarp*vec2(sin(uv.y*6.283+uTime*0.5),cos(uv.x*6.283+uTime*0.5))*0.05;\n    fragColor=cppn_fn(uv,0.1*sin(0.3*uTime),0.1*sin(0.69*uTime),0.1*sin(0.44*uTime));\n}\n\nvoid main(){\n    vec4 col;mainImage(col,gl_FragCoord.xy);\n    col.rgb=hueShiftRGB(col.rgb,uHueShift);\n    float scanline_val=sin(gl_FragCoord.y*uScanFreq)*0.5+0.5;\n    col.rgb*=1.-(scanline_val*scanline_val)*uScan;\n    col.rgb+=(rand(gl_FragCoord.xy+uTime)-0.5)*uNoise;\n    gl_FragColor=vec4(clamp(col.rgb,0.0,1.0),1.0);\n}\n";
function DarkVeil(param) {
    let { hueShift = 0, noiseIntensity = 0, scanlineIntensity = 0, speed = 0.5, scanlineFrequency = 0, warpAmount = 0, resolutionScale = 1 } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DarkVeil.useEffect": ()=>{
            const canvas = ref.current;
            const parent = canvas.parentElement;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                dpr: Math.min(window.devicePixelRatio, 2),
                canvas
            });
            const gl = renderer.gl;
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex,
                fragment,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uResolution: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vec2"]()
                    },
                    uHueShift: {
                        value: hueShift
                    },
                    uNoise: {
                        value: noiseIntensity
                    },
                    uScan: {
                        value: scanlineIntensity
                    },
                    uScanFreq: {
                        value: scanlineFrequency
                    },
                    uWarp: {
                        value: warpAmount
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            const resize = {
                "DarkVeil.useEffect.resize": ()=>{
                    const w = parent.clientWidth, h = parent.clientHeight;
                    renderer.setSize(w * resolutionScale, h * resolutionScale);
                    program.uniforms.uResolution.value.set(w, h);
                }
            }["DarkVeil.useEffect.resize"];
            window.addEventListener("resize", resize);
            resize();
            const start = performance.now();
            let frame = 0;
            const loop = {
                "DarkVeil.useEffect.loop": ()=>{
                    program.uniforms.uTime.value = (performance.now() - start) / 1000 * speed;
                    program.uniforms.uHueShift.value = hueShift;
                    program.uniforms.uNoise.value = noiseIntensity;
                    program.uniforms.uScan.value = scanlineIntensity;
                    program.uniforms.uScanFreq.value = scanlineFrequency;
                    program.uniforms.uWarp.value = warpAmount;
                    renderer.render({
                        scene: mesh
                    });
                    frame = requestAnimationFrame(loop);
                }
            }["DarkVeil.useEffect.loop"];
            loop();
            return ({
                "DarkVeil.useEffect": ()=>{
                    cancelAnimationFrame(frame);
                    window.removeEventListener("resize", resize);
                }
            })["DarkVeil.useEffect"];
        }
    }["DarkVeil.useEffect"], [
        hueShift,
        noiseIntensity,
        scanlineIntensity,
        speed,
        scanlineFrequency,
        warpAmount,
        resolutionScale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref,
        className: "w-full h-full block"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/bits/DarkVeilBG.tsx",
        lineNumber: 165,
        columnNumber: 10
    }, this);
}
_s(DarkVeil, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = DarkVeil;
var _c;
__turbopack_context__.k.register(_c, "DarkVeil");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SplitTextWavy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplitTextWavy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function SplitTextWavy(param) {
    let { text, amplitude = 10, duration = 1.6, stagger = 0.06, className = "", letterSpacingClass = "tracking-wide" } = param;
    const chars = Array.from(text);
    const totalTravel = Math.max(0, (chars.length - 1) * stagger);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-label": text,
        className: "inline-flex flex-wrap ".concat(className),
        style: {
            lineHeight: 1.1
        },
        children: chars.map((ch, i)=>{
            const displayChar = ch === " " ? "\u00A0" : ch;
            const yFrames = [
                0,
                -amplitude,
                0,
                amplitude,
                0
            ];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "inline-block ".concat(letterSpacingClass),
                initial: {
                    y: 0
                },
                animate: {
                    y: yFrames
                },
                transition: {
                    duration,
                    times: [
                        0,
                        0.25,
                        0.5,
                        0.75,
                        1
                    ],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: i * stagger,
                    repeatDelay: totalTravel
                },
                children: displayChar
            }, i, false, {
                fileName: "[project]/src/components/ui/SplitTextWavy.tsx",
                lineNumber: 37,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SplitTextWavy.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = SplitTextWavy;
var _c;
__turbopack_context__.k.register(_c, "SplitTextWavy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Particles3D/lib/initialSetup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSceneSetup",
    ()=>createSceneSetup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
function createSceneSetup(container) {
    const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fog"]("#3e3f7e", 40, 80);
    const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 49;
    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
        antialias: true,
        alpha: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    function resizeToContainer() {
        const rect = container.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height);
        camera.aspect = rect.width / rect.height || 1;
        camera.updateProjectionMatrix();
    }
    function disposeRenderer() {
        // remove canvas
        const canvas = renderer.domElement;
        if (canvas === null || canvas === void 0 ? void 0 : canvas.parentElement) canvas.parentElement.removeChild(canvas);
        // try to lose GL context
        try {
            var _getContext, _this, _domElement_getContext, _domElement, _gl_getExtension, _ext_loseContext;
            const gl = ((_getContext = (_this = renderer).getContext) === null || _getContext === void 0 ? void 0 : _getContext.call(_this)) || ((_domElement = renderer.domElement) === null || _domElement === void 0 ? void 0 : (_domElement_getContext = _domElement.getContext) === null || _domElement_getContext === void 0 ? void 0 : _domElement_getContext.call(_domElement, "webgl"));
            const ext = gl === null || gl === void 0 ? void 0 : (_gl_getExtension = gl.getExtension) === null || _gl_getExtension === void 0 ? void 0 : _gl_getExtension.call(gl, "WEBGL_lose_context");
            ext === null || ext === void 0 ? void 0 : (_ext_loseContext = ext.loseContext) === null || _ext_loseContext === void 0 ? void 0 : _ext_loseContext.call(ext);
        } catch (e) {}
        try {
            var _forceContextLoss, _this1;
            (_forceContextLoss = (_this1 = renderer).forceContextLoss) === null || _forceContextLoss === void 0 ? void 0 : _forceContextLoss.call(_this1);
        } catch (e) {}
        // dispose three renderer
        renderer.dispose();
    }
    return {
        scene,
        camera,
        renderer,
        resizeToContainer,
        disposeRenderer
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Particles3D/lib/particlesSetup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createParticleSystem",
    ()=>createParticleSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function createParticleSystem(opts) {
    const particleCount = opts.particleCount;
    var _opts_radius;
    const radius = (_opts_radius = opts.radius) !== null && _opts_radius !== void 0 ? _opts_radius : 20;
    const icoGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](radius, 15);
    const icoPos = icoGeo.attributes.position.array;
    const basePositions = [];
    const positions = new Float32Array(particleCount * 3);
    const hoverIntensity = new Float32Array(particleCount);
    const baseSizes = new Float32Array(particleCount);
    const baseColors = [];
    const velocities = new Float32Array(particleCount * 3);
    const offsetVectors = [];
    const baseColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](opts.baseColor);
    for(let i = 0; i < particleCount; i++){
        const i3 = i * 3;
        const vertexIndex = Math.floor(Math.random() * (icoPos.length / 3)) * 3 | 0;
        const x = icoPos[vertexIndex];
        const y = icoPos[vertexIndex + 1];
        const z = icoPos[vertexIndex + 2];
        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;
        basePositions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, y, z));
        velocities[i3] = velocities[i3 + 1] = velocities[i3 + 2] = 0;
        hoverIntensity[i] = 0;
        baseSizes[i] = 0.5 + Math.random() * 0.5;
        baseColors.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](baseColor));
        offsetVectors.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02));
    }
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](1, 1);
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]().load(opts.texturePath);
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        map: texture,
        transparent: true,
        alphaTest: 0.01,
        depthWrite: false,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
    });
    const instancedMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedMesh"](geometry, material, particleCount);
    const dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
    for(let i = 0; i < particleCount; i++){
        const i3 = i * 3;
        dummy.position.set(positions[i3], positions[i3 + 1], positions[i3 + 2]);
        dummy.scale.set(baseSizes[i], baseSizes[i], 1);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
        instancedMesh.setColorAt(i, baseColors[i]);
    }
    instancedMesh.instanceMatrix.needsUpdate = true;
    if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;
    const shapeGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    shapeGroup.add(instancedMesh);
    const dispose = ()=>{
        try {
            var _dispose, _this, // clear instanced attributes
            _dispose1, _this1, _dispose2, _this2;
            shapeGroup.remove(instancedMesh);
            geometry.dispose();
            material.dispose();
            (_this = texture) === null || _this === void 0 ? void 0 : (_dispose = _this.dispose) === null || _dispose === void 0 ? void 0 : _dispose.call(_this);
            (_this1 = instancedMesh.geometry) === null || _this1 === void 0 ? void 0 : (_dispose1 = _this1.dispose) === null || _dispose1 === void 0 ? void 0 : _dispose1.call(_this1);
            (_this2 = instancedMesh.material) === null || _this2 === void 0 ? void 0 : (_dispose2 = _this2.dispose) === null || _dispose2 === void 0 ? void 0 : _dispose2.call(_this2);
        } catch (e) {}
    };
    return {
        instancedMesh,
        shapeGroup,
        basePositions,
        positions,
        velocities,
        hoverIntensity,
        baseSizes,
        baseColors,
        offsetVectors,
        particleCount,
        dispose
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Particles3D/lib/modelLoader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadModelPoints",
    ()=>loadModelPoints,
    "loadModelPointsCancellable",
    ()=>loadModelPointsCancellable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
;
;
const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
function loadModelPoints(url, particleCount) {
    let scale = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
    return new Promise((resolve, reject)=>{
        loader.load(url, (gltf)=>{
            try {
                resolve(extractPoints(gltf.scene, particleCount, scale, offset));
            } catch (e) {
                reject(e);
            }
        }, undefined, (err)=>reject(err));
    });
}
function loadModelPointsCancellable(url, particleCount) {
    let scale = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
    let cancelled = false;
    const promise = new Promise((resolve, reject)=>{
        loader.load(url, (gltf)=>{
            if (cancelled) return;
            try {
                resolve(extractPoints(gltf.scene, particleCount, scale, offset));
            } catch (e) {
                reject(e);
            }
        }, undefined, (err)=>{
            if (cancelled) return;
            reject(err);
        });
    });
    return {
        promise,
        abort: ()=>{
            cancelled = true;
        }
    };
}
function extractPoints(root, particleCount) {
    let scale = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
    const allVerts = [];
    root.traverse((child)=>{
        if (child.isMesh) {
            const mesh = child;
            const posAttr = mesh.geometry.attributes.position;
            const arr = posAttr.array;
            for(let i = 0; i < arr.length; i++)allVerts.push(arr[i]);
        }
    });
    if (allVerts.length === 0) {
        throw new Error("No vertex positions found in model");
    }
    const pts = [];
    const vertexCount = allVerts.length / 3;
    for(let i = 0; i < particleCount; i++){
        const vi = i % vertexCount * 3 | 0;
        pts.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](allVerts[vi] * scale + offset.x, allVerts[vi + 1] * scale + offset.y, allVerts[vi + 2] * scale + offset.z));
    }
    return pts;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Particles3D/lib/interactions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupInteractions",
    ()=>setupInteractions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function setupInteractions(modelPositionsArray, container, setActiveIndex) {
    const mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-10, -10);
    const currentIndexRef = {
        current: 0
    };
    const nextIndexRef = {
        current: 1
    };
    const morphProgressRef = {
        current: 0
    };
    const onMouseMove = (event)=>{
        const b = container.getBoundingClientRect();
        mouse.x = (event.clientX - b.left) / b.width * 2 - 1;
        mouse.y = -((event.clientY - b.top) / b.height) * 2 + 1;
    };
    const onTouchMove = (event)=>{
        const b = container.getBoundingClientRect();
        mouse.x = (event.touches[0].clientX - b.left) / b.width * 2 - 1;
        mouse.y = -((event.touches[0].clientY - b.top) / b.height) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, {
        passive: true
    });
    let animating = false;
    const morphToShape = (index)=>{
        const clamped = Math.max(0, Math.min(index, modelPositionsArray.length - 1));
        if (animating || clamped === currentIndexRef.current) return;
        animating = true;
        nextIndexRef.current = clamped;
        const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            defaults: {
                duration: 1,
                ease: "power2.inOut"
            },
            onComplete: ()=>{
                currentIndexRef.current = clamped;
                morphProgressRef.current = 0;
                animating = false;
            }
        });
        timeline.to(morphProgressRef, {
            current: 1
        }, 0);
    };
    // ---- GSAP timelines with ScrollTriggers
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
        const media = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].matchMedia();
        media.add({
            // Treat below 1024px as mobile
            isDesktop: "(min-width: 1536px)",
            isScreen1: "(min-width: 1350px)",
            isTabletUp: "(min-width: 1024px)"
        }, (context)=>{
            const { isDesktop, isScreen1, isTabletUp } = context.conditions;
            // On phones (<1024px), do NOT transform the particles or morph on scroll
            if (!isTabletUp) {
                // Ensure sphere stays centered and static on mobile
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set("#particles3d", {
                    clearProps: "x,y",
                    x: 0,
                    y: 0
                });
                return;
            }
            const xValue = isDesktop ? "-55%" : isScreen1 ? "-60%" : "-50%";
            const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    endTrigger: "#services",
                    end: "center center",
                    scrub: true,
                    invalidateOnRefresh: true,
                    onUpdate: (self)=>{
                        if (self.progress > 0.6) morphToShape(1);
                        if (self.progress < 0.5) morphToShape(0);
                    }
                }
            });
            timeline.to("#particles3d", {
                duration: 1,
                ease: "power1.inOut",
                x: xValue
            }, 0);
        });
        const cardElements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray(".service-card");
        const isTabletUpForScroll = window.matchMedia("(min-width: 1024px)").matches;
        const scrollTriggerCards = isTabletUpForScroll ? {
            trigger: "#services",
            start: "center center",
            end: "+=3000",
            pinSpacing: true,
            pin: true,
            scrub: true
        } : undefined;
        const timeline2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            scrollTrigger: scrollTriggerCards
        });
        const pauseDuration = 0.5;
        const isTabletUpForCards = window.matchMedia("(min-width: 1024px)").matches;
        if (isTabletUpForCards) {
            cardElements.forEach((el, index)=>{
                if (index === cardElements.length - 1) return;
                const cardWidth = el.offsetWidth;
                timeline2.to("#service-cards", {
                    x: -(cardWidth * (1 + index)),
                    duration: 1,
                    onComplete: ()=>{
                        setActiveIndex(index + 1);
                        morphToShape(index + 2);
                    },
                    onReverseComplete: ()=>{
                        setActiveIndex(index);
                        morphToShape(index + 1);
                    }
                }, "+=".concat(pauseDuration));
                timeline2.to(cardElements[index], {
                    opacity: 0,
                    scale: 0.5,
                    delay: 1,
                    duration: 0.5,
                    ease: "power1.inOut"
                }, "<-0.7");
            });
        }
        const isTabletUpForExit = window.matchMedia("(min-width: 1024px)").matches;
        const scrollTriggerExit = isTabletUpForExit ? {
            trigger: "#service-section",
            start: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true
        } : undefined;
        const timeline3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            scrollTrigger: scrollTriggerExit
        });
        if (window.matchMedia("(min-width: 1024px)").matches) {
            timeline3.to("#particles3d", {
                duration: 1,
                delay: 0.2,
                ease: "none",
                y: "-100%"
            });
        }
    });
    function onResize(camera, renderer, container) {
        const w = container.clientWidth || 1;
        const h = container.clientHeight || 1;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    }
    function dispose() {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("touchmove", onTouchMove);
        ctx.revert();
    }
    return {
        mouse,
        morphProgressRef,
        currentIndexRef,
        nextIndexRef,
        onResize,
        morphToShape,
        dispose
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Particles3D/lib/animations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startAnimationLoop",
    ()=>startAnimationLoop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
;
function startAnimationLoop(params) {
    const { scene, camera, renderer, particleSystem, modelPositionsArray, mouse, morphProgressRef, currentIndexRef, nextIndexRef } = params;
    const { instancedMesh, shapeGroup, basePositions, positions, velocities, hoverIntensity, baseSizes, baseColors, offsetVectors, particleCount } = particleSystem;
    const stiffness = 60.0;
    const damping = 0.88;
    const impulseStrength = 4.5;
    const effectRadius = 6;
    const transitionSpeed = 0.1;
    const hoverRadius = effectRadius * 1.5;
    const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
    const dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
    const color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
    const worldPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const cameraWorldPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const groupInverse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
    const localMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
    const rayOrigin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const rayDir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const localPosVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const closestPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const tmpVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raycaster"]();
    let rafId = 0;
    let t = 0;
    function frame() {
        rafId = requestAnimationFrame(frame);
        const dt = Math.min(clock.getDelta(), 0.05);
        const morphProgress = morphProgressRef.current;
        for(let i = 0; i < particleCount; i++){
            hoverIntensity[i] = Math.max(0, hoverIntensity[i] - transitionSpeed);
        }
        const fromModel = modelPositionsArray[currentIndexRef.current] || basePositions;
        const toModel = modelPositionsArray[nextIndexRef.current] || basePositions;
        for(let i = 0; i < particleCount; i++){
            const i3 = i * 3;
            // morphed base (lerp between current and next model)
            const morph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().lerpVectors(fromModel[i], toModel[i], morphProgress);
            const offset = offsetVectors[i];
            const targetX = morph.x + Math.sin(t + i) * offset.x * 100;
            const targetY = morph.y + Math.cos(t + i) * offset.y * 100;
            const targetZ = morph.z + Math.sin(t * 0.5 + i) * offset.z * 100;
            const px = positions[i3];
            const py = positions[i3 + 1];
            const pz = positions[i3 + 2];
            const fx = (targetX - px) * stiffness * dt;
            const fy = (targetY - py) * stiffness * dt;
            const fz = (targetZ - pz) * stiffness * dt;
            velocities[i3] += fx;
            velocities[i3 + 1] += fy;
            velocities[i3 + 2] += fz;
            velocities[i3] *= damping;
            velocities[i3 + 1] *= damping;
            velocities[i3 + 2] *= damping;
            positions[i3] += velocities[i3] * dt;
            positions[i3 + 1] += velocities[i3 + 1] * dt;
            positions[i3 + 2] += velocities[i3 + 2] * dt;
        }
        // PROXIMITY HOVER: compute ray origin & direction
        raycaster.setFromCamera(mouse, camera);
        rayOrigin.copy(raycaster.ray.origin);
        rayDir.copy(raycaster.ray.direction);
        shapeGroup.updateMatrixWorld(true);
        groupInverse.copy(shapeGroup.matrixWorld).invert();
        camera.getWorldPosition(cameraWorldPos);
        for(let i = 0; i < particleCount; i++){
            const i3 = i * 3;
            // const intensity = hoverIntensity[i];
            // local position in group space
            localPosVec.set(positions[i3], positions[i3 + 1], positions[i3 + 2]);
            // convert to world space
            worldPos.copy(localPosVec).applyMatrix4(shapeGroup.matrixWorld);
            tmpVec.subVectors(worldPos, rayOrigin);
            const tOnRay = tmpVec.dot(rayDir);
            closestPoint.copy(rayDir).multiplyScalar(tOnRay).add(rayOrigin);
            const distToRay = worldPos.distanceTo(closestPoint);
            if (distToRay < effectRadius && distToRay > 0.0001) {
                const inv = 1 - distToRay / effectRadius;
                const impulse = impulseStrength * inv;
                const closestLocal = closestPoint.clone();
                shapeGroup.worldToLocal(closestLocal);
                const dirLocal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](positions[i3] - closestLocal.x, positions[i3 + 1] - closestLocal.y, positions[i3 + 2] - closestLocal.z).normalize();
                velocities[i3] += dirLocal.x * impulse;
                velocities[i3 + 1] += dirLocal.y * impulse;
                velocities[i3 + 2] += dirLocal.z * impulse;
            }
            if (distToRay < hoverRadius) {
                const intensityNew = 1 - Math.min(1, distToRay / hoverRadius);
                hoverIntensity[i] = Math.min(1, hoverIntensity[i] + intensityNew * transitionSpeed * 3);
            }
            color.copy(baseColors[i]).lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](params.hoverColor), hoverIntensity[i]);
            const size = baseSizes[i] * (1 + hoverIntensity[i] * (2.0 - 1));
            dummy.position.copy(worldPos);
            dummy.lookAt(cameraWorldPos);
            dummy.scale.set(size, size, 1);
            dummy.updateMatrixWorld(true);
            localMatrix.multiplyMatrices(groupInverse, dummy.matrixWorld);
            instancedMesh.setMatrixAt(i, localMatrix);
            instancedMesh.setColorAt(i, color);
        }
        instancedMesh.instanceMatrix.needsUpdate = true;
        if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;
        t += 0.02;
        renderer.render(scene, camera);
        if (currentIndexRef.current > 1) {
            // shapeGroup.rotation.y = (shapeGroup.rotation.y % 2) * Math.PI;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(shapeGroup.rotation, {
                y: Math.PI,
                duration: 1,
                ease: "power1.out"
            });
        } else {
            shapeGroup.rotation.y += 0.001;
            if (shapeGroup.rotation.y >= 2 * Math.PI) {
                shapeGroup.rotation.y -= 2 * Math.PI;
            }
        }
    }
    frame();
    return ()=>cancelAnimationFrame(rafId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Particles3D/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Particles3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$initialSetup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Particles3D/lib/initialSetup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$particlesSetup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Particles3D/lib/particlesSetup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$modelLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Particles3D/lib/modelLoader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$interactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Particles3D/lib/interactions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Particles3D/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Particles3D() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationCancelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "Particles3D.useRef[animationCancelRef]": ()=>{}
    }["Particles3D.useRef[animationCancelRef]"]);
    const setActiveIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveIndex"])({
        "Particles3D.useActiveIndex[setActiveIndex]": (s)=>s.setActiveIndex
    }["Particles3D.useActiveIndex[setActiveIndex]"]);
    const setisLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"])({
        "Particles3D.useLoading[setisLoading]": (s)=>s.setisLoading
    }["Particles3D.useLoading[setisLoading]"]);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Particles3D.useEffect": ()=>{
            if (!containerRef.current) return;
            mountedRef.current = true;
            const { scene, camera, renderer, resizeToContainer, disposeRenderer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$initialSetup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSceneSetup"])(containerRef.current);
            const baseColor = 0xd7d7d7;
            const hoverColor = 0xbbbcf7;
            const particleCount = 4000;
            const particleSystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$particlesSetup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParticleSystem"])({
                particleCount,
                texturePath: "./images/glowingCircle2.png",
                radius: 20,
                baseColor
            });
            scene.add(particleSystem.shapeGroup);
            const modelPositionsArray = [
                particleSystem.basePositions
            ];
            // cancellable model loads (keeps original loadModelPoints available)
            const loaders = [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$modelLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadModelPointsCancellable"])("./models/CubeHollow.glb", particleCount, 13),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$modelLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadModelPointsCancellable"])("./models/development.glb", particleCount, 12),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$modelLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadModelPointsCancellable"])("./models/marketing.glb", particleCount, 12),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$modelLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadModelPointsCancellable"])("./models/DNA2.glb", particleCount, 7),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$modelLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadModelPointsCancellable"])("./models/AImodel.glb", particleCount, 12),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$modelLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadModelPointsCancellable"])("./models/security.glb", particleCount, 14)
            ];
            Promise.all(loaders.map({
                "Particles3D.useEffect": (l)=>l.promise
            }["Particles3D.useEffect"])).then({
                "Particles3D.useEffect": (models)=>{
                    if (!mountedRef.current) return;
                    modelPositionsArray.push(...models);
                }
            }["Particles3D.useEffect"]).catch({
                "Particles3D.useEffect": (err)=>{
                    console.error("Model load error:", err);
                }
            }["Particles3D.useEffect"]).finally({
                "Particles3D.useEffect": ()=>{
                    if (mountedRef.current) setTimeout({
                        "Particles3D.useEffect": ()=>setisLoading(false)
                    }["Particles3D.useEffect"], 0);
                }
            }["Particles3D.useEffect"]);
            const { mouse, morphProgressRef, currentIndexRef, nextIndexRef, onResize, dispose: disposeInteractions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$interactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupInteractions"])(modelPositionsArray, containerRef.current, setActiveIndex);
            const resizeHandler = {
                "Particles3D.useEffect.resizeHandler": ()=>{
                    resizeToContainer();
                    onResize(camera, renderer, containerRef.current);
                }
            }["Particles3D.useEffect.resizeHandler"];
            window.addEventListener("resize", resizeHandler);
            animationCancelRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Particles3D$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAnimationLoop"])({
                scene,
                camera,
                renderer,
                particleSystem,
                modelPositionsArray,
                mouse,
                morphProgressRef,
                currentIndexRef,
                nextIndexRef,
                hoverColor
            });
            return ({
                "Particles3D.useEffect": ()=>{
                    var _particleSystem_dispose;
                    mountedRef.current = false;
                    // cancel RAF & tweens
                    animationCancelRef.current();
                    // listeners
                    window.removeEventListener("resize", resizeHandler);
                    // interactions (GSAP + window events)
                    disposeInteractions();
                    // particle system resources
                    // also remove from scene to drop refs
                    scene.remove(particleSystem.shapeGroup);
                    (_particleSystem_dispose = particleSystem.dispose) === null || _particleSystem_dispose === void 0 ? void 0 : _particleSystem_dispose.call(particleSystem);
                    // defensive cleanup in case anything else was added
                    scene.traverse({
                        "Particles3D.useEffect": (o)=>{
                            var _o_geometry;
                            if ((_o_geometry = o.geometry) === null || _o_geometry === void 0 ? void 0 : _o_geometry.dispose) o.geometry.dispose();
                            const mat = o.material;
                            const disposeMat = {
                                "Particles3D.useEffect.disposeMat": (m)=>{
                                    var _m_dispose;
                                    if (!m) return;
                                    for(const k in m){
                                        const v = m[k];
                                        if (v && v.isTexture && v.dispose) v.dispose();
                                    }
                                    (_m_dispose = m.dispose) === null || _m_dispose === void 0 ? void 0 : _m_dispose.call(m);
                                }
                            }["Particles3D.useEffect.disposeMat"];
                            if (Array.isArray(mat)) mat.forEach(disposeMat);
                            else disposeMat(mat);
                        }
                    }["Particles3D.useEffect"]);
                    while(scene.children.length)scene.remove(scene.children[0]);
                    // renderer (remove canvas + force context loss + dispose)
                    disposeRenderer();
                    // abort any inflight model loads
                    loaders.forEach({
                        "Particles3D.useEffect": (l)=>l.abort()
                    }["Particles3D.useEffect"]);
                }
            })["Particles3D.useEffect"];
        }
    }["Particles3D.useEffect"], [
        setActiveIndex,
        setisLoading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            width: "100%",
            height: "100%"
        },
        className: "relative z-10 "
    }, void 0, false, {
        fileName: "[project]/src/components/Particles3D/index.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(Particles3D, "bm4tJ5uB2lgjnGupQdRn54EK8C4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveIndex"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"]
    ];
});
_c = Particles3D;
var _c;
__turbopack_context__.k.register(_c, "Particles3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/bits/Counter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Counter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function Number(param) {
    let { mv, number, height } = param;
    _s();
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mv, {
        "Number.useTransform[y]": (latest)=>{
            const placeValue = latest % 10;
            const offset = (10 + number - placeValue) % 10;
            let memo = offset * height;
            if (offset > 5) {
                memo -= 10 * height;
            }
            return memo;
        }
    }["Number.useTransform[y]"]);
    const style = {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        style: {
            ...style,
            y
        },
        children: number
    }, void 0, false, {
        fileName: "[project]/src/components/ui/bits/Counter.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_s(Number, "iBIhkOsOI2UfcIQQOpejCYW/qvw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Number;
function Digit(param) {
    let { place, value, height, digitStyle } = param;
    _s1();
    const valueRoundedToPlace = Math.floor(value / place);
    const animatedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(valueRoundedToPlace);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Digit.useEffect": ()=>{
            animatedValue.set(valueRoundedToPlace);
        }
    }["Digit.useEffect"], [
        animatedValue,
        valueRoundedToPlace
    ]);
    const defaultStyle = {
        height,
        position: "relative",
        width: "1ch",
        margin: "0px -2px"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...defaultStyle,
            ...digitStyle
        },
        children: Array.from({
            length: 10
        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Number, {
                mv: animatedValue,
                number: i,
                height: height
            }, i, false, {
                fileName: "[project]/src/components/ui/bits/Counter.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/bits/Counter.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s1(Digit, "qYtFjUrWxRaMeOq/9roDRauIJXM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c1 = Digit;
function Counter(param) {
    let { value, fontSize = 100, padding = 0, places = [
        100,
        10,
        1
    ], gap = 8, borderRadius = 4, horizontalPadding = 2, textColor = "white", fontWeight = "bold", containerStyle, counterStyle, digitStyle, gradientHeight = 16, gradientFrom = "black", gradientTo = "transparent", topGradientStyle, bottomGradientStyle } = param;
    const height = fontSize + padding;
    const defaultContainerStyle = {
        position: "relative",
        display: "inline-block"
    };
    const defaultCounterStyle = {
        fontSize,
        display: "flex",
        gap: gap,
        overflow: "hidden",
        borderRadius: borderRadius,
        paddingLeft: 0,
        paddingRight: horizontalPadding,
        lineHeight: 1,
        color: textColor,
        fontWeight: fontWeight
    };
    const gradientContainerStyle = {
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };
    const defaultTopGradientStyle = {
        height: gradientHeight,
        background: "linear-gradient(to bottom, ".concat(gradientFrom, ", ").concat(gradientTo, ")")
    };
    const defaultBottomGradientStyle = {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: gradientHeight,
        background: "linear-gradient(to top, ".concat(gradientFrom, ", ").concat(gradientTo, ")")
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...defaultContainerStyle,
            ...containerStyle
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...defaultCounterStyle,
                    ...counterStyle
                },
                children: places.map((place)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Digit, {
                        place: place,
                        value: value,
                        height: height,
                        digitStyle: digitStyle
                    }, place, false, {
                        fileName: "[project]/src/components/ui/bits/Counter.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/bits/Counter.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: gradientContainerStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: topGradientStyle ? topGradientStyle : defaultTopGradientStyle
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/bits/Counter.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: bottomGradientStyle ? bottomGradientStyle : defaultBottomGradientStyle
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/bits/Counter.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/bits/Counter.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/bits/Counter.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_c2 = Counter;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Number");
__turbopack_context__.k.register(_c1, "Digit");
__turbopack_context__.k.register(_c2, "Counter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/HeroComponent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bits$2f$Counter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/bits/Counter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const HeroComponent = ()=>{
    _s();
    const { setOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStartProjectModal"])();
    const finished = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"])({
        "HeroComponent.useLoading[finished]": (s)=>s.finished
    }["HeroComponent.useLoading[finished]"]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [satisfaction, setSatisfaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fontSize, setFontSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeroComponent.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (window.innerWidth >= 1024) return 30;
            return 22;
        }
    }["HeroComponent.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroComponent.useEffect": ()=>{
            const handleResize = {
                "HeroComponent.useEffect.handleResize": ()=>{
                    if (window.innerWidth >= 1024) setFontSize(30);
                    else setFontSize(22);
                }
            }["HeroComponent.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "HeroComponent.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["HeroComponent.useEffect"];
        }
    }["HeroComponent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroComponent.useEffect": ()=>{
            if (finished) {
                const projANim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(0, 50, {
                    duration: 2,
                    ease: "circOut",
                    onUpdate: {
                        "HeroComponent.useEffect.projANim": (latest)=>setProjects(Math.floor(latest))
                    }["HeroComponent.useEffect.projANim"]
                });
                const satAnim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(0, 100, {
                    duration: 2,
                    ease: "circOut",
                    onUpdate: {
                        "HeroComponent.useEffect.satAnim": (latest)=>setSatisfaction(Math.floor(latest))
                    }["HeroComponent.useEffect.satAnim"]
                });
                return ({
                    "HeroComponent.useEffect": ()=>{
                        projANim.stop();
                        satAnim.stop();
                    }
                })["HeroComponent.useEffect"];
            }
        }
    }["HeroComponent.useEffect"], [
        finished
    ]);
    if (!finished) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "flex flex-col w-main m-auto  pt-10 pb-14 h-full relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grow flex justify-center items-center ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl/[1.7rem] sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light sm-text-left text-center  sm:w-[500px] md:w-[660px] xl:w-[830px] 2xl:w-[1000px] ",
                            id: "hero-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    id: "title1",
                                    initial: {
                                        x: 150
                                    },
                                    animate: {
                                        x: 0
                                    },
                                    transition: {
                                        duration: 2,
                                        ease: "anticipate"
                                    },
                                    className: "flex justify-center sm:justify-start",
                                    children: [
                                        "Building ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic font-bold pr-2",
                                            children: "Digital"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                            lineNumber: 71,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "text-right mt-0 flex justify-center sm:justify-end",
                                    id: "title2",
                                    initial: {
                                        x: -150
                                    },
                                    animate: {
                                        x: 0
                                    },
                                    transition: {
                                        duration: 2,
                                        ease: "anticipate"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic font-bold",
                                            children: "Solutions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " That Matter"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroComponent.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: 50,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            duration: 1.8,
                            ease: "anticipate"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between w-full gap-10 md:gap-0 items-center md:items-end",
                            id: "hero-stats",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex max-w-xs lg:max-w-lg flex-col gap-10 md:items-start items-center text-center md:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We empower organizations with AI that turns complex challenges into real-world outcomes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex text-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                onClick: ()=>setOpen(true),
                                                children: "Start Your Project"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex text-sm mobile:gap-10 lg:gap-16 sm:justify-center md:justify-end justify-between w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl lg:text-3xl flex items-center font-semibold text-nowrap -ml-5 sm:-ml-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bits$2f$Counter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            value: projects,
                                                            places: [
                                                                10,
                                                                1
                                                            ],
                                                            gap: 2,
                                                            fontSize: fontSize,
                                                            fontWeight: 600,
                                                            gradientFrom: "transparent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-tertiary",
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: [
                                                        "Projects ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 30
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Delivered"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl lg:text-3xl flex items-center font-semibold text-nowrap -ml-5 sm:-ml-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bits$2f$Counter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            value: satisfaction,
                                                            gap: 2,
                                                            fontSize: fontSize,
                                                            fontWeight: 600,
                                                            gradientFrom: "transparent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-tertiary",
                                                            children: "%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: [
                                                        "Client",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Satisfaction"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl lg:text-3xl font-semibold text-nowrap",
                                                    children: [
                                                        "24",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-tertiary",
                                                            children: "/"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "7"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: [
                                                        "Support",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Available"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/HeroComponent.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/HeroComponent.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroComponent.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/HeroComponent.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/HeroComponent.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroComponent, "Z6SyKWs2k9ciiX5uEgK8ZY8X48g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStartProjectModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"]
    ];
});
_c = HeroComponent;
const __TURBOPACK__default__export__ = HeroComponent;
var _c;
__turbopack_context__.k.register(_c, "HeroComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ServiceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/go/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const ServiceCard = (props)=>{
    var _props_services, _props_tools;
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const h3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const card2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // On mobile, keep consistent background; on large screens, highlight active card
    const bgcolor = props.active ? "lg:bg-primary bg-[url('/images/service-card-bg.png')] bg-cover bg-bottom-right bg-no-repeat" : "bg-[url('/images/service-card-bg.png')] bg-cover bg-bottom-right bg-no-repeat";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceCard.useEffect": ()=>{
            // Simple appear-on-scroll for mobile only
            if ("object" !== "undefined" && cardRootRef.current) {
                const isMobile = window.matchMedia("(max-width: 1023px)").matches;
                if (isMobile) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
                    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                        "ServiceCard.useEffect.ctx": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(cardRootRef.current, {
                                autoAlpha: 0,
                                y: 24,
                                scale: 0.98
                            }, {
                                autoAlpha: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.6,
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: cardRootRef.current,
                                    start: "top 85%",
                                    toggleActions: "play none none none"
                                }
                            });
                        }
                    }["ServiceCard.useEffect.ctx"], cardRootRef);
                    return ({
                        "ServiceCard.useEffect": ()=>ctx.revert()
                    })["ServiceCard.useEffect"];
                }
            }
        }
    }["ServiceCard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceCard.useEffect": ()=>{
            // Desktop-only transform logic; keep natural flow on mobile
            if ("TURBOPACK compile-time truthy", 1) {
                const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
                if (!isDesktop) {
                    if (h3Ref.current) h3Ref.current.style.transform = "none";
                    if (card2Ref.current) card2Ref.current.style.paddingTop = "0px";
                    return;
                }
            }
            if (h3Ref.current && cardRef.current && card2Ref.current) {
                const h3Height = h3Ref.current.offsetHeight;
                const cardHeight = cardRef.current.offsetHeight;
                card2Ref.current.style.paddingTop = "".concat(h3Height + 80, "px");
                if (props.active) {
                    h3Ref.current.style.transform = "scale(1.3)";
                } else {
                    h3Ref.current.style.transform = "translateY(".concat(cardHeight - h3Height, "px) scale(1)");
                }
            }
        }
    }["ServiceCard.useEffect"], [
        props.active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRootRef,
        className: "service-card w-full max-w-[100vw] lg:max-w-none lg:w-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-[1px] grow shrink-0 relative border border-zinc-600 ring-1 ring-zinc-700/60 ring-inset overflow-hidden rounded-3xl w-full max-w-[100vw] h-auto min-h-[460px] lg:w-[340px] lg:h-[460px] xl:w-[380px] xl:h-[500px] 2xl:w-[460px] 2xl:h-[560px] ".concat(bgcolor, " duration-300 scale-100 ").concat(props.active ? "lg:scale-100" : "lg:scale-90"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 h-full relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full duration-200 ".concat(bgcolor, " absolute inset-0 rounded-3xl")
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ServiceCard.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-full z-10",
                            ref: cardRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl pr-1 2xl:text-2xl font-semibold left-0 duration-800 ease-in-out top-0 lg:absolute origin-top-left ",
                                    ref: h3Ref,
                                    children: props.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoArrowUpRight"], {
                                    className: "size-7 sm:size-8 lg:size-10 absolute right-4 top-4 lg:right-0 lg:top-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full ".concat(props.active ? "lg:-translate-y-full" : "lg:pt-0", " duration-800 ease-in-out"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col h-auto lg:h-full relative mb-4 sm:mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-3xl sm:text-4xl font-semibold",
                                                    children: props.number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-6 lg:gap-8 lg:justify-between h-full",
                                            ref: card2Ref,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm 2xl:text-base",
                                                        children: props.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-6 sm:gap-8 justify-between flex-col sm:flex-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-foreground/60 text-lg",
                                                                    children: "Services"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col text-sm gap-1",
                                                                    children: (_props_services = props.services) === null || _props_services === void 0 ? void 0 : _props_services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "",
                                                                            children: service
                                                                        }, index, false, {
                                                                            fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                                            lineNumber: 121,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-foreground/60 text-lg",
                                                                    children: "Tools"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                props.toolIcons && props.toolIcons.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-3 gap-x-3 gap-y-3 pt-1 sm:gap-x-3 sm:gap-y-3",
                                                                    children: props.toolIcons.map((IconNode, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex items-center justify-center text-2xl sm:text-3xl lg:text-2xl xl:text-3xl opacity-90",
                                                                            "aria-hidden": true,
                                                                            children: IconNode
                                                                        }, index, false, {
                                                                            fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                                            lineNumber: 132,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-3 gap-x-3 gap-y-3 pt-1 sm:gap-x-3 sm:gap-y-3 text-sm",
                                                                    children: (_props_tools = props.tools) === null || _props_tools === void 0 ? void 0 : _props_tools.map((tool, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-center",
                                                                            children: tool
                                                                        }, index, false, {
                                                                            fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                                            lineNumber: 144,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/ServiceCard.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:block absolute inset-0 -translate-1/2 size-[500px] bg-radial from-[#B4B5ED] via-[696AAC] to-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ServiceCard.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ServiceCard.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ServiceCard.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServiceCard, "I1oFWSqnJRpSKa1jNhXxUt/1G3w=");
_c = ServiceCard;
const __TURBOPACK__default__export__ = ServiceCard;
var _c;
__turbopack_context__.k.register(_c, "ServiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ServiceCardContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ServiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ServiceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ServiceCardContainer = ()=>{
    _s();
    const activeIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveIndex"])({
        "ServiceCardContainer.useActiveIndex[activeIndex]": (state)=>state.activeIndex
    }["ServiceCardContainer.useActiveIndex[activeIndex]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-6 xl:gap-8 w-full max-w-[100vw] lg:max-w-none px-4 lg:px-0 overflow-x-hidden lg:overflow-visible",
        id: "service-cards",
        children: serviceCardData.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ServiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: activeIndex === index,
                ...card
            }, card.title, false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServiceCardContainer, "yohxFyWOjg9+dl8MAO6C4lTUyOs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveIndex"]
    ];
});
_c = ServiceCardContainer;
const __TURBOPACK__default__export__ = ServiceCardContainer;
const serviceCardData = [
    {
        number: "01",
        title: "Product Design",
        description: "End-to-end product design—from research and UX flows to polished UI systems and developer-ready handoff.",
        services: [
            "User Research & Strategy",
            "UX Flows & Wireframes",
            "UI Systems & Prototypes",
            "Design Ops & Dev Handoff"
        ],
        tools: [
            "Figma",
            "Sketch",
            "Adobe XD",
            "Blender",
            "Three.js",
            "Abstract"
        ],
        toolIcons: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFigma"], {}, "figma", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSketch"], {}, "sketch", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiAdobexd"], {}, "xd", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiBlender"], {}, "blender", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiThreedotjs"], {}, "three", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiAbstract"], {}, "abstract", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    },
    {
        number: "02",
        title: "Development",
        description: "Robust, scalable products across web and mobile—from elegant UIs to reliable APIs and automated DevOps.",
        services: [
            "Frontend Platforms (React / Next)",
            "Backend APIs & Microservices (Node)",
            "Mobile & Cross‑platform (Flutter)",
            "CI/CD & Cloud Ops (Docker)"
        ],
        tools: [
            "React",
            "Flutter",
            "Next.js",
            "Node.js",
            "Docker",
            "TypeScript"
        ],
        toolIcons: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiReact"], {}, "react", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFlutter"], {}, "flutter", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNextdotjs"], {}, "next", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNodedotjs"], {}, "node", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiDocker"], {}, "docker", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTypescript"], {}, "ts", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    },
    {
        number: "03",
        title: "GTM Strategy",
        description: "Data-driven go-to-market for SaaS and AI—clear positioning, smart pricing, and repeatable growth loops from ICP to post‑launch analytics.",
        services: [
            "ICP & Segmentation",
            "Positioning, Narrative & Messaging",
            "Pricing & Packaging",
            "Demand Gen & Content Engine"
        ],
        tools: [
            "HubSpot",
            "Salesforce",
            "Google Analytics",
            "Mixpanel",
            "Intercom",
            "Zapier"
        ],
        toolIcons: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiHubspot"], {}, "hubspot", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSalesforce"], {}, "salesforce", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiGoogleanalytics"], {}, "ga", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMixpanel"], {}, "mixpanel", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiIntercom"], {}, "intercom", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiZapier"], {}, "zapier", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    },
    {
        number: "04",
        title: "Healthcare Apps",
        description: "Secure, compliant healthcare software—from telehealth to EHR integrations—built for HIPAA and auditability.",
        services: [
            "HIPAA & PHI Compliance",
            "Telehealth & Patient Portals",
            "EHR Integrations (FHIR / HL7)",
            "Audit Logging & Access Controls"
        ],
        toolIcons: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiAmazonwebservices"], {}, "aws", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiGooglecloud"], {}, "gcp", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiOkta"], {}, "okta", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiAuth0"], {}, "auth0", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTwilio"], {}, "twilio", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiStripe"], {}, "stripe", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    },
    {
        number: "05",
        title: "AI Development",
        description: "Build production‑ready AI—rapid prototyping to deployed models with solid evals, observability, and safety.",
        services: [
            "LLM Apps & Agents (RAG / Tools)",
            "Fine‑tuning & Prompt Optimization",
            "Model Evals, Guardrails & Monitoring",
            "Vision, NLP & Speech Pipelines"
        ],
        toolIcons: [
            // Frameworks & tools
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTensorflow"], {}, "tensorflow", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPytorch"], {}, "pytorch", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiScikitlearn"], {}, "sklearn", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiKeras"], {}, "keras", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiHuggingface"], {}, "hf", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiLangchain"], {}, "langchain", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    },
    {
        number: "06",
        title: "IoT Development",
        description: "From device firmware to cloud ingestion—secure, reliable IoT systems with OTA updates and real‑time telemetry.",
        services: [
            "Embedded Firmware & Drivers",
            "BLE / Zigbee / LoRa Connectivity",
            "MQTT Ingestion & Stream Processing",
            "Edge AI & OTA Update Pipelines"
        ],
        toolIcons: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiArduino"], {}, "arduino", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiRaspberrypi"], {}, "raspberrypi", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMqtt"], {}, "mqtt", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNodered"], {}, "nodered", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiZigbee"], {}, "zigbee", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNordicsemiconductor"], {}, "nordic", false, {
                fileName: "[project]/src/components/ui/ServiceCardContainer.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }
];
var _c;
__turbopack_context__.k.register(_c, "ServiceCardContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/LightRays.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
const LightRays = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute inset-0 overflow-hidden pointer-events-none",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/images/LightRays.png",
            alt: "Light rays DevDisplay",
            width: 880,
            height: 975,
            loading: "eager",
            className: "h-auto"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/LightRays.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/LightRays.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LightRays;
const __TURBOPACK__default__export__ = LightRays;
var _c;
__turbopack_context__.k.register(_c, "LightRays");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Loading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react/shallow.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Loading = ()=>{
    _s();
    // ✅ Single subscription with shallow equality
    const { isLoading, finished, setFinished } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "Loading.useLoading.useShallow": (s)=>({
                isLoading: s.isLoading,
                finished: s.finished,
                setFinished: s.setFinished
            })
    }["Loading.useLoading.useShallow"]));
    // Motion value for counter (0–100)
    const counterValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const [counter, setCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Only fire "finish" once
    const finishedOnceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Disable scroll while loader is active
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Loading.useEffect": ()=>{
            const body = document.body;
            // const prevOverflow = body.style.overflow;
            if (!finished) {
                body.style.overflow = "hidden";
            } else {
                body.style.overflowY = "auto";
            }
            return ({
                "Loading.useEffect": ()=>{
                    body.style.overflowY = "auto";
                }
            })["Loading.useEffect"];
        }
    }["Loading.useEffect"], [
        finished
    ]);
    // 🔕 Only update React state when the rounded value actually changes
    const lastRoundedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(counterValue, "change", {
        "Loading.useMotionValueEvent": (latest)=>{
            const rounded = Math.round(latest);
            if (rounded !== lastRoundedRef.current) {
                lastRoundedRef.current = rounded;
                setCounter(rounded);
                if (rounded === 100 && !finishedOnceRef.current) {
                    finishedOnceRef.current = true;
                    // short delay to let the final animation settle
                    setTimeout({
                        "Loading.useMotionValueEvent": ()=>setFinished(true)
                    }["Loading.useMotionValueEvent"], 400);
                }
            }
        }
    }["Loading.useMotionValueEvent"]);
    // Drive progress while loading; complete to 100 when done
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Loading.useEffect": ()=>{
            let intervalId = null;
            let controls = null;
            const tick = {
                "Loading.useEffect.tick": ()=>{
                    const current = counterValue.get();
                    if (isLoading) {
                        if (current < 50) {
                            const rand = Math.floor(Math.random() * 10) + 5; // 5–14
                            const next = Math.min(current + rand, 50);
                            controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(counterValue, next, {
                                type: "tween",
                                duration: 0.3,
                                ease: "easeOut"
                            });
                        } else if (current < 90) {
                            const rand = Math.floor(Math.random() * 3) + 1; // 1–3
                            const next = Math.min(current + rand, 90);
                            controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(counterValue, next, {
                                type: "tween",
                                duration: 0.8,
                                ease: "easeOut"
                            });
                        }
                    }
                }
            }["Loading.useEffect.tick"];
            if (isLoading) {
                intervalId = setInterval(tick, 600);
                // kick immediately so it doesn't wait 600ms on first render
                tick();
            } else {
                // Finish to 100 when loading ends
                controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(counterValue, 100, {
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                });
                if (intervalId) clearInterval(intervalId);
            }
            return ({
                "Loading.useEffect": ()=>{
                    if (intervalId) clearInterval(intervalId);
                    controls === null || controls === void 0 ? void 0 : controls.stop();
                }
            })["Loading.useEffect"];
        }
    }["Loading.useEffect"], [
        isLoading,
        counterValue
    ]);
    // Measure box width via ResizeObserver (less work than ref-callback churn)
    const [box2Width, setBox2Width] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [box2Height, setBox2Height] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const boxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Loading.useEffect": ()=>{
            // track mobile viewport
            if ("TURBOPACK compile-time truthy", 1) {
                const mql = window.matchMedia("(max-width: 640px)");
                const listener = {
                    "Loading.useEffect.listener": (e)=>setIsMobile(e.matches)
                }["Loading.useEffect.listener"];
                setIsMobile(mql.matches);
                mql.addEventListener("change", listener);
                return ({
                    "Loading.useEffect": ()=>mql.removeEventListener("change", listener)
                })["Loading.useEffect"];
            }
        }
    }["Loading.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Loading.useEffect": ()=>{
            if (!boxRef.current || typeof ResizeObserver === "undefined") return;
            const el = boxRef.current;
            const ro = new ResizeObserver({
                "Loading.useEffect": (entries)=>{
                    var _entry_contentRect;
                    const entry = entries[0];
                    if (entry === null || entry === void 0 ? void 0 : (_entry_contentRect = entry.contentRect) === null || _entry_contentRect === void 0 ? void 0 : _entry_contentRect.width) {
                        setBox2Width(Math.round(entry.contentRect.width));
                        setBox2Height(Math.round(entry.contentRect.height));
                    } else {
                        setBox2Width(el.offsetWidth);
                        setBox2Height(el.offsetHeight);
                    }
                }
            }["Loading.useEffect"]);
            ro.observe(el);
            // initialize immediately
            setBox2Width(el.offsetWidth);
            setBox2Height(el.offsetHeight);
            return ({
                "Loading.useEffect": ()=>ro.disconnect()
            })["Loading.useEffect"];
        }
    }["Loading.useEffect"], []);
    const padding = 8; // Tailwind p-2
    const maxCrossSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Loading.useMemo[maxCrossSize]": ()=>{
            // minimize layout work by recomputing only when inputs change
            if (isMobile) {
                return "max(".concat(100 - counter, "%, ").concat(box2Height + padding * 2, "px)");
            }
            return "max(".concat(100 - counter, "%, ").concat(box2Width + padding * 2, "px)");
        }
    }["Loading.useMemo[maxCrossSize]"], [
        isMobile,
        counter,
        box2Width,
        box2Height
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: !finished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed left-0 top-0 bg-background z-99 w-screen h-screen px-10 py-10 flex",
            initial: {
                opacity: 1,
                scale: 1
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                pointerEvents: "none"
            },
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "absolute top-30 left-1/2 -translate-x-1/2 text-[14vw] font-bold text-nowrap text-center opacity-5",
                    children: "DEVDISPLAY"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Loading.tsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "".concat(isMobile ? "absolute rounded-3xl bottom-0 left-0" : "absolute rounded-3xl top-0 right-0", " bg-zinc-900 w-full h-full p-2 ").concat(isMobile ? "will-change-[max-height]" : "will-change-[max-width]"),
                        initial: isMobile ? {
                            maxHeight: "100%"
                        } : {
                            maxWidth: "100%"
                        },
                        animate: isMobile ? {
                            maxHeight: maxCrossSize
                        } : {
                            maxWidth: maxCrossSize
                        },
                        exit: isMobile ? {
                            y: 500
                        } : {
                            x: 500
                        },
                        transition: {
                            type: "spring",
                            stiffness: 80,
                            damping: 30,
                            duration: 0.6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: boxRef,
                                className: "".concat(isMobile ? "w-full h-96" : "w-96 h-full", " bg-gradient-to-b from-background to-primary rounded-3xl flex flex-col justify-between p-5"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-8xl tracking-tighter",
                                            children: [
                                                counter,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Loading.tsx",
                                            lineNumber: 189,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Loading.tsx",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "uppercase text-4xl text-foreground font-light",
                                        children: "Loading..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Loading.tsx",
                                        lineNumber: 193,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Loading.tsx",
                                lineNumber: 184,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Loading.tsx",
                            lineNumber: 183,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Loading.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Loading.tsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, "loading-screen", true, {
            fileName: "[project]/src/components/ui/Loading.tsx",
            lineNumber: 158,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Loading.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Loading, "wba5JilpIh/MaOb+HebQ2HTfqw8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = Loading;
const __TURBOPACK__default__export__ = Loading;
var _c;
__turbopack_context__.k.register(_c, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/css/WorkBox.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "box": "WorkBox-module__BigLmG__box",
  "icon": "WorkBox-module__BigLmG__icon",
  "work": "WorkBox-module__BigLmG__work",
});
}),
"[project]/src/components/ui/WorkBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$css$2f$WorkBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/css/WorkBox.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/go/index.mjs [app-client] (ecmascript)");
;
;
;
;
const WorkBox = (param)=>{
    let { number, title, workType, link, active, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: link,
        className: "py-7 px-3 border-b border-foreground/20 duration-200 ".concat(active && "bg-foreground/5", " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$css$2f$WorkBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].box),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between relative ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 sm:gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg",
                            children: number
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/WorkBox.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/WorkBox.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/WorkBox.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-foreground/40 text-sm sm:text-base max-w-20 sm:max-w-max duration-300 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$css$2f$WorkBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work),
                    children: workType
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/WorkBox.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoArrowUpRight"], {
                    className: "size-7 absolute right-0 top-1/2 -translate-y-1/2 opacity-0 duration-200 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$css$2f$WorkBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/WorkBox.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/WorkBox.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/WorkBox.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WorkBox;
const __TURBOPACK__default__export__ = WorkBox;
var _c;
__turbopack_context__.k.register(_c, "WorkBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CaseStudies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WorkBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/WorkBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CaseStudies = ()=>{
    var _WorkList_activeIndex_media, _WorkList_activeIndex, _WorkList_activeIndex_media1, _WorkList_activeIndex1, _WorkList_activeIndex_media2, _WorkList_activeIndex2, _WorkList_activeIndex3;
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex col-span-1 lg:col-span-7 flex-col",
                children: WorkList.map((work, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WorkBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...work,
                        active: activeIndex === index,
                        onMouseOver: ()=>setActiveIndex(index)
                    }, work.number, false, {
                        fileName: "[project]/src/components/ui/CaseStudies.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CaseStudies.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-5 h-full items-center hidden lg:flex justify-center relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-0 top-1/2 -translate-y-1/2",
                    children: ((_WorkList_activeIndex = WorkList[activeIndex]) === null || _WorkList_activeIndex === void 0 ? void 0 : (_WorkList_activeIndex_media = _WorkList_activeIndex.media) === null || _WorkList_activeIndex_media === void 0 ? void 0 : _WorkList_activeIndex_media.type) === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: (_WorkList_activeIndex1 = WorkList[activeIndex]) === null || _WorkList_activeIndex1 === void 0 ? void 0 : (_WorkList_activeIndex_media1 = _WorkList_activeIndex1.media) === null || _WorkList_activeIndex_media1 === void 0 ? void 0 : _WorkList_activeIndex_media1.url,
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        className: "w-full  object-contain"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudies.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/CaseStudies/".concat((_WorkList_activeIndex2 = WorkList[activeIndex]) === null || _WorkList_activeIndex2 === void 0 ? void 0 : (_WorkList_activeIndex_media2 = _WorkList_activeIndex2.media) === null || _WorkList_activeIndex_media2 === void 0 ? void 0 : _WorkList_activeIndex_media2.url),
                        alt: (_WorkList_activeIndex3 = WorkList[activeIndex]) === null || _WorkList_activeIndex3 === void 0 ? void 0 : _WorkList_activeIndex3.title,
                        className: "w-full object-contain object-right",
                        width: 1000,
                        height: 650,
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CaseStudies.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/CaseStudies.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CaseStudies.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CaseStudies.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CaseStudies, "rd+5N/MkYjuYD0I+B+MlySxQysU=");
_c = CaseStudies;
const __TURBOPACK__default__export__ = CaseStudies;
const WorkList = [
    {
        number: "01",
        title: "ClinixAI",
        workType: "Mobile / Web design",
        link: "/case-study/clinixAI",
        media: {
            url: "clinix/clinixai.jpg",
            type: "image"
        }
    },
    {
        number: "02",
        title: "Synergies4",
        workType: "App design",
        link: "/",
        media: {
            url: "synergies4.jpg",
            type: "image"
        }
    },
    {
        number: "03",
        title: "Curehire",
        workType: "App design",
        link: "/",
        media: {
            url: "curehire.jpg",
            type: "image"
        }
    },
    {
        number: "04",
        title: "OWASP Foundation",
        workType: "App design",
        link: "/",
        media: {
            url: "owasp.jpg",
            type: "image"
        }
    },
    {
        number: "05",
        title: "Feature",
        workType: "App design",
        link: "/",
        media: {
            url: "feature.jpg",
            type: "image"
        }
    }
];
var _c;
__turbopack_context__.k.register(_c, "CaseStudies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/interactions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]);
const Interactions = ()=>{
    _s();
    const finished = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"])({
        "Interactions.useLoading[finished]": (s)=>s.finished
    }["Interactions.useLoading[finished]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Interactions.useEffect": ()=>{
            // Add any global interactions or animations here if needed
            if (!finished) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Interactions.useEffect.ctx": ()=>{
                    const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        scrollTrigger: {
                            trigger: "body",
                            start: "top top",
                            endTrigger: "#services",
                            end: "center center",
                            scrub: true,
                            invalidateOnRefresh: true
                        }
                    });
                    timeline.to("#hero-title", {
                        duration: 1,
                        ease: "power1.out",
                        y: -150
                    }, 0).to("#hero-company", {
                        duration: 1,
                        ease: "power1.out",
                        y: 200
                    }, 0).to("#hero-stats", {
                        duration: 0.6,
                        delay: 0.05,
                        ease: "power1.inOut",
                        opacity: 0,
                        y: 50
                    }, 0).to("#hero-stats", {
                        pointerEvents: "none",
                        delay: 0.2
                    }, 0);
                    const title1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]("#title1", {
                        type: "chars,lines",
                        linesClass: "overflow-hidden py-3"
                    });
                    const title2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]("#title2", {
                        type: "chars,lines",
                        linesClass: "overflow-hidden"
                    });
                    const tl1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
                    tl1.fromTo("#particles3d", {
                        scale: 0.5,
                        opacity: 0
                    }, {
                        opacity: 1,
                        scale: 1,
                        duration: 2.5,
                        delay: 0.8,
                        ease: "back.out"
                    }, 0);
                    // Fade out particles when entering Work (Case Studies), and restore on scroll-up
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: "#work-section",
                        start: "top bottom",
                        end: "top 85%",
                        scrub: true,
                        onUpdate: {
                            "Interactions.useEffect.ctx": (self)=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to("#particles3d", {
                                    opacity: 1 - self.progress,
                                    overwrite: "auto"
                                });
                            }
                        }["Interactions.useEffect.ctx"]
                    });
                    tl1.fromTo(title1.chars, {
                        y: "100%",
                        scale: 0.2
                    }, {
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        stagger: 0.04,
                        ease: "back.out",
                        delay: 0.3
                    }, 0);
                    tl1.fromTo(title2.chars, {
                        y: "100%",
                        scale: 0.2
                    }, {
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        stagger: -0.04,
                        ease: "back.out",
                        delay: 0.3
                    }, 0);
                    return ({
                        "Interactions.useEffect.ctx": ()=>{
                            title1.revert();
                            title2.revert();
                        }
                    })["Interactions.useEffect.ctx"];
                }
            }["Interactions.useEffect.ctx"]);
            return ({
                "Interactions.useEffect": ()=>ctx.revert()
            })["Interactions.useEffect"];
        }
    }["Interactions.useEffect"], [
        finished
    ]);
    return null;
};
_s(Interactions, "LBh+ggZ9x/oO+X52Disubmgbse8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"]
    ];
});
_c = Interactions;
const __TURBOPACK__default__export__ = Interactions;
var _c;
__turbopack_context__.k.register(_c, "Interactions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c05e1a34._.js.map