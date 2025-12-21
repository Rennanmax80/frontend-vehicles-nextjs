import api from '@/lib/axios';

export const AuthService = {
  sendMagicLink(email: string) {
    return api.post('/auth/magic-link', { email });
  },

  verifyMagicLink(token: string) {
    return api.post('/auth/verify', { token });
  },
};
