import React, { useState, useEffect } from 'react';
import auth from '../../public/auth/auth.png';
import '../styles/dialogAnimation.css';

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
  onForgotPassword: () => void;
  onRegisterClick: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ 
  isOpen, 
  onClose, 
  onLogin,
  onForgotPassword,
  onRegisterClick 
}) => {
  const [animationClass, setAnimationClass] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isOpen) {
      setAnimationClass('dialog-enter');
    } else {
      setAnimationClass('dialog-exit');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end lg:items-center justify-center z-50">
      <div className={`bg-[#212121] ${animationClass} w-[95%] lg:w-auto lg:max-w-[720px] shadow-lg relative 
                      h-auto lg:h-auto max-h-[70vh] lg:max-h-[80vh] rounded-t-lg lg:rounded-lg lg:bottom-auto bottom-0
                      overflow-auto`}>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Conteneur flex pour les deux sections sans scroll individuel */}
        <div className="lg:flex h-full">
          {/* Section gauche - Formulaire avec largeur fixe */}
          <div className="lg:w-[420px] w-full p-6 bg-black h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Login</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2.5 border border-gray-600 rounded-md focus:ring-[#4885FF] focus:border-[#4885FF] bg-[#333333] text-white"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-white text-sm font-medium">Password</label>
                    <button 
                      type="button"
                      className="text-[#4885FF] text-xs hover:underline"
                      onClick={onForgotPassword}
                    >
                      Forgot password?
                    </button>
                  </div>
                  <input
                    type="password"
                    className="w-full p-2.5 border border-gray-600 rounded-md focus:ring-[#4885FF] focus:border-[#4885FF] bg-[#333333] text-white"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#4885FF] focus:ring-[#4885FF] border-gray-600 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                    Remember me
                  </label>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#4885FF] text-white rounded-md hover:bg-[#6C9DFF] transition-colors"
                >
                  Sign in
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm mb-4">Or log in with</p>
                <div className="flex justify-center space-x-4">
                  <button className="p-2 border border-gray-600 rounded-md hover:bg-[#383838] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </button>
                  <button className="p-2 border border-gray-600 rounded-md hover:bg-[#383838] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account? {' '}
                <button 
                  className="text-[#4885FF] font-medium hover:underline"
                  onClick={onRegisterClick}
                >
                  Create account
                </button>
              </p>
            </div>
          </div>
          
          {/* Section droite - Image avec largeur réduite */}
            <div className="lg:w-[350px] w-0 bg-[#212121] hidden lg:flex items-center justify-center p-6 h-full">
            <img 
              src={auth} 
              alt="Authentication" 
              className="object-contain max-w-[300px] max-h-[300px]" 
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
