'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthService } from '@/services/auth.service';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) return;

    AuthService.verifyMagicLink(token)
      .then((res) => {
        const jwt = res.data.token;
        localStorage.setItem('token', jwt);
        router.push('/dashboard');
      })
      .catch(() => {
        alert('Link inválido ou expirado');
        router.push('/');
      });
  }, []);

  return <p>Autenticando...</p>;
}
