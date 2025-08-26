import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Music as MusicOff, X, Mail } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import Musicc from './websong.mp3';
import MImg1 from './images/IMG_1.jpeg';
import MImg2 from './images/IMG_2.jpeg';
import MImg3 from './images/IMG_3.jpeg';
import Img3 from './images/cute.gif';
import ScrollReveal from './components/ScrollReveal';
import EnvelopeGif from './images/making_2.gif'; // Add this import for your GIF
import BottomGif from './images/tacos.gif'



// StickyNote component for comic-style sticky notes with a wiggle effect
const StickyNote = ({ text, style, delay = 0 }) => (
  <motion.div
    className="absolute bg-yellow-200 p-2 rounded shadow-lg font-comic text-sm border-2 border-dashed border-yellow-300"
    style={style}
    initial={{ opacity: 0, y: -20, rotate: -5 }}
    animate={{ opacity: 1, y: 0, rotate: [0, -3, 3, 0] }}
    transition={{ delay, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
  >
    {text}
  </motion.div>
);

// EnvelopeAnimation component
const EnvelopeAnimation = ({ onOpenComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowLetter(true), 800);
      setTimeout(() => onOpenComplete(), 2500);
    }
  };

  // ✅ Hide letter after 7 seconds
  useEffect(() => {
    if (showLetter) {
      const timer = setTimeout(() => {
        setShowLetter(false);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [showLetter]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden">
      <motion.div
        className="cursor-pointer relative z-20"
        onClick={handleEnvelopeClick}
        style={{ perspective: 1000 }}
      >
        {/* GIF positioned above the envelope */}
        <motion.div
          className="absolute -top-[8rem] left-1/2 transform -translate-x-1/2 w-48 h-48 z-30"
          initial={{ y: -10 }}
          animate={{ y: [-10, 0, -10] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <img 
            src={EnvelopeGif} 
            alt="Animated hearts" 
            className="w-full h-full object-contain filter drop-shadow-lg"
            style={{ pointerEvents: 'none' }}
            loop="infinite"
          />
        </motion.div>

        {/* Bottom GIF */}
        {/* <motion.div
          className="absolute bottom-2 left-2 w-40 h-40 "
          initial={{ y: 10 }}
          animate={{ y: [10, 0, 10] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <img 
            src={BottomGif} 
            alt="Decorative gif" 
            className="w-full h-full object-contain filter drop-shadow-lg"
            style={{ pointerEvents: 'none' }}
          />
        </motion.div> */}

        {/* Envelope body */}
        <motion.div
         className="w-[360px] h-[240px] rounded-xl shadow-[0_14px_36px_rgba(0,0,0,0.14)] relative overflow-hidden"
         style={{ background: "#FFE8EC" }}
         animate={isOpen ? { scale: 0.95, opacity: 0.9 } : { scale: 1, opacity: 1 }}
         transition={{ duration: 1 }}
        >
         {/* Diagonal panels */}
         <div
           className="absolute inset-0"
           style={{
            background: "#FFC8D2",
            clipPath: "polygon(0% 0%, 100% 0%, 50% 44%)", // top
          }}
         />
         <div
           className="absolute inset-0"
           style={{
            background: "#FFDDE4",
            clipPath: "polygon(0% 0%, 0% 100%, 50% 56%, 50% 44%)", // left
          }}
         />
         <div
           className="absolute inset-0"
           style={{
            background: "#FFD1D9",
            clipPath: "polygon(100% 0%, 100% 100%, 50% 56%, 50% 44%)", // right
          }}
         />
         {/* subtle inner highlight */}
         <div
           className="absolute inset-0 rounded-xl pointer-events-none"
           style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}
         />

        {/* Envelope body */}
        {/* <motion.div
          className="w-[360px] h-[240px] bg-pink-100 border border-blue-200 rounded-lg shadow-2xl relative"
          animate={isOpen ? { scale: 0.95, opacity: 0.7 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        > */}
          {/* Flap */}
          {/* <motion.div
            className="absolute top-0 left-0 right-0 w-0 h-0 border-l-[180px] border-r-[180px] border-t-[120px] border-l-transparent border-r-transparent border-t-pink-300"
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          /> */}
          <motion.div
            className="absolute top-0 left-0 right-0 w-0 h-0 
             border-l-[180px] border-r-[180px] border-t-[120px] 
             border-l-transparent border-r-transparent"
             initial={{ rotateX: 0 }}
             animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
             transition={{ duration: 1, ease: 'easeInOut' }}
             style={{ transformOrigin: 'top', borderTopColor: '#FFB9C6' }}
          />

          {/* Heart Seal */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 bg-pink-500 rounded-full p-3 shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>

          {/* Inner letter sliding out */}
          {showLetter && (
            <motion.div
              className="absolute inset-x-4 top-5 h-[200px] bg-white rounded-lg shadow-lg p-4 flex items-center justify-center"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
            <div className="text-center">
              <p className="text-gray-600 font-borel text-lg">💌 A taco for you... 💌</p>
              <div className="flex justify-center mt-2">
                <span className="text-4xl">🌮</span>
              </div>
            </div>
              {/* <p className="text-gray-600 font-borel text-lg">💌 A taco for you... 💌</p>
              <span className="text-4xl mt-3">🌮</span> */}
            </motion.div>
          )}
        </motion.div>

        {/* Hint text */}
        {!isOpen && (
          <motion.div
            className="text-pink-600/80 text-lg font-medium text-center mt-4 font-poppins"
            animate={{ opacity: [0, 1, 0], y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click to open
          </motion.div>
        )}
      </motion.div>

    </div>
  );
};

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [initialLetterOpened, setInitialLetterOpened] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [showGame, setShowGame] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showBigHeart, setShowBigHeart] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState(null);

  useEffect(() => {
    if (initialLetterOpened && !showContent) {
      const timer = setTimeout(() => setShowContent(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [initialLetterOpened, showContent]);

  const toggleMusic = () => {
    const audio = document.getElementById('bgMusic');
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };


  const addHeart = (e) => {
    const newHeart = { id: Date.now(), x: e.clientX, y: e.clientY };
    setHearts([...hearts, newHeart]);
    setTimeout(() => setHearts((hs) => hs.filter((h) => h.id !== newHeart.id)), 1500);
  };

  if (!initialLetterOpened) {
    return <EnvelopeAnimation onOpenComplete={() => { setInitialLetterOpened(true); setShowLetter(true); }} />;
  }

  const stickyNotes = [
    { text: "I'm truly sorry!", style: { top: '14.5%', left: '4%' }, delay: 0.2 },
    { text: "Forgive me, please.", style: { top: '21.5%', right: '6%' }, delay: 0.4 },
    { text: "I regret my mistakes.", style: { bottom: '10%', left: '5%' }, delay: 0.6 },
    { text: "Let's start fresh.", style: { bottom: '12%', right: '8%' }, delay: 0.8 },
    { text: "My apology is sincere.", style: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, delay: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-red-200 to-rose-300 p-8 cursor-pointer relative overflow-hidden" onClick={addHeart}>
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute pointer-events-none"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [1, 1.5], y: -80, opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{ left: heart.x - 10, top: heart.y - 10 }}
        >
          <Heart className="text-pink-500 w-5 h-5" fill="currentColor" />
        </motion.div>
      ))}

      {/* Sticky Notes */}
      {stickyNotes.map((note, index) => (
        <StickyNote key={index} text={note.text} style={note.style} delay={note.delay} />
      ))}

      {/* Music Player */}
      <audio id="bgMusic" loop autoPlay>
      <source src={Musicc} type="audio/mpeg" />
      </audio>
      
      <div className="fixed top-3 right-3 flex flex-col items-end gap-1 z-40">
      <button
      onClick={(e) => { e.stopPropagation(); toggleMusic(); }}
      className="text-xs font-acme text-gray-600 bg-white px-3 py-1 rounded-full shadow-md hover:scale-110 transition-transform"
      >
      {isPlaying ? "Click to Stop music 🔇" : "Click to Play music 🎵"}
      </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-16">
        <ScrollReveal animation="fade" duration={0.8}>
          <div className="text-center pt-8">
            <h1 className="text-4xl font-bold text-pink-600 mb-2 font-lilita">Yarrr iRitika,</h1>
            <p className="text-gray-600 font-montserrat">You’re my safe place, and without you, I feel empty. Please come back.</p>
          </div>
        </ScrollReveal>

          {/* Game Card */}
        <ScrollReveal animation="slide" duration={0.7} delay={0.3}>
          <motion.div
            className="comic-panel bg-white p-6 text-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ rotate: [-1, 1, -1, 0] }}
            onClick={() => setShowBigHeart(true)}   // ✅ add this line

            // onClick={(e) => { e.stopPropagation(); setShowGame(true); }}
          >
            <div className="bg-pink-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
              <Heart className="w-8 h-8 text-pink-600" fill="currentColor" />
            </div>
            {/* <h2 className="text-xl font-bold text-pink-600 font-comic">Play a Game!</h2> */}
            <p className="text-gray-600 font-borel mt-2">
              Catch the hearts & find a message meant just for you
            </p>
            {/* {gameCompleted && (
              <div className="mt-3 bg-pink-50 p-2 rounded-lg border border-pink-200">
                <p className="text-pink-600 font-comic text-sm">
                  You've completed the game! ✨ But you can play again if you want!
                </p>
              </div>
            )} */}
          </motion.div>
        </ScrollReveal>
        <AnimatePresence>
          {showBigHeart && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBigHeart(false)} // close on click
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative flex items-center justify-center"
              >
                {/* Big Heart */}
                <div className="relative flex items-center justify-center w-90 h-90">
                <Heart className="w-80 h-80 text-pink-500" fill="currentColor" />
                
                {/* Text inside Heart */}
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center -translate-y-4">
                <p className="font-poiret text-base sm:text-lg md:text-xl font-semibold leading-tight text-white mt-1">
                 When you find her,<br />
                 you fight for her, you risk it all.<br />
                 You put her before everything,<br />
                 your future, your life, all of it.<br />
                 And maybe the things you do to help <br />
                 her aren’t always right. But you<br />
                 know what? It doesn’t matter.<br />
                 Because in your heart,<br />
                 you know it’s worth<br />
                 it.
                </p>
                </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Letter Card */}
        <ScrollReveal animation="zoom" duration={0.7} delay={0.1}>
          <motion.div
            className="comic-panel bg-white p-6 text-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ rotate: [-1, 1, -1, 0] }}
            onClick={(e) => { e.stopPropagation(); setShowLetter(true); }}
          >
            <Mail className="w-12 h-12 text-pink-600 mx-auto mb-2" />
            <h2 className="text-xl font-bold text-pink-600 font-berkshire">Read My Apology Letter 💌</h2>
            {/* <p className="text-gray-600 font-comic mt-2">Click here for my sincere apology</p> */}
          </motion.div>
        </ScrollReveal>

        {/* Panels */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
            text: "I know I've been distant and didnt communicate, and I'm truly sorry...",
            img: Img1,
            caption: "I hope you can forgive me."
          }, {
            text: "I regret my mistakes and the pain they caused.",
            img: Img2,
            caption: "I'm truly sorry and promise to do better."
          }].map((p, i) => (
            <ScrollReveal key={i} animation="slide" delay={i * 0.2} duration={0.8}>
              <motion.div
                className="comic-panel bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
                whileHover={{ y: -5 }}
              >
                <div className="comic-speech-bubble mb-4">
                  <p className="font-comic text-lg text-gray-800">{p.text}</p>
                </div>
                <img src={p.img} alt="panel" className="rounded-lg mb-4 w-full h-64 object-cover" />
                <p className="text-gray-700 font-comic text-center">{p.caption}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            text: "Office cabs always remind me of you",
            img: MImg1,
            caption: "Tap to feel what I feel",
            modalMessage: "When you were in my arms & you gently move your fingers through my hair, that moment is one of the most beautiful memories of my life. I didn’t need words, because nothing could describe what I felt. It was just raw, quiet, and real. Everything else disappeared… the stress, the noise, the world. It was just you, me, and peace and I’ve never felt more complete than I did right then."
          },
          {
            text: "Our Third Wave session… unforgettable",
            img: MImg2,
            caption: "Click and feel every word",
            modalMessage: "That surreal moment of holding hands, you resting your head on my shoulder, sipping chamomile tea, and playfully tickling your feet is still so fresh in my memory."
          },
          {
            text: "My best part of the day was watching you sleep",
            img: MImg3,
            caption: "Open this… it’s for you",
            modalMessage: "Watching you sleep every night brought me so much peace. It was the best way to end my day. And when I used to stay for those extra 10 mins, those were the best moments, watching you sleep like a child. I still crave that every day. I remember how you used to blush when you told me you wanted to sleep on my biceps. That memory was so comforting, and I hope we can find that peace again."
          }
        ].map((p, i) => (
          <ScrollReveal key={i} animation="slide" delay={i * 0.2} duration={0.8}>
          <motion.div
          className="comic-panel bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => setSelectedPanel(p)}
          >
          {/* Speech bubble text */}
          <div className="comic-speech-bubble mb-4">
          <p className="font-acme text-l text-gray-800 text-center">{p.text}</p>
          </div>
          
          {/* Panel image */}
          <img
          src={p.img}
          alt="panel"
          className="rounded-lg mb-4 w-full h-64 object-cover"
          />
          
          {/* Caption */}
          <p className="text-gray-700 font-bree text-center">{p.caption}</p>
          </motion.div>
          </ScrollReveal>
        ))}
        </div>
        {/* Modal Popup (Text Only) */}
        <AnimatePresence>
        {selectedPanel && (
          <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPanel(null)}
          >
          <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          exit={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          >
          {/* Close Button */}
          <button
          onClick={() => setSelectedPanel(null)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1"
          >
          <X className="w-5 h-5" />
          </button>
          
          {/* Modal Text */}
          <p className="text-gray-700 font-montserrat text-center text-base sm:text-lg md:text-lg">
          {selectedPanel?.modalMessage}
          </p>
          </motion.div>
          </motion.div>
        )}
        </AnimatePresence>

        {/* Poem */}
        <ScrollReveal animation="flip" threshold={0.3} duration={1.2}>
          <div className="comic-panel bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />
            <h2 className="text-2xl font-bold text-pink-600 mb-4 font-dmtext text-center">My Heartfelt Apology</h2>
            <div className="bg-pink-50 p-6 rounded-lg border-2 border-dashed border-pink-300">
              <p className="text-gray-700 italic leading-relaxed font-edu text-center text-lg">
                I’m deeply sorry for the way I acted, for the words I chose, the moments I wasn’t there, and the way my behavior made you feel unseen, hurt, or let down.<br />
                Every second of the day I think about you, & I know you also think about me, I really hope you do.<br /><br />
                I promise to mend what I have broken & clean up the mess I made, always ready to grow & change,<br />
                to cherish you in every way,<br />
                Please forgive my mistakes and errors.<br />
                And finally, I want to hug you tightly and say sorry for all the mistakes I’ve made.
              </p>
              <div className="mt-4 flex justify-center">
                <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
                <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
                <Heart className="w-8 h-8 text-orange-500" fill="currentColor" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Extra Panel */}
        <ScrollReveal animation="zoom" duration={0.9} threshold={0.4}>
          <motion.div
            className="comic-panel bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ rotate: 1 }}
          >
            <div className="comic-speech-bubble mb-4">
              <p className="font-changa text-lg text-gray-800 text-center">I still see us this way, together and unbreakable!</p>
            </div>
            <img src={Img3} alt="Apology doodle" className="rounded-lg mb-4 w-full h-64 object-cover" />
            <p className="text-gray-700 text-l font-dancing text-center">Please dont leave, I can live without you .</p>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Letter Modal */}
      {showLetter && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center p-4 z-50" 
          onClick={() => setShowLetter(false)}
        >
          <motion.div
            className="bg-white bg-opacity-95 p-6 max-w-lg w-full relative rounded-lg shadow-xl overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowLetter(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1">
              <X className="w-5 h-5" />
            </button>
            <div className="prose max-w-none">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-pink-500 mr-2" fill="currentColor" />
                <h3 className="text-2xl font-bold text-red-600 font-pacifico m-0">  Dearest Sarkarr  </h3>
                <Heart className="w-8 h-8 text-pink-500 ml-2" fill="currentColor" />
              </div>
              <div className="space-y-3 font-tenor text-gray-700 leading-relaxed">
                <p>I'm SORRY for letting you down...</p>
                <p>I know my words & action have hurt you, & I take full responsibility. I’m truly sorry, & I hate that I made you feel that way.</p>
                <p>Please forgive me for my mistakes. I promise to learn, grow, & never make you feel that way again.</p>
                <p>I’m asking for one last chance to show you that I’ve changed, and to rebuild what we had with love & care, because I know our connection isn't fragile.</p>
                <p className="text-right font-bold mt-4">Thinking about you,<br />Tofu</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Game Modal */}
      {showGame && (
        <HeartCatcherGame 
          onComplete={() => setGameCompleted(true)} 
          onClose={() => setShowGame(false)} 
        />
      )}
    </div>
  );
}

export default App;
