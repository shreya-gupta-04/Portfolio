// "use client";
// import { cn } from "@/app/lib/utils";
// import { IconMenu2, IconX } from "@tabler/icons-react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "motion/react";

// import React, { useRef, useState } from "react";
// // import y from '../../../images/yy.png'
// import Image from "next/image";
// import { Airplay, Code, House, Mail, User, Users } from "@deemlol/next-icons";


// interface NavbarProps {
//   children: React.ReactNode;
//   className?: string;
// }

// interface NavBodyProps {
//   children: React.ReactNode;
//   className?: string;
//   visible?: boolean;
// }

// interface NavItemsProps {
//   items: {
//     name: string;
//     link: string;
//   }[];
//   className?: string;
//   onItemClick?: () => void;
// }

// interface MobileNavProps {
//   children: React.ReactNode;
//   className?: string;
//   visible?: boolean;
// }

// interface MobileNavHeaderProps {
//   children: React.ReactNode;
//   className?: string;
// }

// interface MobileNavMenuProps {
//   children: React.ReactNode;
//   className?: string;
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const Navbar = ({ children, className }: NavbarProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const [visible, setVisible] = useState<boolean>(false);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     if (latest > 100) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   });

//   return (
//     <motion.div
//       ref={ref}
//       // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
//       className={cn("fixed inset-x-0 top-0 z-50 ", className)}
//     >
//       {React.Children.map(children, (child) =>
//         React.isValidElement(child)
//           ? React.cloneElement(
//               child as React.ReactElement<{ visible?: boolean }>,
//               { visible },
//             )
//           : child,
//       )}
//     </motion.div>
//   );
// };
// // export const Navbar = ({ children, className }: NavbarProps) => {
// //   return (
// //     <div
// //       className={cn(
// //         "fixed top-0 inset-x-0 z-50 w-full bg-purple-500 bg-opacity-10 backdrop-blur-md border border-gray-100",
// //         className
// //       )}
// //     >
// //       {children}
// //     </div>
// //   );
// // };
// export const NavBody = ({ children, className, visible }: NavBodyProps) => {
//   return (
//     <motion.div
//       animate={{
//         backdropFilter: visible ? "blur(10px)" : "none",
//         boxShadow: visible
//           ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
//           : "none",
//         y: visible ? 8 : 0,
//       }}
//       transition={{ type: "spring", stiffness: 600, damping: 40 }}
//       className={cn(
//         "hidden lg:flex relative z-[60] mx-auto w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-6 py-3 transition-all duration-300",
//         visible
//           ? "bg-[#0e0e0e]/70 shadow-xl backdrop-blur-md"
//           : "bg-transparent",
//         className
//       )}
//     >
//       {children}
//     </motion.div>
//   );
// };


// // import { User, Code, Airplay, Mail } from "lucide-react";

// export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
//   const [hovered, setHovered] = useState<number | null>(null);

//   const getIcon = (name: string) => {
//     switch (name) {
//       case "Home":
//         return <House size={18} color="#A855F7" />;
//       case "About":
//         return <Users size={18} color="#A855F7" />;
//       case "Skills":
//         return <Code size={18} color="#A855F7" />;
//       case "Projects":
//         return <Airplay size={18} color="#A855F7" />;
//       case "Contact":
//         return <Mail size={18} color="#A855F7" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <motion.div
//       onMouseLeave={() => setHovered(null)}
//       className={cn(
//         "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
//         className
//       )}
//     >
//       {items.map((item, idx) => (
//         <a
//           onMouseEnter={() => setHovered(idx)}
//           onClick={onItemClick}
//           className="relative px-4 py-2 flex items-center gap-2 transition-colors duration-200 text-white hover:text-white"
//           key={`link-${idx}`}
//           href={item.link}
//         >
//           {hovered === idx && (
//             <motion.div
//               layoutId="hovered"
//               className="absolute inset-0 h-full w-full rounded-full bg-neutral-800"
//             />
//           )}
//           <span className="relative z-20 flex items-center gap-1">
//             {hovered === idx && getIcon(item.name)}
//             {item.name}
//           </span>
//         </a>
//       ))}
//     </motion.div>
//   );
// };


// export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
//   return (
//     <motion.div
//       animate={{
//         backdropFilter: visible ? "blur(10px)" : "none",
//         y: visible ? 8 : 0,
//       }}
//       transition={{ type: "spring", stiffness: 200, damping: 50 }}
//       className={cn(
//         "lg:hidden flex w-full max-w-screen px-4 py-2 z-50 fixed top-0 left-0 right-0 justify-end",
//         visible && "bg-black/60 backdrop-blur-md",
//         className
//       )}
//     >
//       {children}
//     </motion.div>
//   );
// };


