export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Computer.webp","robots.txt","vinyl.png"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.ZDPQBBpF.js",app:"_app/immutable/entry/app.DyaaGBe6.js",imports:["_app/immutable/entry/start.ZDPQBBpF.js","_app/immutable/chunks/BcbV0hi3.js","_app/immutable/chunks/CkL062UF.js","_app/immutable/entry/app.DyaaGBe6.js","_app/immutable/chunks/CkL062UF.js","_app/immutable/chunks/HclGiUj8.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
