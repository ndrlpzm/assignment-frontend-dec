import React from "react";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import mockData from "./data/MockData.json";

test("home page has items when it's done loading", async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByTestId("item-container")).not.toHaveTextContent(
      "Loading"
    );
  });
  expect(screen.getAllByTestId("item-preview")).not.toHaveLength(0);
});
