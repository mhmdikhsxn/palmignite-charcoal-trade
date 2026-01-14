import { BlogPost, formatDate } from '@/services/github';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.number}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group cursor-pointer">
        <CardHeader className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {post.labels.map((label) => (
              <Badge 
                key={label.name} 
                variant="secondary" 
                className="text-xs font-medium"
                style={{ 
                  backgroundColor: `#${label.color}20`, 
                  color: `#${label.color}`,
                  borderColor: `#${label.color}40`
                }}
              >
                {label.name}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {post.body?.replace(/[#*`]/g, '').slice(0, 150)}...
          </p>
        </CardContent>
        <CardFooter className="flex justify-between text-xs text-muted-foreground mt-auto">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{post.user.login}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(post.created_at)}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
