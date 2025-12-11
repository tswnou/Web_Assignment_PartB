import mongoose from "mongoose";
import dotenv from "dotenv";

import Course from "./src/models/Course.js";
import Book from "./src/models/Book.js";
import Video from "./src/models/Video.js";

dotenv.config();

// ------------------ DATA FROM PART A ------------------ //

const courses = [
  { id: 101, title: "Statistics in Computer Science", description: "Fundamental methods for statistical data analysis.", ects: 7, category: "Data Science & Applied Math" },
  { id: 102, title: "Machine Learning", description: "Introduction to supervised and unsupervised learning.", ects: 7, category: "Data Science & Applied Math" },
  { id: 103, title: "Data Analysis", description: "Techniques for processing and analyzing large datasets.", ects: 8, category: "Data Science & Applied Math" },

  { id: 201, title: "Game Theory", description: "Strategic decision-making in competitive environments.", ects: 6, category: "Operations Research" },
  { id: 202, title: "Optimization", description: "Methods for solving optimization problems.", ects: 7, category: "Operations Research" },
  { id: 203, title: "Business Strategy", description: "Introduction to strategic planning models.", ects: 6, category: "Operations Research" },

  { id: 301, title: "Discrete Mathematics", description: "Combinatorics, logic, and graph theory.", ects: 6, category: "Applied Mathematics" },
  { id: 302, title: "Probability Theory", description: "Fundamental principles of probability.", ects: 6, category: "Applied Mathematics" },
  { id: 303, title: "Calculus II", description: "Continuation of Calculus I.", ects: 6, category: "Applied Mathematics" },

  { id: 401, title: "Introduction to Computer Science", description: "Core foundations of computing.", ects: 6, category: "Theoretical Computer Science" },
  { id: 402, title: "Theory of Computation", description: "Automata, languages & Turing machines.", ects: 7, category: "Theoretical Computer Science" },
  { id: 403, title: "Algorithms", description: "Design and analysis of algorithms.", ects: 7, category: "Theoretical Computer Science" },

  { id: 501, title: "Communication Networks", description: "Network models & protocols.", ects: 8, category: "Systems & Networks" },
  { id: 502, title: "Computer Systems Organization", description: "Hardware architecture.", ects: 7, category: "Systems & Networks" },
  { id: 503, title: "Operating Systems", description: "Processes, memory, concurrency.", ects: 8, category: "Systems & Networks" },

  { id: 601, title: "Introduction to Programming (Python)", description: "Programming fundamentals.", ects: 6, category: "Software Systems" },
  { id: 602, title: "Object-Oriented Programming (Java)", description: "OOP principles.", ects: 6, category: "Software Systems" },
  { id: 603, title: "Software Engineering", description: "Development models, testing.", ects: 8, category: "Software Systems" },

  { id: 701, title: "Databases", description: "SQL, schemas & management.", ects: 8, category: "Data & Knowledge Management" },
  { id: 702, title: "Knowledge Discovery", description: "Patterns, clustering.", ects: 6, category: "Data & Knowledge Management" },
  { id: 703, title: "Information Retrieval", description: "Search engines & ranking.", ects: 6, category: "Data & Knowledge Management" },

  { id: 801, title: "Cybersecurity", description: "Security principles & threats.", ects: 7, category: "Cybersecurity" },
  { id: 802, title: "Network Security", description: "Firewalls & cryptography.", ects: 6, category: "Cybersecurity" },
  { id: 803, title: "Cryptography", description: "AES, RSA & digital signatures.", ects: 6, category: "Cybersecurity" }
];

// Books & Videos placeholders (μπορώ να τα συμπληρώσω 100% όπως θες)
const books = [
  {
    title: "Artificial Intelligence — A Modern Approach",
    description: "The #1 AI textbook.",
    category: "AI",
    image: "/assets/img/books/ai.jpg"
  }
];

const videos = [
  {
    title: "What is Machine Learning?",
    description: "Introductory ML video.",
    category: "Data Science",
    thumbnail: "/assets/img/videos/ml.png",
    duration: "12:05",
    youtubeLink: "https://youtube.com"
  }
];

// ------------------ SEED FUNCTION ------------------ //

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Clearing database...");
    await Course.deleteMany({});
    await Book.deleteMany({});
    await Video.deleteMany({});

    console.log("Inserting Data...");
    await Course.insertMany(courses);
    await Book.insertMany(books);
    await Video.insertMany(videos);

    console.log("🎉 Database Seeded Successfully!");
    process.exit();
  } catch (err) {
    console.error("Seed Error:", err);
    process.exit(1);
  }
}

seed();
