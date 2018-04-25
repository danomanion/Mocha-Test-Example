const assert = require("chai").assert;
const app = require("../app");

describe("App", function() {

  describe("sayHello()", function() {
    it("sayHello should return hello", function() {
      let result = app.sayHello();
      assert.equal(result, "hello");
    });

    it("sayHello should return type string", function() {
      let result = app.sayHello();
      assert.typeOf(result, "string");
    });
  })

  describe("addNumbers()", function() {
    it("addNumbers returns a value above 5", function() {
      let result = app.addNumbers(5,5);
      assert.isAbove(result, 5)
    });

    it("addNumbers returns a number", function() {
      let result = app.addNumbers();
      assert.typeOf(result, "number")
    });
  });
});
