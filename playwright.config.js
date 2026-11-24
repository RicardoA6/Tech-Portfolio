const { defineConfig, devices } = require('@playwright/test')

// GitHub Actions sets CI=true
const isCI = !!process.env.CI

module.exports = defineConfig({
  testDir: './tests',
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,

  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    // Machine-readable results, used to build the latest-run summary in CI
    ...(isCI ? [['json', { outputFile: 'playwright-results.json' }]] : []),
  ],

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  // Start the site automatically. Locally, reuse a running dev server.
  // In CI, serve the production build (the workflow runs `npm run build` first).
  webServer: {
    command: isCI ? 'npm run start' : 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !isCI,
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    // Firefox will not launch on the author's Windows machine, but runs fine on CI's Linux runners
    ...(isCI ? [{ name: 'firefox', use: { ...devices['Desktop Firefox'] } }] : []),
  ],
})
