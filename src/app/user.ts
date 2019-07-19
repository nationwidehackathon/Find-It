export class User {
    firstName: string,
    lastName: string,
    shortName: string,
    department: string,
    description: string,
    isMentor: true,
    leadershipSkills: string[],
    technicalSkills: [
        {skillName: string, level: int},
        {skillName: string, level: int}
    ],
    contacts: [
        {email: string},
        {phone: string}
    ],
}
