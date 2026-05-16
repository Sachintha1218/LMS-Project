import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Play, CheckCircle, FileText, Download, MessageSquare } from 'lucide-react';
import './CoursePlayer.css';

const courseData = {
  title: "Advanced FullStack Engineering",
  modules: [
    {
      id: 1,
      title: "Module 1: Advanced React Patterns",
      lessons: [
        { id: 101, title: "Render Props & HOCs", duration: "14:20", completed: true },
        { id: 102, title: "Custom Hooks Mastery", duration: "22:15", completed: true },
        { id: 103, title: "Context API Deep Dive", duration: "18:40", completed: false }
      ]
    },
    {
      id: 2,
      title: "Module 2: Node.js & Express Architecture",
      lessons: [
        { id: 201, title: "Middleware Patterns", duration: "25:10", completed: false },
        { id: 202, title: "Error Handling Strategies", duration: "19:05", completed: false }
      ]
    }
  ]
};

const CoursePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(courseData.modules[0].lessons[2]);

  return (
    <div className="course-player-container">
      <div className="player-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ChevronLeft size={20} />
          <span>Back to Dashboard</span>
        </button>
        <h2>{courseData.title}</h2>
      </div>

      <div className="player-layout">
        <div className="main-content-area">
          <div className="video-container glass-panel">
            {/* Placeholder for Video Player */}
            <div className="video-placeholder">
              <Play size={64} className="play-icon" />
              <p>Playing: {activeLesson.title}</p>
            </div>
          </div>

          <div className="lesson-details glass-panel mt-4">
            <div className="tabs">
              <button className="tab active">Overview</button>
              <button className="tab">Q&A</button>
              <button className="tab">Resources</button>
            </div>
            <div className="tab-content">
              <h3>About this lesson</h3>
              <p>In this lesson, we will explore the depths of React's Context API. You will learn how to optimize re-renders and structure your context providers for enterprise applications.</p>
              
              <div className="resources-list">
                <div className="resource-item">
                  <FileText size={18} />
                  <span>Lesson Notes (PDF)</span>
                  <Download size={16} className="download-icon" />
                </div>
                <div className="resource-item">
                  <FileText size={18} />
                  <span>Starter Code (ZIP)</span>
                  <Download size={16} className="download-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-sidebar glass-panel">
          <div className="sidebar-header">
            <h3>Course Content</h3>
            <span className="progress-badge">45% Completed</span>
          </div>
          
          <div className="modules-list">
            {courseData.modules.map(module => (
              <div key={module.id} className="module">
                <div className="module-header">
                  <h4>{module.title}</h4>
                  <span className="lesson-count">{module.lessons.length} lessons</span>
                </div>
                <div className="lessons-list">
                  {module.lessons.map(lesson => (
                    <div 
                      key={lesson.id} 
                      className={`lesson-item ${activeLesson.id === lesson.id ? 'active' : ''}`}
                      onClick={() => setActiveLesson(lesson)}
                    >
                      <div className="lesson-icon">
                        {lesson.completed ? (
                          <CheckCircle size={16} className="completed-icon" />
                        ) : (
                          <Play size={16} className={activeLesson.id === lesson.id ? 'active-icon' : 'pending-icon'} />
                        )}
                      </div>
                      <div className="lesson-info">
                        <span className="lesson-title">{lesson.title}</span>
                        <span className="lesson-duration">{lesson.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;
