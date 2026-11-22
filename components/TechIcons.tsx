// This module exports crisp brand icons for all supported mobile technologies.
import React from "react";

// This component renders custom scalable vector graphics for technology badges.
export function TechIcon({
  name,
  className = "w-8 h-8",
}: {
  name: string;
  className?: string;
}) {
  switch (name.toLowerCase()) {
    case "flutter":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M14.314 0L2.3 12 6 15.7 21.714 0h-7.4z" fill="#02569B" />
          <path d="M14.314 12L7.7 18.614l3.7 3.7L21.714 12h-7.4z" fill="#0175C2" />
          <path d="M11.4 14.914L8.7 17.614 12.3 21.214l2.7-2.7-3.6-3.6z" fill="#29B6F6" />
        </svg>
      );
    case "react native":
    case "react":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );
    case ".net maui":
    case "maui":
    case ".net":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#512BD4" />
          <path d="M6 16V8h2.2l3.8 5.2V8H14v8h-2.2L8 10.8V16H6z" fill="#FFFFFF" />
          <circle cx="17.5" cy="15" r="1.5" fill="#23D1AE" />
        </svg>
      );
    case "dart":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4 4h9l7 7-6 9H5L4 4z" fill="#0175C2" />
          <path d="M4 4l9 9-4 7-5-5V4z" fill="#00B4AB" />
          <path d="M13 4l7 7-7 9 4-7-4-9z" fill="#02569B" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11 10h-2v7H7.5v-7h-2V8.5h5.5V10zm3.8 4.2c.4.3.9.5 1.5.5.6 0 1-.2 1-.6 0-.4-.3-.5-1.1-.8-1.2-.4-1.8-.9-1.8-1.8 0-1.1.9-1.9 2.3-1.9 1 0 1.6.3 2 .6l-.5 1.2c-.4-.3-.8-.5-1.5-.5-.6 0-.9.2-.9.5 0 .3.3.5 1.1.8 1.3.4 1.8 1 1.8 1.9 0 1.2-1 1.9-2.4 1.9-1.1 0-1.9-.3-2.4-.7l.4-1.1z" fill="#FFFFFF" />
        </svg>
      );
    case "c#":
    case "csharp":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#239120" />
          <path d="M11.5 8c-2.5 0-4 1.8-4 4s1.5 4 4 4c1.2 0 2.2-.5 2.8-1.2l-1.1-1c-.4.5-1 .8-1.7.8-1.4 0-2.2-1.1-2.2-2.6s.8-2.6 2.2-2.6c.7 0 1.3.3 1.7.8l1.1-1c-.6-.7-1.6-1.2-2.8-1.2z" fill="#FFFFFF" />
          <path d="M15 9.5h1.2v1.5h1.5v1h-1.5v1.5h1.5v1h-1.5V16H15v-1.5h-1.5v-1H15V11h-1.5v-1H15V9.5zm-3.8 0" stroke="#FFFFFF" strokeWidth="0.5" fill="#FFFFFF" />
        </svg>
      );
    case "firebase":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4.5 18.5L6.8 4.2a.5.5 0 01.9-.2l3.4 6.4-6.6 8.1z" fill="#FFA000" />
          <path d="M14.2 9.1L12.5 5.8a.5.5 0 00-.9 0L4.5 18.5l9.7-9.4z" fill="#F57C00" />
          <path d="M12.5 14.5l2.6-2.6 4.4 7-7 3.6-8-4 8-4z" fill="#FFCA28" />
        </svg>
      );
    case "sqlite":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#003B57" />
          <path d="M6 8c0-1.7 2.7-3 6-3s6 1.3 6 3v8c0 1.7-2.7 3-6 3s-6-1.3-6-3V8z" fill="#002D42" />
          <ellipse cx="12" cy="8" rx="5" ry="2" fill="#0094D8" />
          <path d="M7 11c1.2 1 3.2 1.5 5 1.5s3.8-.5 5-1.5M7 14c1.2 1 3.2 1.5 5 1.5s3.8-.5 5-1.5" stroke="#0094D8" strokeWidth="1.2" />
        </svg>
      );
    case "postgresql":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#336791" />
          <path d="M12 5.5c-3.5 0-6 2.5-6 6 0 2.2 1.1 4.1 2.8 5.2.2.8.6 1.8 1.4 2.3.8.5 2 .5 2.8-.2.8.7 2 .7 2.8.2.8-.5 1.2-1.5 1.4-2.3 1.7-1.1 2.8-3 2.8-5.2 0-3.5-2.5-6-6-6z" fill="#FFFFFF" />
          <circle cx="10" cy="11" r="1" fill="#336791" />
          <circle cx="14" cy="11" r="1" fill="#336791" />
        </svg>
      );
    case "kotlin":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M20 20H4V4h16l-8 8 8 8z" fill="url(#kotlinGradient)" />
          <defs>
            <linearGradient id="kotlinGradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7F52FF" />
              <stop offset="0.5" stopColor="#C711E1" />
              <stop offset="1" stopColor="#E4485D" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M21.6 10.7l-8.3-8.3c-.8-.8-2-.8-2.8 0L8.7 4.2l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.8-1.5-.5-2.3l-3.2-3.2v4.8c.4.3.7.8.7 1.4 0 1.1-.9 2-2 2s-2-.9-2-2c0-.6.3-1.1.7-1.4V9.3c-.4-.3-.7-.8-.7-1.4 0-.6.3-1.1.7-1.4L4.2 8.7 2.4 10.5c-.8.8-.8 2 0 2.8l8.3 8.3c.8.8 2 .8 2.8 0l8.1-8.1c.8-.8.8-2 0-2.8z" fill="#F05032" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M22.5 11.5c-.3-.2-1.4-.4-2.5.3-.2-.8-.9-1.4-1.7-1.5l-.4-.1-.3.3c-.6.6-.9 1.4-.9 2.2 0 .4.1.8.3 1.2-.5.3-1.2.6-2.1.6H2.6c-.4 0-.6.3-.6.6.3 3.6 3.3 6.6 8.3 6.6 6.3 0 9.8-3.6 10.6-8.2.9-.3 1.7-1 1.9-1.6.1-.2 0-.4-.3-.5z" fill="#2496ED" />
          <rect x="7" y="11" width="2" height="2" fill="#2496ED" />
          <rect x="9.5" y="11" width="2" height="2" fill="#2496ED" />
          <rect x="12" y="11" width="2" height="2" fill="#2496ED" />
          <rect x="9.5" y="8.5" width="2" height="2" fill="#2496ED" />
          <rect x="12" y="8.5" width="2" height="2" fill="#2496ED" />
          <rect x="12" y="6" width="2" height="2" fill="#2496ED" />
        </svg>
      );
    default:
      return (
        <div className={`${className} rounded-md bg-white/10 flex items-center justify-center text-xs text-white font-bold`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
