import request from "supertest";
import mockNeighbours from "../../mocks/mockNeighbours";
import Neighbour from "../../model/Neighbour";
import app from "../../../../server/app";
import { type NeighbourStructure } from "../../types";
import "../../../../server/index";

describe("Given a GET method with a '/neighbours' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a status 200 and a list of 2 neighbours", async () => {
      const expectedStatusCode = 200;
      const path = "/neighbours";
      await Neighbour.create(mockNeighbours[0]);
      await Neighbour.create(mockNeighbours[1]);

      const response = await request(app).get(path).expect(expectedStatusCode);
      const responseBody = response.body as {
        neighbours: NeighbourStructure[];
      };

      responseBody.neighbours.forEach((neighbour, neighbourPosition) => {
        expect(neighbour).toHaveProperty(
          "name",
          mockNeighbours[neighbourPosition].name,
        );
      });
    });
  });
});
