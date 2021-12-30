import '../styles/style.scss';

import * as React from 'react';

import Layout from '../layout/page-layout';
import { Link } from 'gatsby';

// data
const links = [
    {
        text: 'Blinded',
        url: '',
        badge: false,
        description: [
            'A blinded creature can’t see and automatically fails any ability check that requires sight.',
            'Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.',
        ],
        color: '',
    },
    {
        text: 'Charmed',
        url: '',
        badge: false,
        description: [
            'A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects.',
            'The charmer has advantage on any ability check to interact socially with the creature.',
        ],
        color: '',
    },
    {
        text: 'Deafened',
        url: '',
        badge: false,
        description: [
            'A deafened creature can’t hear and automatically fails any ability check that requires hearing.',
        ],
        color: '',
    },
    {
        text: 'Frightened',
        url: '',
        badge: false,
        description: [
            'A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within Line of Sight.',
            'The creature can’t willingly move closer to the source of its fear.',
        ],
        color: '',
    },
    {
        text: 'Grappled',
        url: '',
        badge: false,
        description: [
            'A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.',
            'The condition ends if the Grappler is incapacitated (see the condition).',
            'The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the Thunderwave spell.',
        ],
        color: '',
    },
    {
        text: 'Incapacitated',
        url: '',
        badge: false,
        description: ['An incapacitated creature can’t take Actions or Reactions.'],
        color: '',
    },
    {
        text: 'Invisible',
        url: '',
        badge: false,
        description: [
            'An invisible creature is impossible to see without the aid of magic or a Special sense. For the Purpose of Hiding, the creature is heavily obscured. The creature’s Location can be detected by any noise it makes or any tracks it leaves.',
            'Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.',
        ],
        color: '',
    },
    {
        text: 'Paralyzed',
        url: '',
        badge: false,
        description: [
            'A paralyzed creature is incapacitated (see the condition) and can’t move or speak.',
            'The creature automatically fails Strength and Dexterity Saving Throws.',
            'Attack rolls against the creature have advantage.',
            'Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.',
        ],
        color: '',
    },
    {
        text: 'Petrified',
        url: '',
        badge: false,
        description: [
            'A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.',
            'The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.',
            'Attack rolls against the creature have advantage.',
            'The creature automatically fails Strength and Dexterity Saving Throws.',
            'The creature has Resistance to all damage.',
            'The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.',
        ],
        color: '',
    },
    {
        text: 'Poisoned',
        url: '',
        badge: false,
        description: ['A poisoned creature has disadvantage on Attack rolls and Ability Checks.'],
        color: '',
    },
    {
        text: 'Prone',
        url: '',
        badge: false,
        description: [
            'A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition.',
            'The creature has disadvantage on Attack rolls.',
            'An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.',
        ],
        color: '',
    },
    {
        text: 'Restrained',
        url: '',
        badge: false,
        description: [
            'A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.',
            'Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.',
            'The creature has disadvantage on Dexterity Saving Throws.',
        ],
        color: '',
    },
    {
        text: 'Stunned',
        url: '',
        badge: false,
        description: [
            'A stunned creature is Incapacitated (see the condition), can’t move, and can speak only falteringly.',
            'The creature automatically fails Strength and Dexterity Saving Throws.',
            'Attack rolls against the creature have advantage.',
        ],
        color: '',
    },
    {
        text: 'Unconcious',
        url: '',
        badge: false,
        description: [
            'An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.',
            'The creature drops whatever it’s holding and falls prone.',
            'The creature automatically fails Strength and Dexterity Saving Throws.',
            'Attack rolls against the creature have advantage.',
            'Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.',
        ],
        color: '',
    },
    {
        text: 'Exhaustion',
        url: '',
        badge: false,
        description: [
            'Some Special Abilities and environmental Hazards, such as starvation and the long-­term Effects of freezing or scorching temperatures, can lead to a Special condition called exhaustion. Exhaustion is measured in six levels. An Effect can give a creature one or more levels of exhaustion, as specified in the effect’s description.',
        ],
        color: '',
    },
];

const ConditionsPage = (): React.ReactElement => {
    return (
        <Layout>
            <title>D&D Conditions</title>
            <h1>Conditions</h1>
            <h2>
                <Link to="/">Home</Link>
            </h2>
            <p className="listItemStyles">These are all the Conditions.</p>

            <ul>
                {links.map(link => (
                    <li key={link.url} className="listItemStyles">
                        <span>
                            <h3 id={link.text}>{link.text}</h3>

                            <ul>
                                {link.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </span>
                    </li>
                ))}
            </ul>

            <img
                alt="Gatsby G Logo"
                src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
        </Layout>
    );
};

export default ConditionsPage;
