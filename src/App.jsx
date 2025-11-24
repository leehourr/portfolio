import { useState } from "react";
import "./App.css";
import { NavBar, Welcome, Dock, Home } from "#components";
import SEO from "./components/SEO";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { Terminal, Resume, Finder, Text, Image, Contact } from "#windows";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main className="">
      <SEO
        title="Full Stack Developer"
        description="Lee Hour's portfolio showcasing full-stack development projects with React, Next.js, Laravel, and modern web technologies in a unique macOS-style interface."
        keywords="Lee Hour, Full Stack Developer, React, Next.js, Laravel, TypeScript, Web Development, Portfolio, macOS Interface"
      />
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
    </main>
  );
}

export default App;
