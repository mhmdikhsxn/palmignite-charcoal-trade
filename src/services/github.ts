import { format } from 'date-fns';

const GITHUB_API_URL = 'https://api.github.com/repos/palmignitecharcoaltrade/palmignite-charcoal-blogs';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const getHeaders = () => {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
  }
  return headers;
};

export interface BlogPost {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: {
    name: string;
    color: string;
  }[];
  html_url: string;
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/issues?state=open&sort=created&direction=desc`, {
      headers: getHeaders(),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const data = await response.json();
    return data.filter((issue: any) => !issue.pull_request);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getBlogPost = async (id: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/issues/${id}`, {
      headers: getHeaders(),
    });
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error('Failed to fetch blog post');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching blog post ${id}:`, error);
    return null;
  }
};

export const formatDate = (dateString: string) => {
  return format(new Date(dateString), 'MMMM d, yyyy');
};
