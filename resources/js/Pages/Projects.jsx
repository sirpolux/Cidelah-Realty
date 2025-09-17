import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

// Dummy data (will be replaced by backend props)

import featuredImage1 from "../../../public/img/featured1.png";
import featuredImage2 from "../../../public/img/featured2.png";
import featuredImage3 from "../../../public/img/featured3.png";


import orange1 from "../../../public/img/orange_1.png";
import orange2 from "../../../public/img/orange_2.png";
import orange3 from "../../../public/img/orange_3.png";

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
        { name: "Front View", src: orange1},
        { name: "Living Room", src: orange2},
        { name: "Kitchen", src: orange3},
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
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            {/* Image Carousel */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <div className="grid grid-cols-3 h-full">
                {project.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.name}
                    className="object-cover w-full h-full border border-gray-100"
                  />
                ))}
              </div>
              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                {project.images.length} Photos
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.name}
              </h3>
              <p className="text-gray-600 mt-3">{project.description}</p>

              <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-yellow-600" />
                  Start: {project.startDate}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-yellow-600" />
                  Completion: {project.completionDate}
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
