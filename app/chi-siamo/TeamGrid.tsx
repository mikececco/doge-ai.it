"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { TeamMember } from "./page";

type TeamGridProps = {
  members: TeamMember[];
};

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div variants={fadeInUp} custom={index}>
      {imgError ? (
        <div className="aspect-square bg-grigio-chiaro rounded-lg" />
      ) : (
        <div className="aspect-square relative rounded-lg overflow-hidden bg-grigio-chiaro">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            onError={() => setImgError(true)}
          />
        </div>
      )}
      <h3 className="text-[22px] font-bold mt-4">{member.name}</h3>
      <p className="text-[15px] text-grigio-medio italic">{member.role}</p>
      <p className="text-[15px]">{member.flags}</p>
      <p className="text-base text-grigio-scuro mt-3">{member.bio}</p>
    </motion.div>
  );
}

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
    >
      {members.map((member, i) => (
        <TeamCard key={member.name} member={member} index={i} />
      ))}
    </motion.div>
  );
}
