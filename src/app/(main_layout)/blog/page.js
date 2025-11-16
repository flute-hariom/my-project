"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogsData from "@/lib/blogs.json";

const BlogListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogs = blogsData.blogs;

  // Get unique categories
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a]">
      {/* Header */}
      <div className="pt-12 pb-8">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-12 mt-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover insights, tutorials, and updates on the latest trends in
              technology and digital innovation
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-1">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              {/* <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div> */}

              {/* Category Filter */}
              {/* <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 pb-20">
        {filteredBlogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-blue-500/50"
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Author */}
                  <div className="text-sm text-gray-500 mb-4">
                    By <span className="text-blue-400">{blog.author}</span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              No articles found matching your criteria.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 bg-blue-600 hover:bg-blue-700"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Results Count */}
        {filteredBlogs.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500">
              Showing {filteredBlogs.length} of {blogs.length} articles
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;
