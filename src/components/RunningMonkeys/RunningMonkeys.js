import { motion } from 'framer-motion'

export default function RunningMonkeys() {
    return (
        <>
            <motion.div
            className="running-monkey-1"
            transition={{
            x: {duration: 1, type: 'tween', ease: 'linear', repeat: Infinity, repeatType: 'reverse', delay: 8, repeatDelay: 3 },
            y: {duration: .05, type: 'tween', repeat: Infinity, repeatType: 'reverse'},
            }}
            animate={{
            x: ["100px", "300px","500px", "700px", "900px","1100px", "1300px", "1500px","1700px", "1900px", "2100px", "2300px" ],
            y: ['-100px', '-150px' ],
            }}
            >
            </motion.div>
            <motion.div
            className="running-monkey-2"
            transition={{
            x: {duration: 1.5, type: 'tween', delay: 1, ease: 'linear', repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 },
            y: {duration: .10, type: 'tween', repeat: Infinity, repeatType: 'reverse'},
            }}
            animate={{
            x: ["100px", "300px","500px", "700px", "900px","1100px", "1300px", "1500px","1700px", "1900px", "2100px", "2300px" ],
            y: ['-100px', '-150px' ],
            }}
            >
            </motion.div>
            <motion.div
            className="running-monkey-3"
            transition={{
            x: {duration: 2, type: 'tween', ease: 'linear', repeat: Infinity, repeatType: 'reverse', delay: 5, repeatDelay: 5 },
            y: {duration: .15, type: 'tween', repeat: Infinity, repeatType: 'reverse'},
            }}
            animate={{
            x: ["100px", "300px","500px", "700px", "900px","1100px", "1300px", "1500px","1700px", "1900px", "2100px", "2300px" ],
            y: ['-100px', '-150px' ],
            }}
            >
            </motion.div>
            <motion.div
            className="running-monkey-4"
            transition={{
            x: {duration: 2, type: 'tween', ease: 'linear', repeat: Infinity, repeatType: 'reverse', delay: 6, repeatDelay: 5 },
            y: {duration: .1, type: 'tween', repeat: Infinity, repeatType: 'reverse'},
            }}
            animate={{
            x: ["100px", "400px", "700px", "1000px", "1300px","1600px", "1900px", "2200px","2500px", "2800px", "3100px", "3400px" ],
            y: ['-100px', '-150px' ],
            }}
            >
            </motion.div>
            <motion.div
            className="running-monkey-5"
            transition={{
            x: {duration: 1, type: 'tween', ease: 'linear', repeat: Infinity, repeatType: 'reverse', delay: 2, repeatDelay: 5 },
            y: {duration: .1, type: 'tween', repeat: Infinity, repeatType: 'reverse'},
            }}
            animate={{
            x: ["100px", "400px", "700px", "1000px", "1300px","1600px", "1900px", "2200px","2500px", "2800px", "3100px", "3400px" ],
            y: ['-100px', '-150px' ],
            }}
            >
            </motion.div>
    </>
    )
}