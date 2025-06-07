// import React, { useRef, MouseEvent } from "react";

// interface GlowingCardProps {
//   number: string;
//   description: string;
// }

// const GlowingCard: React.FC<GlowingCardProps> = ({ number, description }) => {
//   const cardRef = useRef<HTMLDivElement | null>(null);

//   const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
//     const card = cardRef.current;
//     if (!card) return;

//     const rect = card.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left - rect.width / 2;
//     const mouseY = e.clientY - rect.top - rect.height / 2;

//     let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
//     angle = (angle + 360) % 360;

//     card.style.setProperty("--start", `${angle + 60}`);
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       className="group relative m-4 flex h-[350px] w-[280px] flex-col items-start justify-center rounded-[14px] bg-[#040404] p-10 transition duration-300"
//     >
//       {/* Glow Layer */}
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[14px] border-2 border-transparent opacity-0 transition duration-500 group-hover:opacity-60">
//         <div className="glow-effect absolute left-1/2 top-1/2 h-[98%] w-[98%] -translate-x-1/2 -translate-y-1/2 rounded-[14px] border-[15px] border-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
//       </div>

//       <h1 className="text-[65px] font-semibold text-[#474747]">{number}</h1>
//       <p className="text-[20px] font-semibold text-[#aeaeae]">{description}</p>
//     </div>
//   );
// };

// export default GlowingCard;





// import React, { useEffect, useRef } from "react";

// // Mock HeadingSection component
// const HeadingSection = ({ mainHeading, subContent, mainClassName, subClassName }) => (
//   <div className={`mb-12 ${mainClassName}`}>
//     <h2 className="text-4xl font-bold text-white mb-4">{mainHeading}</h2>
//     <p className={`text-white/70 max-w-4xl mx-auto ${subClassName}`}>{subContent}</p>
//   </div>
// );

// export default function WhatWeOffer() {
//   const offerCards = [
//     {
//       id: 1,
//       title: "Custom Website Development",
//       content:
//         "Tailor-made, responsive, and lightning-fast websites built with the latest tech stack.",
//       icon: "🌐",
//     },
//     {
//       id: 2,
//       title: "AI Integration & Chatbots",
//       content: "Visual insights into your site's performance.",
//       icon: "🤖",
//     },
//     {
//       id: 3,
//       title: "Mobile App Development",
//       content: "Automatic suggestions and the best keywords to target.",
//       icon: "📱",
//     },
//     {
//       id: 4,
//       title: "CRM",
//       content:
//         "Salesforce, HubSpot, Zoho CRM tailored to enhance customer satisfaction, raising scores by 25%.",
//       icon: "👥",
//     },
//     {
//       id: 5,
//       title: "3D Websites",
//       content:
//         "3D websites capture attention and create memorable brand stories through immersive visuals and interaction.",
//       icon: "🎨",
//     },
//     {
//       id: 6,
//       title: "WMS & ERP Systems",
//       content:
//         "Seamless warehouse management system integration reduces inventory costs by 15%.",
//       icon: "📊",
//     },
//   ];
  
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const cards = cardRefs.current;

//     cards.forEach((card, index) => {
//       if (!card) return;

//       const handleMouseMove = (e: MouseEvent) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left - rect.width / 2;
//         const y = e.clientY - rect.top - rect.height / 2;

//         let angle = Math.atan2(y, x) * (180 / Math.PI);
//         angle = (angle + 360) % 360;

//         card.style.setProperty("--start", `${angle + 60}`);
//       };

//       card.addEventListener("mousemove", handleMouseMove);

