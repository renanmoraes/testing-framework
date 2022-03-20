
const handler = require('../get-divisors-and-prime-numbers/handler');
test('validate not send number by calculate', async () => {
    expect(await handler.runner()).toMatchObject({
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: '{"message":"É necessario enviar um numero para o calculo."}'
    });
});

test('correct calculate divisors and prime', async () => {
    const params = { body: JSON.stringify({ number: 100 }) };
    expect(await handler.runner(params)).toMatchObject({
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: '{"entryNumber":100,"dividers":"1,2,4,5,10,20,25,50,100","primeNumbers":"1,2,5"}'
    });
});