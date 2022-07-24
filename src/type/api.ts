export interface ResponsesErrors {
  body: string[]
}

//User and Authentication

export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

  //-Login

export interface LoginUser {
  email: string;
  password: string;
}

export interface LoginUserResponses {
  user: User
}

  //-Register

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface NewUserResponses {
  user: User
}
  //-Get current user

export interface GetUserResponses {
  user: User
}

  //-Update current user

export interface UpdateUser {
  email: string,
  token: string,
  username: string,
  bio?: string,
  image?: string
}

export interface UpdateUserResponses extends User {}

// Profile

export interface UserProfile {
  username: string,
  bio: string,
  image: string,
  following: boolean,
}

// Article

export interface Article {
  slug: string,
  title: string,
  description: string,
  body: string,
  tagList: string[],
  createdAt: Date,
  updatedAt: Date,
  favorited: boolean,
  favoritesCount: number,
  author: {
    username: string,
    bio: string,
    image: string,
    following: boolean
  }
}

  //-Feed

export interface FeedResponses {
  articles: Article[],
  articlesCount: number,
}

  //-Create articles

export interface CreateArticle {
  title: string | undefined,
  description: string | undefined,
  body: string | undefined,
  tagList: string[] | string | undefined,
}

  //-Update Article

export interface UpdateArticle {
  title: string,
  description: string,
  body: string,
}

//Comments

export interface Comment {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  body: string,
  author: {
    username: string,
    bio: string,
    image: string,
    following: boolean
  }
}

  //-Get Comments

export interface GetCommentsResponses {
  comments: Comment[]
}

  //-Create Comment

export interface CreateComment {
  body: string
}

export interface CreateCommentResponses {
  comment: Comment
}

// Favorites

export interface Favorites {
  article: Article
}
