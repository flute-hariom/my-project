"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogsData from "@/lib/blogs.json";
// import bannersData from "@/lib/banners.json";

const LatestBlogs = () => {
  const blogs = blogsData.blogs.slice(0, 4); // Show first 4 blogs

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights and updates on the latest trends in technology and digital
            innovation
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              {/* <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              > */}
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
