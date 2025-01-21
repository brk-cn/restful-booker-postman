const newman = require("newman");

newman.run(
  {
    collection: require("./restful-booker-collection.postman_collection.json"),
    environment: require("./restful-booker-environment.postman_environment.json"),
    iterationCount: 2,
    reporters: ["cli", "html"],
    reporter: {
      html: {
        export: "./newman-report.html",
      },
    },
  },
  function (err) {
    if (err) {
      console.error(err);
    }
  }
);
