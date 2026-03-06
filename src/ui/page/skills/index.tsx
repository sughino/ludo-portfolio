import { Card, BlueprintCard, CodeCard, ImgCard } from '../../components/bentoCard';
import { skills } from '@/data/skills';
import { LogoScroller } from '../../components/logoScroller';
import TitleAnimation from '@/ui/components/titleAnimation';


export default function Skills() {
  return (
    <section>
      <div className="h-(--spacing-160)" />
      <TitleAnimation centerTitle={true}>
        <h2 data-animate="title">SkILLS</h2>
      </TitleAnimation>
      <div className="h-(--spacing-80)" />

      <div className='hidden lg:grid grid-rows-[auto_auto_auto] gap-(--spacing-gap-32) h-fit'>
          <div className="grid grid-cols-2 gap-(--spacing-gap-32) h-fit">
            <Card level={skills[0].level} color={skills[0].color} title={skills[0].title} description={skills[0].description}/>
            <Card level={skills[1].level} color={skills[1].color} title={skills[1].title} description={skills[1].description}/>
          </div>
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-(--spacing-gap-32)">
            <BlueprintCard />
            <CodeCard />
            <Card level={skills[2].level} color={skills[2].color} title={skills[2].title} description={skills[2].description}/>
          </div>
          <div className="grid grid-cols-[2fr_1fr] gap-(--spacing-gap-32)">
            <Card level={skills[3].level} color={skills[3].color} title={skills[3].title} description={skills[3].description}/>
            <ImgCard />
          </div>
      </div>
      <div className="grid grid-cols-1 gap-(--spacing-gap-32) h-fit lg:hidden">
        {skills.map((skill, i) => (
          <Card
            key={i}
            level={skill.level}
            color={skill.color}
            title={skill.title}
            description={skill.description}
          />
        ))
        }
      </div>
      
      <div className="h-(--spacing-80)" />
      <LogoScroller />
    </section>
  );
}