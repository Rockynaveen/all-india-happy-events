export interface CommentReply {
  name: string;
  date: string;
  text: string;
}

export interface Comment {
  name: string;
  date: string;
  text: string;
  replies?: CommentReply[];
}

export interface BlogDetailsContent {
  intro: string[];
  quote: string;

  sections: {
    heading: string;
    image?: string;
    content: string[];
  }[];

  tags: string[];

  author: {
    name: string;
    role: string;
    description: string;
    image: string;
  };

  comments: Comment[];
}