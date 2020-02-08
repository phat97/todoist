import React from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";

/** Implicit Return instead of writing
 * () => {
 * return (...);
 * }
 */

export const App = () => (
  <div className="App">
    <Header />
    <Content />
  </div>
);
