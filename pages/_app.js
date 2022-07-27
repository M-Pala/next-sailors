import Layout from '../components/Layout'
import '../styles/globals.css'
import {AnimatePresence, motion} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return(
    <Layout>
    <AnimatePresence>
      <motion.div key={router.route} exit='pageExit' initial='pageInitial' animate='pageAnimate' variants={{
        pageInitial:{
          scale: 0.5,
          // opacity: 0,
        },
        pageAnimate:{
          scale: 1,
          // opacity: 1,
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
