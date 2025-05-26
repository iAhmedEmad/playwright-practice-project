import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const RPconfig ={
    endpoint: "https://demo.reportportal.io/api/v1",
    apiKey: "My-Key_vzSKsRV7SteO-kijNwJnWZ86yf3RGsfbxZ8AcWqQRj7pDRCckW17FQPIVncnkb0R",
    project: "iahmedemad_personal",
    launch: "test Launch",
    description: "My awesome launch",
    attributes: [
      {
      key: "attributeKey",
      value: "attrbiuteValue",
      },
      {
      value: "anotherAttrbiuteValue",
      },
    ],
    mode: 'DEFAULT',
}



export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  retries: 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  workers: 6,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  // reporter: [['@reportportal/agent-js-playwright', RPconfig]],
  // reporter: "allure-playwright",
  // reporter: [['html', { open: 'always' }]],
  // reporter: [['html', { port: '9222' }]],
  // reporter: [['html', { outputFolder: 'my-report' }]],
  // snapshotDir: 'tests/utils/visual-snapshots',
  snapshotPathTemplate: './tests/visual-snapshots/{testName}-{arg}-{projectName}-{platform}{ext}',
  expect: {
    timeout: 10_000, // timeout for validations (default 5 seconds)
    toMatchSnapshot: {
      maxDiffPixels : 0
    },
    toHaveScreenshot: {
      stylePath: './tests/utils/screenshot.css',
    }
  },
  //  timeout: 60*1000, //  general timeout for the test run is 1 min
  //  globalTimeout: 3*60*60*1000,  // general timeout for the total run is 3 hrs
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // globalSetup: require.resolve('./tests/utils/setup/globalSetup.ts'),
  // globalTeardown: require.resolve('./tests/utils/setup/globalTeardown.ts'),
  
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    baseURL: 'https://practice.expandtesting.com/login',
    // storageState: 'storageState.json',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    // screenshot: 'on',
    video: 'on-first-retry',
    headless: true,
    // actionTimeout: 6000,
    // navigationTimeout: 30000,
  },

  /* Configure projects for major browsers */
  projects: [
    //  {
    //   name: 'setup',
    //   testMatch: '/.*setup.ts',
    //   teardown: 'teardown',
    //   use: {
    //     baseURL: 'https://jsonplaceholder.typicode.com',
    //     trace: 'on',
    //   }
    // },
    // {
    //   name: 'teardown',
    //   testMatch: '/.*teardown.ts',
    //   use: {
    //     baseURL: 'https://jsonplaceholder.typicode.com',
    //     trace: 'on',
    //   }
    // },
    // {
    //   name: 'api',
    //   grep: /@api/,
    //   use: {
    //     baseURL: 'https://jsonplaceholder.typicode.com',
    //     trace: 'on',
    //   },
    // },
    // {
    //   name: 'ui',
    //   grep: /@ui/,
    //   grepInvert : /@smoke/,
    //   use: {
    //     baseURL: 'https://practice.expandtesting.com/login',
    //     trace: 'retain-on-failure',
    //   },
    // },
    // {
    //   name: 'splitting tests',
    //   testMatch: /.*Script.spec.ts/,
    //   testIgnore: /.*xyz.spec.ts/,
    //   use: {
    //     trace: 'retain-on-failure',
    //   },
    // },
    {
      name: 'chromium',
      // dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'] ,
          // trace: 'on',
          // video: 'on',
          // screenshot: 'on',
          viewport: { width: 1280, height: 720 },
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
