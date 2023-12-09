import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

test("home page items stay selected after click", async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getAllByTestId("item-preview")).not.toHaveLength(0);
  });
  fireEvent.click(screen.getAllByTestId("item-preview")[0]);
  expect(await screen.findByText("Go Home")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Go Home"));
  expect(screen.getAllByTestId("item-preview")[0]).toHaveClass("selected-item");
});
