import { sayHello } from "../index";

describe("sayHello", () => {
  describe("given name arg", () => {
    it("should return Hello Zedan", () => {
      expect(sayHello("Zedan")).toBe("Hello Zedan");
    });
  });
});
