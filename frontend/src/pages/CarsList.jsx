import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import SortSection from "../components/User/SortSection";
import FilterSection from "../components/User/FilterSection";
import Cards from '../components/User/CarCards'


function CarsList() {
  return (
    <DefaultLayout >
     <SortSection />
     <FilterSection />
     <Cards/>
    

    </DefaultLayout>
  );
}

export default CarsList;
