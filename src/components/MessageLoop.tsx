'use client';

import { useEffect, useRef } from 'react';

interface MessageLoopProps {
  messages: string[];
  className?: string;
  textColor?: string;
}

export default function MessageLoop({ messages, className = '', textColor = 'text-white/80' }: MessageLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let startTime: number;
    const speed = 0.1; // pixels per millisecond

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const translateX = -(elapsed * speed);
      
      track.style.transform = `translateX(${translateX}px)`;
      
      // Reset position when we've scrolled one full set of messages
      const trackWidth = track.scrollWidth / 2; // Since we duplicate the messages
      if (Math.abs(translateX) >= trackWidth) {
        startTime = currentTime;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [messages]);

  return (
    <div className={`messageloop ${className}`}>
      <div className="messageloop__track" ref={trackRef}>
        <div className="messageloop__list">
          {messages.map((message, index) => (
            <div key={`first-${index}`} className="messageloop__item">
              <div className="messageloop__node">
                <span className={`${textColor} font-gotham-condensed font-bold text-2xl md:text-3xl`}>
                  {message}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="messageloop__list">
          {messages.map((message, index) => (
            <div key={`second-${index}`} className="messageloop__item">
              <div className="messageloop__node">
                <span className={`${textColor} font-gotham-condensed font-bold text-2xl md:text-3xl`}>
                  {message}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .messageloop {
          position: relative;
          overflow-x: hidden;
          --messageloop-gap: 32px;
          --messageloop-fadeColorAuto: #000000;
        }

        .messageloop__track {
          display: flex;
          width: max-content;
          will-change: transform;
          user-select: none;
        }

        .messageloop__list {
          display: flex;
          align-items: center;
        }

        .messageloop__item {
          flex: 0 0 auto;
          margin-right: var(--messageloop-gap);
        }

        .messageloop__item:last-child {
          margin-right: var(--messageloop-gap);
        }

        .messageloop__node {
          display: inline-flex;
          align-items: center;
        }

        .messageloop--fade::before,
        .messageloop--fade::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(24px, 8%, 120px);
          pointer-events: none;
          z-index: 1;
        }

        .messageloop--fade::before {
          left: 0;
          background: linear-gradient(
            to right,
            var(--messageloop-fadeColor, var(--messageloop-fadeColorAuto)) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .messageloop--fade::after {
          right: 0;
          background: linear-gradient(
            to left,
            var(--messageloop-fadeColor, var(--messageloop-fadeColorAuto)) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .messageloop__track {
            transform: translate3d(0, 0, 0) !important;
          }
        }
      `}</style>
    </div>
  );
}
