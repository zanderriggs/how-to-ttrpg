import { DifficultyCheckTypeGroup, ToolProficiencyCheckTypeGroup } from '../types/dc-types';

// Standard DC data
export const DC_STANDARD: DifficultyCheckTypeGroup = [
    {
        text: 'Very easy',
        dc: '5',
    },
    {
        text: 'Easy',
        dc: '10',
    },
    {
        text: 'Moderate',
        dc: '15',
    },
    {
        text: 'Hard',
        dc: '20',
    },
    {
        text: 'Very hard',
        dc: '25',
    },
    {
        text: 'Nearly impossible',
        dc: '30',
    },
];

// Tracking DC data
export const DC_TRACKING: DifficultyCheckTypeGroup = [
    {
        text: 'Soft surface such as snow',
        dc: '10',
    },
    {
        text: 'Dirt or grass',
        dc: '15',
    },
    {
        text: 'Bare stone',
        dc: '20',
    },
    {
        text: 'Each day since the creature passed',
        dc: '+5',
    },
    {
        text: 'The creature left a trail, such as blood',
        dc: '-5',
    },
];

// Tool Proficiency DC data
export const DC_TOOLS: ToolProficiencyCheckTypeGroup = [
    {
        name: "Alchemist's Supplies",
        dcs: [
            {
                text: 'Create a puff of thick smoke',
                difficulty: '10',
            },
            {
                text: 'Identify a poison',
                difficulty: '10',
            },
            {
                text: 'Identify a substance',
                difficulty: '15',
            },
            {
                text: 'Start a fire',
                difficulty: '15',
            },
            {
                text: 'Neutralize acid',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Brewer's Supplies",
        dcs: [
            {
                text: 'Detect poison or impurities in a drink',
                difficulty: '10',
            },
            {
                text: 'Identify alcohol',
                difficulty: '15',
            },
            {
                text: 'Ignore effects of alcohol',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Caligrapher's Supplies",
        dcs: [
            {
                text: 'Identify writer of nonmagical script',
                difficulty: '10',
            },
            {
                text: "Determine writer's state of mind",
                difficulty: '15',
            },
            {
                text: 'Spot forged text',
                difficulty: '15',
            },
            {
                text: 'Forge a signature',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Carpenters's Tools",
        dcs: [
            {
                text: 'Build a simple wooden structure',
                difficulty: '10',
            },
            {
                text: 'Design a complex wooden structure',
                difficulty: '15',
            },
            {
                text: 'Find a weak point in a wooden wall',
                difficulty: '15',
            },
            {
                text: 'Pry apart a door',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Cartographers's Tools",
        dcs: [
            {
                text: "Determin a map's age and origin",
                difficulty: '10',
            },
            {
                text: 'Estimate direction and distance to a landmark',
                difficulty: '15',
            },
            {
                text: 'Discern that a map is fake',
                difficulty: '15',
            },
            {
                text: 'Fill in a missing part of a map',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Cobbler's Tools",
        dcs: [
            {
                text: "Determine a shoe's age and origin",
                difficulty: '10',
            },
            {
                text: 'Find a hidden compartment in a boot heel',
                difficulty: '15',
            },
        ],
    },
    {
        name: "Cook's Utensils",
        dcs: [
            {
                text: 'Create a typical meal',
                difficulty: '10',
            },
            {
                text: 'Duplicate a meal/recipe ',
                difficulty: '10',
            },
            {
                text: 'Spot poison or impurities in food',
                difficulty: '15',
            },
            {
                text: 'Create a gourmet meal',
                difficulty: '15',
            },
        ],
    },
    {
        name: 'Disguise Kit',
        dcs: [
            {
                text: 'Cover injurues or distinguishing marks',
                difficulty: '10',
            },
            {
                text: 'Spot a diguise being used by someone else',
                difficulty: '15',
            },
            {
                text: "Copy a humanoid's appearance",
                difficulty: '20',
            },
        ],
    },
    {
        name: 'Forgery Kit',
        dcs: [
            {
                text: 'Mimic handwriting',
                difficulty: '15',
            },
            {
                text: 'Duplicate a wax seal',
                difficulty: '20',
            },
        ],
    },
    {
        name: 'Gaming Set',
        dcs: [
            {
                text: 'Catch a player cheating',
                difficulty: '15',
            },
            {
                text: "Gain insight into an opponent' personality",
                difficulty: '15',
            },
        ],
    },
    {
        name: "Glassblower's Tools",
        dcs: [
            {
                text: 'Identify source of glass',
                difficulty: '10',
            },
            {
                text: 'Determine what a glass object once held',
                difficulty: '20',
            },
        ],
    },
    {
        name: 'Herbalism Kit',
        dcs: [
            {
                text: 'Find plants',
                difficulty: '15',
            },
            {
                text: 'Identify  poison',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Jeweler's Tools",
        dcs: [
            {
                text: "Modify a gem's appearance",
                difficulty: '15',
            },
            {
                text: "Determine a gem's history",
                difficulty: '20',
            },
        ],
    },
    {
        name: 'Land and Water Vehicles',
        dcs: [
            {
                text: 'Navigate rough terrain or waters',
                difficulty: '10',
            },
            {
                text: "Assess a vehicle's condition",
                difficulty: '15',
            },
            {
                text: 'Take a tight corner at high speed',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Leatherworker's Tools",
        dcs: [
            {
                text: "Modify a leather item' appearance",
                difficulty: '10',
            },
            {
                text: "Determine a leather item's history",
                difficulty: '20',
            },
        ],
    },
    {
        name: "Mason's Tools",
        dcs: [
            {
                text: 'Chisel a small hole in a stone wall',
                difficulty: '10',
            },
            {
                text: 'Find a weak point in a stone wall',
                difficulty: '15',
            },
        ],
    },
    {
        name: 'Musical Instruments',
        dcs: [
            {
                text: 'Identify a tune',
                difficulty: '10',
            },
            {
                text: 'Improvise a tune',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Navigator's Tools",
        dcs: [
            {
                text: 'Plot a course',
                difficulty: '10',
            },
            {
                text: 'Discover your position on a nautical chart',
                difficulty: '15',
            },
        ],
    },
    {
        name: "Painter's Supplies",
        dcs: [
            {
                text: 'Paint an accurate portrait',
                difficulty: '10',
            },
            {
                text: 'Create a painting with a hidden message',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Poisoner's Kit",
        dcs: [
            {
                text: 'Spot a poisoned object',
                difficulty: '10',
            },
            {
                text: 'Determine the effects of a poison',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Potter's Tools",
        dcs: [
            {
                text: 'Determine what a vessel once held',
                difficulty: '10',
            },
            {
                text: 'Create a serviceable pot',
                difficulty: '15',
            },
            {
                text: 'Find a weak point in a ceramic object',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Smith's Tools",
        dcs: [
            {
                text: 'Sharpen a dull blade',
                difficulty: '10',
            },
            {
                text: 'Repair a suit of armor',
                difficulty: '15',
            },
            {
                text: 'Sunder a nonmagical metal object',
                difficulty: '15',
            },
        ],
    },
    {
        name: "Thieve's Tools",
        dcs: [
            {
                text: 'Pick a lock',
                difficulty: 'Varies',
            },
            {
                text: 'Disable a trap',
                difficulty: 'Varies',
            },
        ],
    },
    {
        name: "Tinker's Tools",
        dcs: [
            {
                text: 'Temporarily repair a disabled device',
                difficulty: '10',
            },
            {
                text: 'Repair an item in half the time',
                difficulty: '15',
            },
            {
                text: 'Improvise a temporary item using scraps',
                difficulty: '20',
            },
        ],
    },
    {
        name: "Weaver's Tools",
        dcs: [
            {
                text: 'Repurpose cloth',
                difficulty: '10',
            },
            {
                text: 'Mend a hole in a piece of cloth',
                difficulty: '10',
            },
            {
                text: 'Tailor an outfit',
                difficulty: '15',
            },
        ],
    },
    {
        name: "Woodworker's Tools",
        dcs: [
            {
                text: 'Craft a small wooden figurine',
                difficulty: '10',
            },
            {
                text: 'Carve an intricate pattern in wood',
                difficulty: '15',
            },
        ],
    },
];
