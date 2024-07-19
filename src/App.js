import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import { DefaltLayout } from "~/Components/Layout";
import { publicRoutes } from "~/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaltLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
