import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Support = () => {
    
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const NavigateLogin = () => {
        navigate('/login');
    };

    useEffect(() => {
        if (currentUser == null) return NavigateLogin();
    }, []);

    return (
        <div className="container-fluid">
            {currentUser != null ? (
            <div className='text-lg font-bold px-10' style={{ textAlign: 'center', color: '#ffffff', backgroundColor: '#000000', paddingTop: '10px', paddingBottom: '10px' }}>
                 {currentUser.displayName ? currentUser.displayName : currentUser.email}, Welcome to our sanctuary of mental well-being. Here, we embrace every facet of your journey with empathy and support. Together, let's navigate the path to inner peace and resilience. You're not alone – let's embark on this journey together.
            </div>            
            ) : (
                <div className='text-lg font-bold px-4 py-14' onClick={NavigateLogin}>
                    Unauthorized Login
                </div>
            )}
        </div>
    );
};

export default Support;