//       return () => {
//         card.removeEventListener("mousemove", handleMouseMove);
//       };
//     });
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         .glow-effect {
//           background: conic-gradient(
//             from 90deg at 50% 50%,
//             rgb(251, 55, 60),
//             rgba(252, 114, 28, 1),
//             rgba(255, 220, 0, 1),
//             rgba(27, 206, 255, 1),
//             rgba(42, 107, 255, 1),
//             rgba(217, 41, 255, 1),
//             rgba(255, 10, 92, 1)
//           );
//           mask-image:
//             linear-gradient(#0000, #0000),
//             conic-gradient(
//               from calc((var(--start, 0) - (20 * 1.1)) * 1deg),
//               #ffffff1f 0deg,
//               white,
//               #ffffff00 100deg
//             );
//           -webkit-mask-composite: intersect;
//           mask-composite: intersect;
//           mask-clip: padding-box, border-box;
//         }
        
//         @keyframes circle-move {
//           0%, 100% { transform: translate(0, 0); }
//           25% { transform: translate(20px, -20px); }
//           50% { transform: translate(-15px, -30px); }
//           75% { transform: translate(-25px, 15px); }
//         }
        
//         .animate-circle-move {
//           animation: circle-move 8s ease-in-out infinite;
//         }
        
//         .animation-delay-1 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-2 {
//           animation-delay: 4s;
//         }
//       `}</style>
      
//       <div className="relative max-w-full overflow-x-hidden" 
//            style={{
//              background: 'linear-gradient(107deg, #190D2E 0.54%, #020103 99.46%)',
//              padding: '63px 20px'
//            }}>
//         <HeadingSection
//           mainHeading="What We Offer"
//           subContent="Avidion Softwares is a forward-thinking tech company specializing in custom software development, AI integration, cloud migration, and workflow automation. We deliver scalable digital solutions that drive growth for businesses of all sizes."
//           mainClassName="text-center"
//           subClassName="text-center"
//         />
        
//         <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-x-8 md:gap-y-14 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-12 max-w-6xl mx-auto">
//           {offerCards.map((card, index) => {
//             return (
//               <div key={card.id} className="group relative overflow-hidden">
//                 <div
//                   ref={(el) => {
//                     cardRefs.current[index] = el;
//                   }}
//                   style={{ borderImage: "none" }}
//                   className="relative rounded-[10px] border border-white/15 bg-black/10 px-7 pb-5 pt-8 font-inter text-white transition-all duration-300"
//                 >
//                   {/* Glow Layer */}
//                   <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[14px] border-2 border-transparent opacity-0 transition duration-500 group-hover:opacity-60">
//                     <div className="glow-effect absolute left-1/2 top-1/2 z-0 h-[98%] w-[98%] -translate-x-1/2 -translate-y-1/2 rounded-[14px] border-[15px] border-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
//                   </div>

//                   <div className="relative z-10 flex flex-col gap-2">
//                     <div className="px-1 py-0.5">
//                       <div className="relative w-8 h-8 text-2xl">
//                         {card.icon}
//                       </div>
//                     </div>
//                     <div className="flex flex-col gap-5">
//                       <div className="flex flex-col justify-start gap-1.5">
//                         <div className="text-base font-medium leading-8">
//                           {card.title}
//                         </div>
//                         <div className="h-20 text-sm font-normal leading-7 text-white/70 md:text-base xl:h-26">
//                           {card.content}
//                         </div>
//                       </div>
//                       {/* know more button */}
//                       <button className="w-full rounded-[10px] border border-white/15 bg-white/10 px-4 py-1.5 text-center text-sm font-normal backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
//                         Know More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
        
//         {/* Background animated circles */}
//         <div className="absolute -left-28 -top-12 h-[250px] w-[250px] animate-circle-move rounded-full bg-[#971b76] opacity-70 blur-[80px]"></div>
//         <div className="animation-delay-1 absolute -right-24 bottom-52 w-[309px] h-[309px] animate-circle-move rounded-full bg-[#971b76] opacity-70 mix-blend-screen blur-[100px]"></div>
//         <div className="animation-delay-2 absolute -right-12 bottom-8 w-[213px] h-[213px] animate-circle-move rounded-full bg-[#622A9A] opacity-70 mix-blend-screen blur-[100px]"></div>
//       </div>
//     </>
//   );
// }



// {/* <div
//                       ref={(el) => {
//                         glowRefs.current[index] = el;
//                       }}
//                       className="pointer-events-none absolute h-[200px] w-[200px] rounded-full bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] opacity-0 blur-2xl transition-opacity duration-200"
//                     /> */}