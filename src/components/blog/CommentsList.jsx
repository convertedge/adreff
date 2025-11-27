import React from "react";
import { ThumbsUp, MessageCircle, User } from "lucide-react";

const mockComments = [
  { id: 1, likes: 0, replies: 0 },
  { id: 2, likes: 0, replies: 0 },
  { id: 3, likes: 0, replies: 0 },
  { id: 4, likes: 0, replies: 0 },
  { id: 5, likes: 0, replies: 0 }
];

export default function CommentsList() {
  return (
    <div className="space-y-6">
      {mockComments.map((comment) => (
        <div key={comment.id} className="flex gap-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-4 bg-gray-200 rounded w-32" />
              <span className="text-gray-400">|</span>
              <div className="h-3 bg-gray-200 rounded w-20" />
            </div>
            
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-11/12" />
            </div>
            
            <div className="flex items-center gap-4 pt-2">
              <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm">{comment.likes}</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{comment.replies}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}