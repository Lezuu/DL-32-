import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Student from './components/Student'
import React from 'react';
import Book from "./components/Book";

function App() {
const students = [
    { id: 1, name: "Anna", className: "4P", age: 20, specialization: "C#" },
    { id: 2, name: "Jan", className: "4P", age: 18, specialization: "C"  },
    { id: 3, name: "Adam", className: "4P", age: 16, specialization: "C++"  },
    { id: 4, name: "Józef", className: "4P", age: 14, specialization: "HTML"  }
  ];
  const books = [
{ id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
{ id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
{ id: 3, title: "Lalka", author: "Bolesław Prus" }
];

  return (
    
    <>
  {/* {students.map((student) => {
            return (
              <Student
                key={student.id}  
                name={student.name}
                className={student.className}
                age={student.age}
                specialization={student.specialization}
              />
            );
          })} */}
  

    {books.map((book) => (
          <Book 
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))
      }  

   </>
  )
}

export default App
