import React from "react";
import { Route, Routes } from "react-router-dom";
import { fetchAllExercises } from "../api/fetchAllExercises";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import ResultsSection, { exerciseType } from "../components/ResultsSection";
import SearchSection from "../components/SearchSection";
import ExerciseDetail from "./exerciseDetail";

export default function Home() {
  const [exercises, setExercises] = React.useState<exerciseType[]>([]);
  React.useEffect(() => {
    const getAllExercises = async () => {
      setExercises(await fetchAllExercises());
    };
    getAllExercises();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <SearchSection setExercises={setExercises} />
      <Routes>
        <Route path="/" element={<ResultsSection exercises={exercises} />} />
        <Route
          path="/pag/:id"
          element={<ResultsSection exercises={exercises} />}
        />
      </Routes>
      <Pagination exercises={exercises} />
    </>
  );
}
