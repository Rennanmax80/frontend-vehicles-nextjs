'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthService } from '@/services/auth.service';

export default function AuthCallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) {
      router.replace('/');
      return;
    }

    AuthService.verifyMagicLink(token)
      .then((res) => {
        const jwt = res.data.token;
        localStorage.setItem('token', jwt);
        router.replace('/dashboard');
      })
      .catch(() => {
        alert('Link inválido ou expirado');
        router.replace('/');
      });
  }, [searchParams, router]);

  return <p>Autenticando...</p>;
}
