
const handler = require('../hello/handler');
test('Hello testing function', async () => {
    expect(await handler.hello()).toMatchObject({
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: '{"message":"Hello a test!"}'
    });
});