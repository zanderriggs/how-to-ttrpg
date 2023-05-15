import { EpicSpellSeedType } from '../types/epic-spell-types';

export const SPELL_SEEDS: EpicSpellSeedType = [
  // {
  //     name: 'afflict',
  //     dc: 14,
  //     components: ['m', 'v', 's', 'df'], -- material, verbal, somatic, divine focus
  //     casting: 6, // time measured in seconds
  //     range: '300 feet', -- measurement in feet
  //     target: 'one living creature',
  //     duration: 1200, // -- converted to seconds from whatever is in the original seed
  //     saving: 'will', -- saving throw- will need to convert when applying this for 5e; uses 'will' instead of wisdom
  //     spellresist: 'yes',
  // },
  {
    id: '1',
    name: 'afflict',
    dc: 14,
    components: ['v', 's'],
    casting: 6, // seconds aka 1 standard action
    range: '300 feet',
    target: 'one living creature',
    duration: 1200, // seconds again...
    saving: 'will',
    spellresist: 'yes',
  },
  {
    id: '2',
    name: 'afflict',
    dc: 14,
    components: ['v', 's'],
    casting: 6, // seconds aka 1 standard action
    range: '300 feet', // feet
    target: 'one living creature',
    duration: 1200, // seconds again...
    saving: 'will',
    spellresist: 'yes',
  },
  {
    id: '3',
    name: 'animate',
    dc: 25,
    components: ['v', 's'],
    casting: 60,
    range: '300 feet',
    target: 'Object or 20 cu. ft. of matter',
    duration: 120, // seconds again... aka 20 rounds
    saving: 'none',
    spellresist: 'no',
  },
  {
    id: '4',
    name: 'animatedead',
    dc: 23,
    components: ['v', 's'],
    casting: 60,
    range: 'touch',
    target: '	One or more corpses touched',
    duration: 0,
    saving: 'none',
    spellresist: 'no',
  },
  {
    id: '5',
    name: 'armor',
    dc: 14,
    components: ['v', 's'],
    casting: 60,
    range: 'touch',
    target: 'Creature touched',
    duration: 86400,
    saving: 'will',
    spellresist: 'yes',
  },
  {
    id: '6',
    name: 'banish',
    dc: 27,
    components: ['v', 's'],
    casting: 60,
    range: '75 feet',
    target: 'One or more extraplanar creatures, no two of which can be more than 30 ft. apart',
    duration: 0,
    saving: 'will',
    spellresist: 'yes',
  },
  {
    id: '7',
    name: 'compel',
    dc: 19,
    components: ['v', 'm'],
    casting: 60,
    range: '75 feet',
    target: 'One living creature',
    duration: 72000,
    saving: 'will',
    spellresist: 'yes',
  },
  {
    id: '8',
    name: 'conceal',
    dc: 17,
    components: ['v', 'm'],
    casting: 60,
    range: 'touch',
    target: 'You or a creature or object of up to 2,000 lb.',
    duration: 12000,
    saving: 'none',
    spellresist: 'no',
  },
  {
    id: '9',
    name: 'conjure',
    dc: 21,
    components: ['v', 's'],
    casting: 60,
    range: 'touch',
    effect: 'Unattended, nonmagical object of nonliving matter up to 20 cu. ft.',
    duration: 28800,
    saving: 'none',
    spellresist: 'no',
  },
  {
    id: '10',
    name: 'contact',
    dc: 23,
    components: ['v', 's'],
    casting: 60,
    range: 'touch',
    target: 'One creature',
    duration: 12000,
    saving: 'none',
    spellresist: 'no',
  },
  {
    id: '11',
    name: 'delude',
    dc: 14,
    components: ['v', 's'],
    casting: 60,
    range: '12000 feet',
    effect: 'Visual figment that can extend for up to twenty 30-ft. cubes (S)',
    duration: 72000,
    saving: 'will',
    spellresist: 'no',
  },
  {
    id: '12',
    name: 'destroy',
    dc: 29,
    components: ['v', 's'],
    casting: 60,
    range: '12000 feet',
    target: 'One creature, or up to a 10-foot cube of nonliving matter',
    duration: 0,
    saving: 'fort half',
    spellresist: 'yes',
  },
  {
    id: '13',
    name: 'dispel',
    dc: 19,
    components: ['v', 's'],
    casting: 60,
    range: '300 feet',
    target: 'One creature, object, or spell',
    duration: 0,
    saving: 'none',
    spellresist: 'no',
  },
  {
    id: '14',
    name: 'energy',
    dc: 0, // originally 19, but with the logic, it makes sense to set this to zero as an energy type will add 19
    components: ['v', 's'],
    casting: 60,
    range: '300 feet',
    area: 'A bolt 5 ft. wide to 300 ft. long; or a 10-ft.-radius emanation; or a wall whose area is up to one 200-ft. square; or a sphere or hemi-sphere with a radius of up to 20 ft.',
    duration: 72000,
    saving: 'ref half',
    spellresist: 'yes',
  },
  {
    id: '15',
    name: 'foresee',
    dc: 17,
    components: ['v', 's'],
    casting: 60,
    range: 'self',
    target: 'you',
    duration: 0,
  },
  {
    id: '16',
    name: 'fortify',
    dc: 17,
    components: ['v', 's'],
    casting: 60,
    range: 'touch',
    target: 'Creature touched',
    duration: 72000,
    saving: 'will',
    spellresist: 'yes',
  },
  {
    id: '17',
    name: 'heal',
    dc: 25,
    components: ['v', 's', 'df'],
    casting: 60,
    range: 'touch',
    target: 'Creature touched',
    duration: 0,
    saving: 'yes',
    spellresist: 'yes',
  },
  {
    id: '18',
    name: 'life',
    dc: 27,
    components: ['v', 's', 'df'],
    casting: 60,
    range: 'touch',
    target: 'Creature touched',
    duration: 0,
    saving: 'none',
    spellresist: 'yes',
  },
  {
    id: '19',
    name: 'reflect',
    dc: 27,
    components: ['v', 's'],
    casting: 60,
    range: 'self',
    target: 'you',
    duration: 43200,
  },
  {
    id: '20',
    name: 'reveal',
    dc: 19,
    components: ['v', 's'],
    casting: 60,
    range: 'n/a',
    effect: 'Magical Sensor',
    duration: 1200,
    saving: 'none',
    spellresist: 'no',
  },
  {
    id: '21',
    name: 'slay',
    dc: 25,
    components: ['v', 's'],
    casting: 60,
    range: '300 feet',
    target: 'One living creature',
    duration: 0,
    saving: 'fort half',
    spellresist: 'yes',
  },
  {
    id: '22',
    name: 'summon',
    dc: 14,
    components: ['v', 's'],
    casting: 60,
    range: '75 feet',
    target: 'One summoned creature',
    duration: 120,
    saving: 'will',
    spellresist: 'yes',
  },
  {
    id: '23',
    name: 'transform',
    dc: 21,
    components: ['v', 's'],
    casting: 60,
    range: '300 feet',
    target: 'One creature or inanimate, nonmagical object',
    saving: 'fort',
    spellresist: 'yes',
  },
  {
    id: '24',
    name: 'transport',
    dc: 27,
    components: ['v', 's'],
    casting: 60,
    range: 'touch',
    target: 'You and touched objects or other touched willing creatures weighing up to 1,000 lb.',
    duration: 0,
    saving: 'none',
    spellresist: 'no',
  },
  {
    id: '25',
    name: 'ward',
    dc: 14,
    components: ['v', 's'],
    casting: 60,
    range: 'touch',
    target: 'Touched creature or object of 2,000 lb. or less; or 10-ft.-radius spherical emanation, centered on you',
    duration: 86400,
    saving: 'none',
    spellresist: 'yes',
  },
];
