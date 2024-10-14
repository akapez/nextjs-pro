import { render, screen } from "@testing-library/react";

import Page from "./page";

// window.fetch = jest.fn().mockImplementation(() =>
//   Promise.resolve({
//     ok: true,
//     json: () => ({
//       results: [
//         {
//           id: 1,
//           name: "bulbasaur",
//         },
//       ],
//     }),
//   })
// );

test("RSC Page", async () => {
  render(await Page());

  expect(await screen.findByText("bulbasaur")).toBeDefined();
});
