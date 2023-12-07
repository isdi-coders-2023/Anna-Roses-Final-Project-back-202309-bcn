import request from "supertest";
import app from "../../../../server/app";
import { mockNeighbour } from "../../mocks/mockNeighbour";
import { type NeighbourStructure } from "../../types";
import { server } from "../../../../setupTests";

describe("Given a POST/neighbours/create endpoint", () => {
  const path = "/neighbours/create";
  const neighbourMock = mockNeighbour;

  describe("When it receives a request with a new 'Marta Ibarra Chef' without id", () => {
    test("Then it should respond with a status code 201 and the new 'Marta Ibarra Chef' with id", async () => {
      const expectedStatusCode = 201;
      const expectedName = "Marta Ibarra Chef";

      const response = await request(app)
        .post(path)
        .send(neighbourMock)
        .expect(expectedStatusCode);

      const responseBody = response.body as { neighbour: NeighbourStructure };

      expect(responseBody.neighbour).toHaveProperty("name", expectedName);
    });
  });

  describe("When it receives an invalid request", () => {
    test("Then it should respond with status code 404 and the error message 'Error adding the new Neighbour'", async () => {
      await server.stop();

      const expectedStatusCode = 400;
      const expectedError = { message: "Error adding the new Neighbour" };

      const response = await request(app)
        .post(path)
        .send(neighbourMock)
        .expect(expectedStatusCode);

      const responseBody = response.body as { message: string };

      expect(responseBody).toStrictEqual(expectedError);
    });
  });
});
