import React, { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  console.log('🚀 ~ useEffect ~ state:', state);
  console.log('🚀 ~ useEffect ~ code:', code);

  // useEffect(() => {
  //   const savedState = localStorage.getItem('oauth_state');

  //   // 清除已使用的state
  //   // localStorage.removeItem('oauth_state');

  //   // // 验证state
  //   // if (!state || state !== savedState) {
  //   //   console.error('Invalid state parameter');
  //   //   navigate('/auth');
  //   //   return;
  //   // }

  //   // if (!code) {
  //   //   navigate('/auth');
  //   //   return;
  //   // }

  //   const handleOAuthCallback = async () => {
  //     try {
  //       // const response = await fetch('/api/oauth/callback', {
  //       //   method: 'POST',
  //       //   headers: {
  //       //     'Content-Type': 'application/json',
  //       //   },
  //       //   body: JSON.stringify({ code, state }),
  //       // });

  //       // if (response.ok) {
  //       //   const data = await response.json();
  //       //   navigate('/dashboard');
  //       // }

  //       navigate('/');
  //     } catch (error) {
  //       console.error('OAuth callback error:', error);
  //       navigate('/auth');
  //     }
  //   };

  //   handleOAuthCallback();
  // }, [searchParams, navigate]);

  return <div className="h-full flex-center">Processing login...</div>;
}
