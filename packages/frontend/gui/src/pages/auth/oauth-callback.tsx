import React, { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

async function fetchOAuthCallback(code: string, state: string) {
  try {
    const params = new URLSearchParams({
      code: code || '',
      redirect_uri: 'http://127.0.0.1:5173/oauth/callback'
    });

    const response = await fetch(`http://localhost:3000/auth/oauth/github/callback?${params.toString()}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response data:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export default function Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  useEffect(() => {
    //TODO: 验证code
    if (!code || !state) {
      return;
    }

    const handleOAuthCallback = async () => {
      try {
        fetchOAuthCallback(code, state);
      } catch (error) {
        console.error('OAuth callback error:', error);
        navigate('/auth');
      }
    };

    handleOAuthCallback();
  }, [searchParams, navigate]);

  return <div className="h-full flex-center">Processing login...</div>;
}
