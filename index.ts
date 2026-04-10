/**
 * Server
 */

import app from "./src/app";

Bun.serve({
	port: Number(Bun.env.PORT ?? 3000),
	hostname: "0.0.0.0",
	fetch: app.fetch,
});
