import { sumTwoNumber } from "../../api/sample-util-api";

test("first test", () => {
  const result = sumTwoNumber(10, 10);
  expect(result).toEqual(20);
  expect(result).toBeTruthy();
});
