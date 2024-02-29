"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
    SiGit,
    SiJavascript,
    SiNextdotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";

const Skills = () => {
    const skills = [
        {
            text: "React",
            Icon: SiReact
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss
        },
        {
            text: "Supabase",
            Icon: SiSupabase
        },
        {
            text: "Postgress",
            Icon: SiPostgresql
        },
        {
            text: "Git",
            Icon: SiGit
        },
        {
            text: "Python",
            Icon: SiPython
        },
        {
            text: "Javascript",
            Icon: SiJavascript
        },
        {
            text: "Typescript",
            Icon: SiTypescript
        }
    ];
    return (
        <div className="max-w-5xl mx-auto px-8">
            <Title
                text="Skills 📬"
                className="flex flex-col justify-center items-center -rotate-[5deg]"
            />
            <HoverEffect items={skills} />
        </div>
    );
};

export default Skills;
