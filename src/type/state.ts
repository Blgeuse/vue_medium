import { User, ResponsesErrors, UserProfile, Article, FeedResponses, Comment, } from "./api";

//Auth

export interface AuthState {
  currentUser: null | User,
  validationErrors: null | ResponsesErrors,
  isLoggedIn:  null | boolean,
}

//Profile

export interface UserProfileState {
  user: null | UserProfile,
  isLoading: boolean,
}

//Articles

export interface ArticleState {
  article: null | Article,
  isLoading: boolean,
}

export interface CreateArticleState {
  validationErrors: null | ResponsesErrors,
}

export interface EditArticleState {
  article: null | Article,
  validationErrors: null | ResponsesErrors,
  isLoading: boolean,
}

export interface FeedState {
  data: null | FeedResponses,
  isLoading: boolean,
}

// Comments

export interface CommentState {
  comments: null | Comment | Comment[],
  isLoading: boolean,
}

// Tags

export interface PopularTagsState {
  tags: null | string[],
  isLoading: boolean,
}

// Setting
export interface SettingState {
  validationErrors: null | ResponsesErrors,
}
