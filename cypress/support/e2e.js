import addContext from "mochawesome/addContext";
const path = require("path");

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    Cypress.spec.name.split("/").pop().replace(".js", "");
    const screenshotFileName =
      `${runnable.parent.title} -- ${test.title} (failed).png`.replace(
        / /g,
        "%20"
      );
    const screenshotPath = path.join(
      "..",
      "cypress",
      "screenshots",
      Cypress.spec.name,
      screenshotFileName
    );
    addContext({ test }, screenshotPath);
  }
});