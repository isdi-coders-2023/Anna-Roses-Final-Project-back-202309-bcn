import request from "supertest";
import mockNeighbours from "../../mocks/mockNeighbours";
import Neighbour from "../../model/Neighbour";
import app from "../../../../server/app";
import { type NeighbourStructure } from "../../types";
import "../../../../server/index";

describe("Given a GET method with a '/neighbours' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a status 200 and a list of 'Marta Ibarra Chef' and 'Laura Fernandez Empoderada'", async () => {
      const expectedStatusCode = 200;
      const path = "/neighbours";
      const mockData = mockNeighbours;
      await Neighbour.create(mockData[0], mockData[1]);

      const response = await request(app).get(path).expect(expectedStatusCode);
      const responseBody = response.body as {
        neighbours: NeighbourStructure[];
      };

      const invertNeighboursMock = mockData.reverse();

      responseBody.neighbours.forEach((neighbour, neighbourPosition) => {
        expect(neighbour).toHaveProperty(
          "name",
          invertNeighboursMock[neighbourPosition].name,
        );
      });
    });
  });
});
