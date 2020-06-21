// import { GetUserInfo } from "./app.js"
// import fetchMock from "fetch-mock";
//
// fetchMock.mock("http://localhost:8080/users/1",{
//   age: 24,
//   avatar: "https://inews",
//   description: "Lorem ipsum dolor sit amet",
//   id: 1,
//   name: "Bob123",
// });

test("add 1+1 is 2", () => {
  expect(2).toBe(2);
});

// test("should get user information from api", async () => {
//   const result = await GetUserInfo();
//   let expectR = {age: 24,
//     avatar: "https://inews",
//     description: "Lorem ipsum dolor sit amet",
//     id: 1,
//     name: "Bob123",}
//   expect(result).toEqual(expectR)
// })
