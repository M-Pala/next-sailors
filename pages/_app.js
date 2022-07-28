import Layout from '../components/Layout'
import '../styles/globals.css'
import {AnimatePresence, motion} from 'framer-motion'
import { fixTimeoutTransition } from '../utils/fixTimeoutTransitions'

function MyApp({ Component, pageProps, router }) {
  fixTimeoutTransition(1000)
  return(
    <Layout>
    <AnimatePresence exitBeforeEnter>
      <motion.div key={router.route} exit='pageExit' initial='pageInitial' animate='pageAnimate' variants={{
        pageInitial:{
          scale: 0.8,
          opacity: 0,
        },
        pageAnimate:{
          scale: 1,
          opacity: 1,
          transition: {
            duration: .5
          }
        },
        pageExit:{
          // filter: `contrast(.5)`,
          opacity: 0,
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
    </Layout>
  ) 
}

export default MyApp
