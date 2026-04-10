/**
 * Main App
 *
 * @author Tegar Wijaya Kusuma
 * @date 10 April 2026
 */

import { Hono } from "hono";

const app = new Hono();

app.all("/", (c) => {
	return c.text("Hello, World");
});

export default app;
