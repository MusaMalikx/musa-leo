// import { useEffect, useRef, useState } from 'react';
// import { LottiePlayer } from 'lottie-web';
// import Lottie from 'lottie-web';

// export const Loader = () => {
//   const ref = useRef(null);
//   const [lottie, setLottie] = useState(null);

//   //   useEffect(() => {
//   //     // import('lottie-web').then((Lottie) => setLottie(LottiePlayer.default));
//   //     setLottie(Lottie.default);
//   //   }, []);

//   useEffect(() => {
//     if (ref.current) {
//       const animation = Lottie.loadAnimation({
//         container: ref.current,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         // path to your animation file, place it inside public folder
//         path: '/animation.json',
//       });

//       return () => animation.destroy();
//     }
//   }, [lottie]);

//   return <div ref={ref} />;
// };
