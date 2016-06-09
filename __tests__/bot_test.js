jest
  .dontMock('../bot.js');

process.env.WIT_TOKEN = '6JYBLVBWXWWFSMMOHSOZJNXEU6DXRKCX';
const bot = require('../bot.js');

describe('Bot tests', () => {

  it('Bot creation', () => {
    const client = bot.getWit(); // Just testing the creation  
    expect(client).not.toBeNull();
  });
});