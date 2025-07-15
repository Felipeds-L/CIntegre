const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} */
module.exports = {
  testEnvironment: "node", // Usar o ambiente Node.js para os testes
  transform: {
    ...tsJestTransformCfg, // Configuração de transformação do ts-jest
  },
};