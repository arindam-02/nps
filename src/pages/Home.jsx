import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/HeroSection/Hero";
import InformationSection from "../components/InfoSection/InformationSection";
import CourseBanner from "../components/CourseBanner/CourseBanner";
import TeacherInfoSection from "../components/TeacherInfoSection/TeacherInfoSection";
import CourseSection from "../components/CourseSection/CourseSection";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <InformationSection />
        <CourseBanner />
        <TeacherInfoSection />
        {/* <CourseSection /> */}
      </Layout>
    </>
  );
};

export default Home;
