// ==========================ARITAMTIC FUNCTIONS==========================
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function mod(a, b) {
  return a % b;
}


// ===============================ARRAY AND OBJECT===============================
export const shoppingList = ["milk", "juice", "flour"];

export const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
};


// ===============================PROMISE AND ASYNC===============================
export function promiseTest() {
  return new Promise((resolve, reject) => {
    resolve("Promise resolved");
  });
}

export async function asyncTest() {
  return "async test";
}

export async function asyncTestObject() {
  return {
    name: "Dede",
    age: 120,
  };
}

export function errorTest() {
  throw new Error("Error test");
}

//Mocking
/* 
    Mocking is a technique used in software development to replace real objects
    with fake objects that simulate the behavior of the real objects. 
*/
import axios from "axios";
export const getUser = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
};

export const mockFunction = jest.fn().mockResolvedValue("mock data");

//snapshot testing
/*  Snapshot testing is a technique to capture the current state 
    of a component and compare it to a previous state.
*/

export const snapshotTest = (name) => {
  return `Hello ${name}`;
};

export const delayFunction = (callback) => {
  setTimeout(callback, 1000);
};