import React from "react";

export default function ArticleContent() {
  return (
    <article className="space-y-6">
      {/* Article Header Placeholder */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-3/5" />
      </div>
      
      {/* Article Image Placeholder */}
      <div className="w-full h-40 bg-gray-200 rounded-lg" />
      
      {/* Article Content Placeholder */}
      <div className="space-y-3 pt-6">
        <div className="h-2 bg-gray-200 rounded w-full" />
        <div className="h-2 bg-gray-200 rounded w-full" />
        <div className="h-2 bg-gray-200 rounded w-11/12" />
        <div className="h-2 bg-gray-200 rounded w-full" />
        <div className="h-2 bg-gray-200 rounded w-10/12" />
        
        <div className="py-2" />
        
        <div className="h-2 bg-gray-200 rounded w-full" />
        <div className="h-2 bg-gray-200 rounded w-full" />
        <div className="h-2 bg-gray-200 rounded w-10/12" />
      </div>
    </article>
  );
}