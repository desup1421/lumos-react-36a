import {
  add,
  subtract,
  divide,
  multiply,
  mod,
  shoppingList,
  user,
  promiseTest,
  asyncTest,
  asyncTestObject,
  errorTest,
  getUser,
  mockFunction,
  snapshotTest,
  delayFunction
} from "./main.js";

// ===============================TEST ARITMATIC===============================
test("adds 1 + 2 equal to 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract 5 - 3 equal to 2", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("divide 10 / 2 equal to 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("multiply 2 * 3 equal to 6", () => {
  expect(multiply(2, 3)).toBe(6);
});
test("mod 10 % 2 equal to 0", () => {
  expect(mod(10, 2)).toBe(0);
})

// ===============================TEST ARRAY & OBJECT===============================
// Test to find one specific item
test("shoppingList contains milk", () => {
  expect(shoppingList).toContain("milk");
});
// Use looping to test all item in array
test("check shopping list's items", () => {
  const datas = ["milk", "flour"];
  for (const data of datas) {
    expect(shoppingList).toContain(data);
  }
})

//Test object that should match
test("user check match object", () => {
  expect(user).toMatchObject({
    name: "John",
    age: 30,
    email: "john@example.com",

  })
})
//Test an object to have specific pair of key (name) and value (John)
test("user has name John", () => {
  expect(user).toHaveProperty("name", "John");
});

// ===============================TEST PROMISE & ASYNC===============================

//Promise
test("promiseTest returns resolved", async () => {
  expect(promiseTest()).resolves.toBe("Promise resolved");
});
test("promiseTest return resolved 2", async () => {
  return promiseTest()
    .then(res => expect(res).toBe("Promise resolved"))
})

//Async
test("asyncTest returns async test", async () => {
  expect(await asyncTest()).toBe("async test");
});
test("asyncTest returns async test 2", async () => {
  const res = await asyncTest();
  expect(res).toBe("async test");
});

//Asyn, check value from async should same as expected
test("asyncTestObject returns object", async () => {
  const res = await asyncTestObject();
  expect(res).toMatchObject({
    name: "Dede",
    age: 120,
  });
});

//To check if a function throw an error
test("errorTest throws error", () => {
  expect(() => errorTest()).toThrow("Error test");
});

// ===============================TEST MOCKING===============================
jest.mock("axios");
import axios from "axios";

axios.get.mockResolvedValue({
  data: {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
});
test("getUser returns user", async () => {
  const user = await getUser(1);
  expect(user).toMatchObject({
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  });
});

test("mockFunction returns mock data", async () => {
  const res = await mockFunction();
  expect(res).toBe("mock data");
});

test("snapshotTest returns hello john", () => {
  expect(snapshotTest("john")).toMatchSnapshot();
});

jest.useFakeTimers();
test("delayFunction returns delayed data", () => {
  const mockCallback = jest.fn();
  delayFunction(mockCallback);
  jest.advanceTimersByTime(1000);
  expect(mockCallback).toHaveBeenCalledTimes(1);
});


// ====================FROM DOCUMENTATION (JEST) TESTING====================
test('object assignment', () => {
  const data = { name: 'Dede' };
  data['age'] = 120;
  expect(data).toEqual({ name: 'Dede', age: 120 });
});

test('adding positive numbers is not negative', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).toBeGreaterThanOrEqual(0);
    }
  }
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
});
test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).toBeFalsy();
});
test('undefined', () => {
  let x;
  expect(x).not.toBeDefined();
  expect(x).toBeUndefined();
});
test('truthy', () => {
  const x = {};
  expect(x).toBeTruthy();
});
test('NaN', () => {
  const x = 0 / 0;
  expect(x).toBeNaN();
});

test('add floating data', () => {
  const value = 0.1 + 0.2;
  // expect(value).toEqual(0.3);
  // expect(value).toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});

test('there is no I on Dream', () => {
  expect('Dream').not.toMatch(/I/);
});
test('there is a "end" in Friend', () => {
  expect('Friend').toMatch(/enD/i);
});

const todoList = [
  'go shopping',
  'go to the gym',
  'go to the office',
  'go to the school',
];
test('the todo list has go to the school', () => {
  expect(todoList).toContain('go to the school');
});

function errorCode() {
  throw new Error('error MSG!');
}

test('errorCode returns error', () => {
  expect(errorCode).toThrow();
  expect(errorCode).toThrow(Error);

  //checking by error message
  expect(errorCode).toThrow('error MSG');
  expect(errorCode).toThrow('MSG');

  //match exact error message
  expect(errorCode).toThrow(/^error MSG!$/);
  // expect(errorCode).toThrow(/^error MSG$/);

});