import request from "supertest";
import mockNeighbours from "../../mocks/mockNeighbours";
import Neighbour from "../../model/Neighbour";
import { type NeighbourStructure } from "../../types";
import app from "../../../../server/app";

describe("Given a GET method with a /neighbours/:neighbourId endpoint", () => {
  describe("When it receives a request with 'Marta Ibarra Chef' id", () => {
    test("Then it should respond with it the status code 200 and 'Marta Ibarra Chef' id", async () => {
      const path = "/neighbours/6563639cc4ddfcae99eeb07a";
      const expectedStatusCode = 200;
      const expectedNeighboursName = "Marta Ibarra Chef";
      const neighbourMock = mockNeighbours;

      await Neighbour.create(neighbourMock[0]);

      const response = await request(app).get(path).expect(expectedStatusCode);

      const responseBody = (await response.body) as {
        neighbour: NeighbourStructure;
      };

      expect(responseBody).toHaveProperty("name", expectedNeighboursName);
    });
  });

  describe("When it receives a request with an invalid id", () => {
    test("Then it should respond with the status code 400 and the error message 'Error finding this neighbour'", async () => {
      const expectedErrorMessage = { message: "Error finding this neighbour" };
      const expectedStatusCode = 400;
      const invalidPath = "/neighbours/6563639cc4ddfcae99eebisf07a";

      const response = await request(app)
        .get(invalidPath)
        .expect(expectedStatusCode);

      const responseBody = response.body as { error: NeighbourStructure };

      expect(responseBody).toStrictEqual(expectedErrorMessage);
    });
  });
});
