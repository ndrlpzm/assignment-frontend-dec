import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

beforeEach(() => {
  jest
    .spyOn(window, "fetch")
    .mockResolvedValue(new Response(JSON.stringify(mockdata)));
});
afterEach(() => {
  // restore spyOn before each test
  jest.restoreAllMocks();
});

test("home page has items when it's done loading", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => {
    expect(screen.getByTestId("item-container")).not.toHaveTextContent(
      "Loading"
    );
  });
  expect(screen.getAllByTestId("item-preview")).not.toHaveLength(0);
});

test("home page items stay selected after click", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => {
    expect(screen.getAllByTestId("item-preview")).not.toHaveLength(0);
  });
  fireEvent.click(screen.getAllByTestId("item-preview")[0]);
  expect(await screen.findByText("Go Home")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Go Home"));
  expect(screen.getAllByTestId("item-preview")[0]).toHaveClass("selected-item");
});
const mockdata = {
  mock_0: {
    title: "Mock 1",
    description: "Description 1",
    image: "https://picsum.mocks/id/4/200/300",
    index: 1,
  },
  mock_1: {
    title: "Mock 2",
    description: "Description 2",
    image: "http://www.officialpsds.com/images/stocks/ALLEY-stock1502.jpg",
    index: 2,
  },
  mock_2: {
    title: "Mock 3",
    description: "Description 3",
    image: "https://www.google.com",
    index: 3,
  },
  mock_3: {
    title: "Mock 4",
    description: "Description 4",
    image: "https://picsum.mocks/id/230/300/300",
    index: 4,
  },
  mock_4: {
    title: "Mock 5",
    description: "Description 5",
    image: "https://picsum.mocks/id/6/200/200",
    index: 5,
  },
  mock_5: {
    title: "Mock 6",
    description: "Extra info",
    image: "https://picsum.mocks/id/7/400/300",
    index: 6,
  },
  mock_6: {
    title: "Mock 7",
    description: "Description 7",
    image:
      "http://www.rubberdragon.com/website-design/44/content/just-in-time-stock.png?1290605562",
    index: 7,
  },
  mock_7: {
    title: "Mock 8",
    description: "Not available",
    image:
      "http://www.gwp.co.uk/wp-content/uploads/2012/10/jit-case-delivery1.jpg",
    index: 8,
  },
  mock_8: {
    title: "Mock 9",
    description: "Description 9",
    image:
      "http://fc00.deviantart.net/fs70/i/2011/217/a/0/field_panorama_stock_5_by_f3rd4-d45kgfp.jpg",
    index: 9,
  },
  mock_9: {
    title: "Mock 10",
    description: "Description 10",
    image: "https://www.google.nl",
    index: 10,
  },
  mock_10: {
    title: "Mock 11",
    description: "Description 11",
    image: "empty",
    index: 11,
  },
};
