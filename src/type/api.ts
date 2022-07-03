export interface LoginUser {
  email: string;
  password: string;
}

export interface LoginUserRequest {
  user: LoginUser;
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface NewUserRequest {
  user: NewUser;
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface AuthState {
  currentUser: null | User,
  validationErrors: null | object,
  isLoggedIn:  null | boolean,
}

export interface FeedState {
  data: null | object,
  isLoading: boolean,
  error: null | object,
}
export interface SettingState {
  validationErrors: null | object,
}

export interface UpdateUser {
  email: string | null;
  password: string | null;
  username: string | null;
  bio: string | null;
  image: string | null;
}
