
export const mutations = {
    loginSuccess(state, payload) {
        localStorage.setItem('user', payload.current_user);
        localStorage.setItem('logout_token', payload.logout_token);
        localStorage.setItem('csrf_token', payload.csrf_token);
    },
    logoutSuccess(state) {
      localStorage.removeItem('user');
      localStorage.removeItem('logout_token');
      localStorage.removeItem('csrf_token');
  }
}
