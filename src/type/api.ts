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
}
export interface PopularTagsState {
  tags: null | object,
  isLoading: boolean,
}
export interface articleState {
  article: null | object,
  isLoading: boolean,
  following: null | boolean,
}
export interface SettingState {
  validationErrors: null | object,
}
export interface CreateArticleState {
  validationErrors: null | object,
}
export interface EditArticleState {
  validationErrors: null | object,
  isLoading: boolean,
  article: null | object,
}
export interface Comment {
  author: object,
  body: string,
  createdAt: string,
  id: number,
  updatedAt: string,
}
export interface UserProfileState {
  user: null | object,
  isLoading: boolean,
}
export interface CommentState {
  comments: null | object | Array<Comment>,
  isLoading: boolean,
}
export interface UpdateUser {
  email: string | null;
  password: string | null;
  username: string | null;
  bio: string | null;
  image: string | null;
}
export interface ArticleForm {
  title: string | undefined,
  description: string | undefined,
  body: string | undefined,
  tagList: string | undefined | string[],
}
