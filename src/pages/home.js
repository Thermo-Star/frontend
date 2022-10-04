import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/Home/HeroSection";
import Services from "../components/Home/Services";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Services />
    </Layout>
  );
}
