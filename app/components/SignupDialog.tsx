import React, { useState, useEffect } from 'react';
import auth from '../../public/auth/auth.png';
import '../css/dialog-animation.css';

interface SignupDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
}

const SignupDialog: React.FC<SignupDialogProps> = ({ isOpen, onClose, onSignIn }) => {
  const [animationClass, setAnimationClass] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (isOpen) {
      setAnimationClass('dialog-enter');
    } else {
      setAnimationClass('dialog-exit');
      // Réinitialiser l'état lorsque le dialogue est fermé
      setShowEmailForm(false);
    }
  }, [isOpen]);

  const handleEmailContinue = () => {
    setShowEmailForm(true);
  };

  const handleBackToOptions = () => {
    setShowEmailForm(false);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Implémenter la logique d'inscription ici
    console.log('Register with:', email, password);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end lg:items-center justify-center z-50">
      <div className={`bg-[#212121] ${animationClass} w-[95%] lg:w-auto lg:max-w-[800px] shadow-lg relative 
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
          <div className="lg:w-[480px] w-full p-6 bg-black h-full flex flex-col justify-between">
            <div>
              {!showEmailForm ? (
                /* Vue des options d'inscription */
                <>
                  <h2 className="text-3xl font-bold mb-8 text-center text-white">Create Account</h2>
                  
                  <div className="space-y-3 mb-4">
                    <button className="w-full py-2.5 px-4 border border-gray-600 rounded-md flex items-center justify-center gap-2 hover:bg-[#383838] transition-colors text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Continue with Google
                    </button>
                    
                    <button className="w-full py-2.5 px-4 border border-gray-600 rounded-md flex items-center justify-center gap-2 hover:bg-[#383838] transition-colors text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Continue with Facebook
                    </button>
                    
                    <button className="w-full py-2.5 px-4 border border-gray-600 rounded-md flex items-center justify-center gap-2 hover:bg-[#383838] transition-colors text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#5865F2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.874-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/>
                      </svg>
                      Continue with Discord
                    </button>
                    
                    <button 
                      className="w-full py-2.5 px-4 border border-gray-600 rounded-md flex items-center justify-center gap-2 hover:bg-[#383838] transition-colors text-white"
                      onClick={handleEmailContinue}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"/>
                      </svg>
                      Continue with Email
                    </button>
                  </div>
                  
                  <div className="mt-6 text-xs text-gray-400 text-center px-4">
                    <p>
                      By signing up, you agree to Driffle's Terms & Conditions and acknowledge that Driffle's Privacy Policy applies to you.
                    </p>
                  </div>
                </>
              ) : (
                /* Formulaire d'inscription par email */
                <>
                  <div className="flex items-center mb-6">
                    <button 
                      onClick={handleBackToOptions}
                      className="text-gray-400 hover:text-white mr-3"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <h2 className="text-3xl font-bold text-white">Create Account</h2>
                  </div>
                  
                  <form onSubmit={handleRegister} className="space-y-4">
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
                      <label className="block text-white text-sm font-medium mb-2">Password</label>
                      <input
                        type="password"
                        className="w-full p-2.5 border border-gray-600 rounded-md focus:ring-[#4885FF] focus:border-[#4885FF] bg-[#333333] text-white"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
                      <input
                        type="password"
                        className="w-full p-2.5 border border-gray-600 rounded-md focus:ring-[#4885FF] focus:border-[#4885FF] bg-[#333333] text-white"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full py-2.5 px-4 bg-[#4885FF] text-white rounded-md hover:bg-[#6C9DFF] transition-colors"
                    >
                      Sign up
                    </button>
                  </form>
                  
                  <div className="mt-6 text-xs text-gray-400 text-center px-4">
                    <p>
                      By signing up, you agree to Driffle's Terms & Conditions and acknowledge that Driffle's Privacy Policy applies to you.
                    </p>
                  </div>
                </>
              )}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account? {' '}
                <button 
                  className="text-[#4885FF] font-medium hover:underline"
                  onClick={onSignIn}
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
          
          {/* Section droite - Image avec largeur réduite */}
          <div className="lg:w-[320px] w-0 bg-[#212121] hidden lg:flex items-center justify-center p-6 h-full">
            <img 
              src={auth} 
              alt="Authentification" 
              className="object-contain max-w-[250px] max-h-[250px] w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupDialog;
