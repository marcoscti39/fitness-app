import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import ExerciseDetail from "./pages/exerciseDetail";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route
          path="/exercise-details/:bodyPart/:exerciseId"
          element={<ExerciseDetail />}
        />
      </Routes>
    </>
  );
}
