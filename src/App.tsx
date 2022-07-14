/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-05-09 21:26:56
 * @LastEditTime : 2022-06-08 21:50:31
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \react-ts\src\App.tsx
 * @Description  :
 */
import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import "./App.less";
import PageTally from "@pages/tally";
import Navigator, {NavigatorItem} from "@components/navigator";


function App() {
  const navigate = useNavigate();

  const naviItems: NavigatorItem[] = [
    {
      title: "tally",
      name: "tally",
      onClick(item: NavigatorItem) {
        navigate(`/${item.name}`)
      }
    },
    {
      title: "link",
      name: "navi-link",
      link: "/#/link"
    }
  ]

  return (
    <div className="my-app">
      <div className={"app-navi"}>
        <Navigator items={naviItems} />
      </div>
      <div className={"app-main"}>
        <Routes>
          <Route element={<PageTally />} path={"/tally"} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
