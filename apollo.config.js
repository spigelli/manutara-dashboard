module.exports = {
  client: {
    service: "localhost:4000",
    includes: ["./src/components/**/*.ts", "./src/components/**/*.tsx", "./src/index.tsx"],
    excludes: ["**/__tests__/**"]
  }
}
