import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import TrainerDashboard from './pages/TrainerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LearningPathway from './pages/LearningPathway';
import TopicViewer from './pages/TopicViewer';
import Assessments from './pages/Assessments';
import Achievements from './pages/Achievements';
import CertificateViewer from './pages/CertificateViewer';
import CareerGuidance from './pages/CareerGuidance';

// Auth Wrapper
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="app-container">
      {/* Global Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Student Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:courseId"
            element={
              <ProtectedRoute role="student">
                <LearningPathway />
              </ProtectedRoute>
            }
          />
          <Route
            path="/topic/:topicId"
            element={
              <ProtectedRoute role="student">
                <TopicViewer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assessments"
            element={
              <ProtectedRoute role="student">
                <Assessments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/achievements"
            element={
              <ProtectedRoute role="student">
                <Achievements />
              </ProtectedRoute>
            }
          />
          <Route
            path="/certificate"
            element={
              <ProtectedRoute role="student">
                <CertificateViewer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/career-guidance"
            element={
              <ProtectedRoute role="student">
                <CareerGuidance />
              </ProtectedRoute>
            }
          />

          {/* Trainer Routes */}
          <Route
            path="/trainer-dashboard"
            element={
              <ProtectedRoute role="trainer">
                <TrainerDashboard />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
