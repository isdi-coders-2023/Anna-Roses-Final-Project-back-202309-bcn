import request from "supertest";
import mockNeighbours from "../../mocks/mockNeighbours";
import Neighbour from "../../model/Neighbour";
import app from "../../../../server/app";

describe("Given a delete/neighbour endpoint", () => {
  const mockData = mockNeighbours;

  describe("When it receives a valid request", () => {
    test("Then it should respond with the statuscode 200 and an empty object", async () => {
      const expectedStatusCode = 200;
      const path = "/neighbours/6563639cc4ddfcae99eeb07a";
      const expectedEmptyObject = {};

      await Neighbour.deleteOne({ _id: mockData[0]._id });
      const response = await request(app)
        .delete(path)
        .expect(expectedStatusCode);

      expect(response.body).toStrictEqual(expectedEmptyObject);
    });
  });

  describe("When it receves an invalid request", () => {
    test("Then it should respond with the status code 400 and error message 'Error deleting the neighbour'", async () => {
      const expectedStatusCode = 400;
      const expectedErrorMessage = "Error deleting the neighbour";
      const invalidPath = "/neighbours/lka5sh4fsg56k7dbnas013dsjf9";

      await Neighbour.deleteOne({ _id: mockData[0]._id });
      const response = await request(app)
        .delete(invalidPath)
        .expect(expectedStatusCode);

      expect(response.body).toHaveProperty("message", expectedErrorMessage);
    });
  });
});
