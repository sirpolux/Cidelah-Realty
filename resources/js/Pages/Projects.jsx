import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

import featuredImage1 from "../../../public/img/featured1.png";
import featuredImage2 from "../../../public/img/featured2.png";
import featuredImage3 from "../../../public/img/featured3.png";

import orange2 from "../../../public/img/orange5.png";
import orange3 from "../../../public/img/orange_3.png";
import orange4 from "../../../public/img/orange4.png";

import Layout from "./Layout";

const dummyProjects = [
  {
    id: 1,
    name: "Datcha Homes",
    images: [
      { name: "Front View", src: featuredImage1},
      { name: "Living Room", src: featuredImage2},
      { name: "Kitchen", src: featuredImage3},
    ],
    description:
      "7 Units of 3-Floors, 5 Bedrooms each, Maid-room, 2 Lounges, Spacious Kitchen & Dining, Security Room. Built with quality and precision.",
    startDate: "Jan 2025",
    completionDate: "Aug 2025",
  },
  {
    id: 2,
    name: "Orange Island Project",
    images: [
        { name: "Front View", src: orange4},
        { name: "Living Room", src: orange3},
        { name: "Kitchen", src: orange2},
    ],
    description:
      "A proposed luxury development on Orange Island. Details to be provided soon.",
    startDate: "Planned",
    completionDate: "Pending",
  },
];

export default function Project({ projects = dummyProjects }) {
  return (
    <Layout>
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 mt-16 text-center">
        Our Projects
      </h2>

{/* Project Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
  {projects.map((project) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col"
    >
      {/* Image Block */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {/* Show first image on mobile, grid of 3 on sm+ */}
        <div className="h-full w-full">
          <div className="hidden sm:grid sm:grid-cols-3 h-full">
            {project.images.slice(0, 3).map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.name}
                className="object-cover w-full h-full border border-gray-100"
              />
            ))}
          </div>
          <img
            src={project.images[0]?.src}
            alt={project.images[0]?.name || "Project image"}
            className="object-cover w-full h-full sm:hidden"
          />
        </div>

        {/* Photo count badge */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          {project.images.length} Photos
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
          {project.name}
        </h3>
        <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 mt-4 text-xs sm:text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <Calendar size={16} className="text-yellow-600" />
            <span>Start: {project.startDate}</span>
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={16} className="text-yellow-600" />
            <span>Completion: {project.completionDate}</span>
          </span>
        </div>
      </div>
    </motion.div>
  ))}
</div>

    </section>
    </Layout>
  );
}
