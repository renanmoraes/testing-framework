"use strict";
import { createResponse } from "../helpers/response";

export const runner = async (event, context) => {
  const body = event && event.body ? JSON.parse(event.body) : null;
  
  if (!body || !body.number)
    return createResponse(400, {
      message: 'É necessario enviar um numero para o calculo.'
    });

  let number = body.number;
  let dividers = [];
  let primeNumbers = [];

  const isPrime = (number) => {
    for (let i = 2; i < number; i++)
      if (number % i === 0)
        return false
    return number >= 1;
  }

  for (let i = 1; i < Number(number) + 1; i++) {
    if (number % i == 0) {
      dividers.push(i);
      if (isPrime(i))
        primeNumbers.push(i)
    }
  }

  return createResponse(200, {
    entryNumber: number,
    dividers: dividers.toString(),
    primeNumbers: primeNumbers.toString()
  });
}