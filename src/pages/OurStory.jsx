import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  const storySections = [
    {
      title: "How We Met",
      content: "About 8-9 years ago, we knew each other in college - same faculty, same campus fellowship. Our paths crossed casually during the week, more predictably on Sundays. We even shared mutual friends, which meant our circles brushed up against each other more than once. She was a classic church girl, deeply involved in fellowship activities, always committed, modestly dressed, and academically brilliant. I was a cool church guy too, attending meetings regularly, doing well in studies, staying on the safe middle lane. We didn't speak much - just the usual, polite exchanges when necessary.",
      author: "Tobi",
      image: "/images/2022_after_church.JPG",
      side: "left"
    },
    {
      title: "The Friendship Years",
      content: "After school, our paths began to cross more frequently, especially after NYSC. We started growing closer, as the Lord would have it. Our friendship started to blossom, though it felt more like a 'stressship' at times - she'd stress me, I'd retaliate, and somehow that became our rhythm. We attended birthdays, send-forths, and conferences together. When I traveled to the US, I wondered if it was the end of our friendship. But then Dorcas also came to the US, and I was so excited to see her. That's how another phase started.",
      author: "Tobi",
      image: "/images/toaster.png",
      side: "right"
    },
    {
      title: "A New Chapter",
      content: "I had known him from the same school fellowship in Lagos, Nigeria. We were in the same faculty, worked in the same place (he was my plug for the job), and shared mutual friends. I didn't like this young man initially - very assertive, vocal, which I felt was way too much, so we argued a lot. But later, I became very diplomatic in our friendship. Funnily, we were always in the same place at the same time or different times - same company, same mandatory service program. When I arrived in the US studying the same program, we reconnected at a church conference called Converge (2024).",
      author: "Dorcas",
      image: "/images/Dorcas_s_first_converge_conference_2024.JPG",
      side: "left"
    },
    {
      title: "The Proposal",
      content: "During one of our church conferences organized by EGFMUSA, I was tired after the Christmas get-together and wanted to bail out on him, but he wasn't having it. We agreed to have coffee in the lobby. Then he started telling me how much he loves me and how his conviction grew in the past year. I thought he was practicing or wanted counsel, but he said he was serious - that he had sought counsel, prayed, and even waited. I was dumbstruck and dramatic. I told him to stop the joke, but when I realized he was serious, I called it a night. A lot happened in between... but guess who said Yes three months later? Me - the best decision I have made after accepting the Lord Jesus as my Lord and personal savior.",
      author: "Dorcas",
      image: "/images/June_2025.jpg",
      side: "right"
    },
    {
      title: "Our Love Today",
      content: "What makes our love story special is the intentionality of the Lord concerning both of us - how the Lord led us, two seemingly different people whose paths are unknowingly intertwined. We love playing chess (I've promised Tobi I will beat him at his game!), taking walks together, singing (he plays guitar, I sing along), and dancing even though we're not good at it. Our favorite words are 'It's fine' (Dorcas) and 'It's okay, let's have it' (Tobi). We're looking forward to a lifetime adventure fulfilling God's plan and purpose for our lives.",
      author: "Both",
      image: "/images/church_conference_june_2025.JPG",
      side: "left"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-script text-text-gray mb-6">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-dusty-pink to-soft-green mx-auto rounded-full"></div>
        </motion.div>

        {/* Story sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {storySections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                section.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-8 md:gap-16`}
            >
              {/* Image */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                  style={{ 
                    aspectRatio: '4/3',
                    minHeight: '320px',
                    maxHeight: '400px'
                  }}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback content when image fails to load */}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-dusty-pink/30 to-soft-green/30 hidden items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center text-text-gray/70">
                      <div className="text-4xl mb-2">📸</div>
                      <div className="text-lg font-medium">{section.title}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: section.side === 'right' ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <h2 className="story-title font-script text-text-gray">
                    {section.title}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className={`author-tag ${
                      section.author === 'Tobi' 
                        ? 'tobi' 
                        : section.author === 'Dorcas'
                        ? 'dorcas'
                        : 'both'
                    }`}>
                      {section.author === 'Both' ? 'Tobi & Dorcas' : section.author}
                    </span>
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: section.side === 'right' ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-text-gray leading-relaxed"
                >
                  {section.content}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-to-r from-dusty-pink/10 to-soft-green/10 rounded-3xl p-12">
            <h3 className="text-3xl font-script text-text-gray mb-6">
              "My Eden. My garden. Perfect, beautiful, lush and tender."
            </h3>
            <p className="text-lg text-text-gray/90 italic mb-4">
              - Tobi about Dorcas
            </p>

            <div className="w-16 h-1 bg-gradient-to-r from-dusty-pink to-soft-green mx-auto rounded-full mb-6"></div>
            <h3 className="text-3xl font-script text-text-gray mb-6">
            "It's the intentionality of the Lord concerning both of us, how the Lord led us, 
             two seemingly different people whose paths are unknowingly intertwined."
            </h3>
            <p className="text-base text-text-gray/90 italic mt-4">
              - Dorcas about their love story
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
