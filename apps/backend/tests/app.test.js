import assert from "node:assert/strict";
import test from "node:test";
import request from "supertest";
import { app } from "../src/app.js";

test("health endpoint works without a database", async () => {
  const response = await request(app).get("/health");
  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { status: "ok" });
});

test("unknown endpoints return a JSON 404", async () => {
  const response = await request(app).get("/missing");
  assert.equal(response.status, 404);
  assert.deepEqual(response.body, { error: "Not found" });
});

test("health endpoint does not disclose framework headers", async () => {
  const response = await request(app).get("/health");
  assert.equal(response.headers["x-powered-by"], undefined);
});
