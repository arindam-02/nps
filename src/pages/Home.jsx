import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/HeroSection/Hero";
import InformationSection from "../components/InfoSection/InformationSection";
import CourseBanner from "../components/CourseBanner/CourseBanner";
import TeacherInfoSection from "../components/TeacherInfoSection/TeacherInfoSection";
import CourseSection from "../components/CourseSection/CourseSection";

const Home = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const visits = (localStorage.getItem("visits") || 0) * 1 + 1;
    localStorage.setItem("visits", visits);
    setCount(visits);
  }, []);
  return (
    <>
      <Layout>
        <Hero />
        <InformationSection />
        <CourseBanner />
        <TeacherInfoSection />
        {/* <CourseSection /> */}

        <div>
          <h6>Total Visitors: {count ?? "Loading..."}</h6>
        </div>
      </Layout>
    </>
  );
};

export default Home;
