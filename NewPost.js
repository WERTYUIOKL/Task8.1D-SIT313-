import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";  
import { firestore, storage } from './firebase';         
import './NewPost.css';

function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          const url = await storage.ref('images').child(image.name).getDownloadURL();
          try {
            await addDoc(collection(firestore, 'posts'), {  
              title,
              content,
              imageUrl: url,
              timestamp: new Date(),
            });
          } catch (error) {
            console.error("Error adding document: ", error);
          }
        }
      );
    } else {
      try {
        await addDoc(collection(firestore, 'posts'), { 
          title,
          content,
          timestamp: new Date(),
        });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }

    setTitle('');
    setContent('');
    setImage(null);
    setProgress(0);
  };

  return (
    <div className="NewPostBar">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Post</button>
      </form>
      <progress value={progress} max="100" />
    </div>
  );
}

export default NewPost;
