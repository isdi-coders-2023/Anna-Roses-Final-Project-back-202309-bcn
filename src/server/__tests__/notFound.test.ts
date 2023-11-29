import request from "supertest";
import app from "../app";

describe("Given a GET '/test' path endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with 404 and message 'Endpoint not found'", async () => {
      const requestedPath = "/test";
      const expectedStatusCode = 404;
      const expectedMessage = "Endpoint not found";

      const response = await request(app)
        .get(requestedPath)
        .expect(expectedStatusCode);

      expect(response.body).toHaveProperty("message", expectedMessage);
    });
  });
});
