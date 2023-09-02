import React, { useState, useEffect } from 'react';
// import './Carousel.css';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Carousel: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + users.length) % users.length);
  };

  return (
    <div className="carousel">
      <button className="arrow previous" onClick={handlePrevious}>
        &lt;
      </button>
      <div className="images-container">
        {users.map((user, index) => (
          <img
            key={user.id}
            src={user.avatar}
            alt={`User ${user.id}`}
            className={`image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <button className="arrow next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