// export const MobileNavHeader = ({
//   children,
//   className,
// }: MobileNavHeaderProps) => {
//   return (
//     <div
//       className={cn(
//         "flex w-full flex-row items-center justify-between px-4",
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const MobileNavMenu = ({
//   children,
//   className,
//   isOpen,
//   onClose,
// }: MobileNavMenuProps) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className={cn(
//             "absolute inset-x-0 top-16 z-50 flex w-[20%] max-w-[80vw] flex-col items-start justify-start gap-4 rounded-lg bg-neutral-950 px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
//             className,
//           )}
//         >
//           {children}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export const MobileNavToggle = ({
//   isOpen,
//   onClick,
// }: {
//   isOpen: boolean;
//   onClick: () => void;
// }) => {
//   return isOpen ? (
//     <IconX className="text-white" onClick={onClick} />
//   ) : (
//     <IconMenu2 className="text-white" onClick={onClick} />
//   );
// };

// export const NavbarLogo = () => {
//   return (
//     <a
//       href="#"
//       className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
//     >
//       {/* <img
//         src={y}
//         alt="logo"
//         width={30}
//         height={30}
//       /> */}
//       {/* <Image src={y} alt="logo" width={30} height={30}/> */}
//       <span className="font-medium text-white">Shreya04</span>
//     </a>
//   );
// };

// export const NavbarButton = ({
//   href,
//   as: Tag = "a",
//   children,
//   className,
//   variant = "primary",
//   ...props
// }: {
//   href?: string;
//   as?: React.ElementType;
//   children: React.ReactNode;
//   className?: string;
//   variant?: "primary" | "secondary" | "dark" | "gradient";
// } & (
//   | React.ComponentPropsWithoutRef<"a">
//   | React.ComponentPropsWithoutRef<"button">
// )) => {
//   const baseStyles =
//     "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

//   const variantStyles = {
//     primary:
//       "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
//     secondary: "bg-transparent shadow-none dark:text-white",
//     dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
//     gradient:
//       "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
//   };

//   return (
//     <Tag
//       href={href || undefined}
//       className={cn(baseStyles, variantStyles[variant], className)}
//       {...props}
//     >
//       {children}
//     </Tag>
//   );
// };

"use client";
import { cn } from "@/app/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";
// import y from '../../../images/yy.png'
import Image from "next/image";
import { Airplay, Code, House, Mail, User, Users } from "@deemlol/next-icons";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of fixed if you want the navbar to be fixed
      className={cn("fixed inset-x-0 top-0 z-50 ", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};
export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
  animate={{
    backdropFilter: visible ? "blur(10px)" : "none",
    boxShadow: visible
      ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
      : "none",
    width: visible ? "40%" : "100%",
    y: visible ? 20 : 0,
  }}
  transition={{
    type: "spring",
    stiffness: 800,
    damping: 50,
  }}
  style={{
    minWidth: "400px",
  }}
  className={cn(
    "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex transition-all duration-300 ",
    visible
      ? "bg-white/20 backdrop-blur-md shadow-md dark:bg-neutral-900/20"
      : "bg-transparent backdrop-blur-0",
    className
  )}
>

      {children}
    </motion.div>
  );
};

// import { User, Code, Airplay, Mail } from "lucide-react";

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "Home":
        return <House size={18} color="#A855F7" />;
      case "About":
        return <Users size={18} color="#A855F7" />;
      case "Skills":
        return <Code size={18} color="#A855F7" />;
      case "Projects":
        return <Airplay size={18} color="#A855F7" />;
      case "Contact":
        return <Mail size={18} color="#A855F7" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
     className={cn(
  "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
  className
)}

    >
      {items.map((item, idx) => (
  <a
    onMouseEnter={() => setHovered(idx)}
    onClick={onItemClick}
    className="relative px-4 py-2 flex items-center gap-2 transition-colors duration-200 text-white hover:text-white"
    key={`link-${idx}`}
    href={item.link}
  >
    {hovered === idx && (
      <motion.div
        layoutId="hovered"
        className="absolute inset-0 h-full w-full rounded-full bg-neutral-800"
      />
    )}
    <span className="relative z-20 flex items-center gap-1">
      {hovered === idx && getIcon(item.name)}
      {item.name}
    </span>
  </a>
))}

    </motion.div>
  );
};


export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "lg:hidden flex w-full max-w-screen px-4 py-2 z-50 fixed top-0 left-0 right-0 justify-end",
         visible && "bg-black/60 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
         "absolute inset-x-0 top-16 z-50 flex w-[20%] max-w-[80vw] flex-col items-start justify-start gap-4 rounded-lg bg-neutral-950 px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
        className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      {/* <img
        src={y}
        alt="logo"
        width={30}
        height={30}
      /> */}
      {/* <Image src={y} alt="logo" width={30} height={30}/> */}
      <span className="font-bold text-white">Shreya04</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};