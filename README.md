# Test Playground

Testing javascript applications using vitest(a replacer for jest when using vite) and react testing library.

## What I've learnt

- **Find Elements**:  using the various search variants such as _getBy_, _findBy_, and _queryBy_ with the right search types(Text, Role, PlaceholderText, DisplayValue)
- **Make the right assertions on elements** using React Testing Library assertive functions such as _toBeInTheDocument_, _toBeNull_, _toBeEmpty_, _toHaveValue_, etc.
- **Using React Testing Library fire events or user events to interact with elements**: testing goes beyound find out if an element is there or not. Hence to simulate user interactions we use **fireEvents=** from RTL or **userEvent** function.
- **Handling components with asynchronous tasks**: using the **waitFor()** and **act()** functions within our test to handle component re-rendering and address other aysnchronous tasks.
- **Testing callbacks**: some components will have to be isolated and tested as a unit. Especially for components that accepts input(props) and returns an output(jsx, callbacks). We use `vi.fn()` to mock functions and make assertions on the callback function.

## Testing Libraries Used
- **Vitest**: a test runner and also a replacement for **Jest** especially for ReactJs applications created using **Vite**

- **React Testing Library**: A component testing library.

- **jsdom**: a tool that emulate enough of a subset of a web browser to be useful for testing and scraping real-world web applications.


## Running the tests

Use the command `npm run test`