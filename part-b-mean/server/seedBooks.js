import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./src/models/Book.js";

dotenv.config();

const books = [
  {
    title: "Computer Science Illuminated",
    description: "Complete overview of fundamental CS concepts.",
    category: "Computer Science",
    image: "/assets/img/books/book1.jpg",
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    description: "How computers work from the ground up.",
    category: "Computer Science",
    image: "/assets/img/books/book2.jpg",
  },
  {
    title: "Linear Algebra Done Right",
    description: "Clear introduction to linear algebra theory.",
    category: "Mathematics",
    image: "/assets/img/books/book3.jpg",
  },
  {
    title: "Calculus",
    description: "The classic textbook for multivariable calculus.",
    category: "Mathematics",
    image: "/assets/img/books/book4.jpg",
  },
  {
    title: "Introduction to Algorithms (CLRS)",
    description: "The standard reference for algorithms.",
    category: "Algorithms",
    image: "/assets/img/books/book5.jpg",
  },
  {
    title: "Algorithms (Sedgewick & Wayne)",
    description: "Algorithm analysis and practical implementations.",
    category: "Algorithms",
    image: "/assets/img/books/book6.jpg",
  },
  {
    title: "Pattern Recognition and Machine Learning",
    description: "Mathematical foundations of ML.",
    category: "Machine Learning",
    image: "/assets/img/books/book7.jpg",
  },
  {
    title: "Deep Learning (Goodfellow et al.)",
    description: "The definitive book on deep learning.",
    category: "Machine Learning",
    image: "/assets/img/books/book8.jpg",
  },
  {
    title: "Serious Cryptography",
    description: "Modern practical introduction to cryptography.",
    category: "Cybersecurity",
    image: "/assets/img/books/book9.jpg",
  },
  {
    title: "The Web Application Hacker’s Handbook",
    description: "The bible of practical web security.",
    category: "Cybersecurity",
    image: "/assets/img/books/book10.jpg",
  },
  {
    title: "Computer Networking: A Top-Down Approach",
    description: "Networking principles from application layer to hardware.",
    category: "Networks",
    image: "/assets/img/books/book11.jpg",
  },
  {
    title: "TCP/IP Illustrated",
    description: "Detailed explanation of Internet protocols.",
    category: "Networks",
    image: "/assets/img/books/book12.jpg",
  }
];

async function seedBooks() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log("Books seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedBooks();
