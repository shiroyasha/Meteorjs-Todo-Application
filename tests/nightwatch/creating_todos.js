module.exports = {
  "Adding a Todo" : function (client) {
    client
      .url("http://localhost:3000")
      .waitForElementVisible("body", 1000)
      .pause(10000)
      .assert.visible("input[type=text]")
      .assert.visible("button")
      .setValue("input[type=text]", "Test Todo")
      .click("button")
      .assert.containsText("body", "Test Todo")
      .end();
  }
};
