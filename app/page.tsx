'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  }

  const pawVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Animated background elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          fontSize: '4rem',
          opacity: 0.2
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        🐕
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          top: '70%',
          right: '10%',
          fontSize: '3rem',
          opacity: 0.2
        }}
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        🦴
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '15%',
          fontSize: '2.5rem',
          opacity: 0.2
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⭐
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Paw prints */}
        <motion.div
          variants={pawVariants}
          initial="initial"
          animate="animate"
          style={{
            fontSize: '5rem',
            marginBottom: '1rem'
          }}
        >
          🐾
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem',
            textShadow: '4px 4px 8px rgba(0,0,0,0.3)'
          }}
        >
          Dog's Talent Show
        </motion.h1>

        {/* Subtitle with floating animation */}
        <motion.div
          variants={itemVariants}
          animate="animate"
          style={{
            marginBottom: '2rem'
          }}
        >
          <motion.h2
            variants={floatingVariants}
            animate="animate"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '600',
              color: '#ffd700',
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Unleash the Talent! 🎪
          </motion.h2>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            width: '100%',
            marginBottom: '3rem'
          }}
        >
          {[
            { emoji: '🎭', title: 'Amazing Acts', desc: 'Watch incredible performances' },
            { emoji: '🏆', title: 'Win Prizes', desc: 'Compete for top honors' },
            { emoji: '🎉', title: 'Have Fun', desc: 'Celebrate our furry stars' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                cursor: 'pointer'
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
                style={{ fontSize: '4rem', marginBottom: '1rem' }}
              >
                {feature.emoji}
              </motion.div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#667eea',
                marginBottom: '0.5rem'
              }}>
                {feature.title}
              </h3>
              <p style={{ color: '#666', fontSize: '1rem' }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action button */}
        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowConfetti(!showConfetti)}
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            padding: '1.5rem 3rem',
            background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
            color: '#764ba2',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.span
            animate={{
              scale: showConfetti ? [1, 1.2, 1] : 1
            }}
            transition={{
              duration: 0.5,
              repeat: showConfetti ? Infinity : 0
            }}
          >
            Join the Show! 🎪
          </motion.span>
        </motion.button>

        {/* Confetti effect */}
        {showConfetti && (
          <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  rotate: 0
                }}
                animate={{
                  y: window.innerHeight + 20,
                  rotate: 360,
                  x: Math.random() * window.innerWidth
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{
                  position: 'absolute',
                  fontSize: '2rem'
                }}
              >
                {['🐕', '🦴', '⭐', '🎉', '🏆'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </div>
        )}

        {/* Footer text */}
        <motion.p
          variants={itemVariants}
          style={{
            marginTop: '3rem',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.2rem',
            textAlign: 'center',
            maxWidth: '600px'
          }}
        >
          Every dog has their day - and today is that day! 🐶✨
        </motion.p>
      </motion.div>
    </main>
  )
}
