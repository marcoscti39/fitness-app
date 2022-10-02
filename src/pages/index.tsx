import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import ResultsSection from "../components/ResultsSection";
import SearchSection from "../components/SearchSection";
import ExerciseDetail from "./exerciseDetail";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SearchSection />
      <Routes>
        <Route path="*" element={<ResultsSection />} />
        <Route path="/pag/:id" element={<ResultsSection />} />
      </Routes>
      <Pagination />
    </>
  );
}
