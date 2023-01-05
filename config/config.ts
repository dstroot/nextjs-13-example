// Nullish coalescing: the `??` operator is a way to “fall back” to
// a default value when dealing with `null` or `undefined`.

// Best approach: create a config file in your project where you export an
// object containing all configuration values for your project. There, you
// can set default values for variables coming from the environment. In this way,
// you guarantee a value will be present for the execution of your program:

export const config = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  openAIKey: process.env.OPENAI_API_KEY ?? "",
  statusPage: process.env.STATUS_PAGE_ID ?? "",
};
