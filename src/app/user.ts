import { TechSkill } from './tech-skill'
export class User {
    firstName: string;
    lastName: string;
    shortName: string;
    department: string;
    description: string;
    isMentor: boolean;
    leadershipSkills: string[];
    technicalSkills: TechSkill[];
    contacts: [
        {email: string},
        {phone: string}
    ];
}
