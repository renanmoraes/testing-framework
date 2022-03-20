
const handler = require('../hello/handler');
test('correct greeting is generated', async () => {
    expect(await handler.hello()).toMatchObject({
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: '{"message":"Hello a test!"}'
    });
});