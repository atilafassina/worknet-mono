module.exports = {
  mode: "jit",
  purge: [
    "../../shared/components/**/*.{js,jsx,tsx,ts}",
    "./pages/**/*.{js,jsx,tsx,ts}",
    "./components/**/*.{js,jsx,tsx, ts}",
  ],
  theme: {
    extend: {
      animation: {
        "slow-spin": "spin 5s linear infinite",
      },
    },
  },
};
