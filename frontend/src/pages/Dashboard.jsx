import React from 'react';
import { PlayCircle, Clock, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const courses = [
  {
    id: 1,
    title: 'Advanced FullStack Engineering',
    instructor: 'Sarah Drasner',
    progress: 45,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tags: ['React', 'Node.js']
  },
  {
    id: 2,
    title: 'AI in Modern Web Applications',
    instructor: 'Andrew Ng',
    progress: 12,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tags: ['AI', 'Python']
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    instructor: 'Gary Simon',
    progress: 88,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tags: ['Figma', 'Design']
  }
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="welcome-banner glass-panel">
        <div className="banner-content">
          <h1>Welcome back, Alex! 👋</h1>
          <p>You've learned for <strong>14 hours</strong> this week. Keep up the great work and finish your React module!</p>
          <button className="btn-primary mt-4">Resume Learning</button>
        </div>
        <div className="banner-image">
          {/* Decorative element */}
          <div className="abstract-shape"></div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{ background: 'rgba(139, 92, 246, 0.2)', color: 'var(--accent-primary)' }}>
            <PlayCircle />
          </div>
          <div className="stat-info">
            <h3>12</h3>
            <p>Courses in Progress</p>
          </div>
        </div>
        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{ background: 'rgba(236, 72, 153, 0.2)', color: 'var(--accent-secondary)' }}>
            <Award />
          </div>
          <div className="stat-info">
            <h3>4</h3>
            <p>Certificates Earned</p>
          </div>
        </div>
        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#3B82F6' }}>
            <Clock />
          </div>
          <div className="stat-info">
            <h3>48h</h3>
            <p>Total Time Learned</p>
          </div>
        </div>
        <div className="stat-card glass-panel">
          <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10B981' }}>
            <TrendingUp />
          </div>
          <div className="stat-info">
            <h3>85%</h3>
            <p>Average Quiz Score</p>
          </div>
        </div>
      </div>

      <div className="courses-section">
        <div className="section-header">
          <h2>Continue Learning</h2>
          <button className="text-btn">View All</button>
        </div>
        
        <div className="course-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card glass-panel" onClick={() => navigate(`/course/${course.id}`)}>
              <div className="course-image-container">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-tags">
                  {course.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p className="instructor">by {course.instructor}</p>
                <div className="progress-container">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <span className="progress-text">{course.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
