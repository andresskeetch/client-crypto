import React from "react";
import { Converter } from "../domains";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Converter />
      </QueryClientProvider>
    </div>
  );
}

export default App;
