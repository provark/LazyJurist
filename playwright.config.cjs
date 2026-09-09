const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests/browser',
  timeout: 30000,
  use: { baseURL: 'http://127.0.0.1:4173', trace: 'retain-on-failure' },
  webServer: { command:'node tools/serve.cjs', url:'http://127.0.0.1:4173', reuseExistingServer:!process.env.CI },
  projects: [
    {name:'desktop',use:{browserName:'chromium',viewport:{width:1280,height:720}}},
    {name:'phone',use:{browserName:'chromium',viewport:{width:375,height:667},isMobile:true,hasTouch:true}},
    {name:'firefox',use:{browserName:'firefox',viewport:{width:1280,height:720}}}
  ]
});
