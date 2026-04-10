/**
 * Server
 */

import app from "./app";

Bun.serve({
	port: Number(Bun.env.PORT ?? 3000),
	hostname: "0.0.0.0",
	fetch: app.fetch,
});
