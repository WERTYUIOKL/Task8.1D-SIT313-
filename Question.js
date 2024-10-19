import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Form, TextArea } from 'semantic-ui-react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'; 
import { firestore } from './firebase';
import './Question.css';


function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState('');
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'questions'));
        const questionsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuestions(questionsArray);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="question-list">
    </div>
  );
}

export default QuestionList;
