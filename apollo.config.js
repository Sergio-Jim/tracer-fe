module.exports = {
  client: {
    service: {
      name: "my-app",
      // URL to the GraphQL API
      url:   process.env.NODE_ENV == "production"
      ? "https://tracer-api-xjm95.ondigitalocean.app/graphql"
      : "http://localhost:4000/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
