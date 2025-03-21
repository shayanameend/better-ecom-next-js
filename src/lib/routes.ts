export const api = {};

export const app = {
  auth: {
    signUp: {
      label: () => "Sign Up",
      url: () => "/sign-up",
    },
    signIn: {
      label: () => "Sign In",
      url: () => "/sign-in",
    },
  },
  public: {
    home: {
      label: () => "Home",
      url: () => "/",
    },
  },
};

export const routes = {
  api,
  app,
};
