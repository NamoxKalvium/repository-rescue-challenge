// Server configuration with safe environment fallback
const PORT = Number(process.env.PORT) || 3000;

module.exports = {
  PORT,
};
