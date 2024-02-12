import React from 'react';
import SkillsLevel from "./SkillsLevel"

const Skills = () => {
  return (
    <div className="h-full  page-shadow bg white px-10">
        <div>
        {/* heading */}
        <div>
            <div className="relative">
                <div className="text-center text-6xl xl:text-8xl font-bold text-black/5">SKILLS</div>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">Skills</h1>
            </div>
        </div>

        {/* skills section */}
        <div className="space-y-4">
            <SkillsLevel skillName="Web Development" percentage={"90%"} />
            <SkillsLevel skillName="React.js" percentage={"90%"} />
            <SkillsLevel skillName="Decentralized Applications (DApps)" percentage={"70%"} />
            <SkillsLevel skillName="Node.js" percentage={"90%"} />
            <SkillsLevel skillName="Javascript" percentage={"90%"} />
            <SkillsLevel skillName="Python" percentage={"70%"} />
            <SkillsLevel skillName="MySQL, PostgreSQL" percentage={"60%"} />
            <SkillsLevel skillName="Github" percentage={"60%"} />

        </div>

        </div>
    </div>
  )
}

export default Skills