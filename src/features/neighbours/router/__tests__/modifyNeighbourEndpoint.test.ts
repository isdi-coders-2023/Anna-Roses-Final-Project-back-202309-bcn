import request from "supertest";
import app from "../../../../server/app";
import {
  mockMartaNeighbour,
  mockModifiedNeighbour,
} from "../../mocks/mockNeighbours";
import Neighbour from "../../model/Neighbour";
import { type NeighbourStructure } from "../../types";

describe("Given a PATCH method with a /neighbours/:neighbourId", () => {
  describe("When it receives a request with a modified 'Marta Ibarra Chef'", () => {
    const modifiedMock = mockModifiedNeighbour;

    test("Then it should respond with the status code 200 and the 'Marta Ibarra Chef' with the modification", async () => {
      const path = "/neighbours/6563639cc4ddfcae99eeb07a";
      const expectedChangedText = "cosetes";
      const expectedStatusCode = 200;
      const mockNeighbour = mockMartaNeighbour;

      await Neighbour.create(mockNeighbour);

      const response = await request(app)
        .patch(path)
        .send(modifiedMock)
        .expect(expectedStatusCode);

      const responseBody = response.body as { neighbour: NeighbourStructure };

      expect(responseBody.neighbour).toHaveProperty(
        "coments",
        expectedChangedText,
      );
    });

    describe("When it receives a request with 'Marta Ibarra Chef' and an invalid id", () => {
      test("Then it should respond with the status code 400 and the error message 'Error modifying the neighbour'", async () => {
        const invalidPath = "/neighbours/3924957ask";
        const expectedStatusCode = 400;
        const expectedErrorMessage = {
          message: "Error modifying the neighbour",
        };

        const response = await request(app)
          .patch(invalidPath)
          .send(modifiedMock)
          .expect(expectedStatusCode);

        const responseBody = response.body as { error: string };

        expect(responseBody).toStrictEqual(expectedErrorMessage);
      });
    });
  });
});
