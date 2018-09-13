import * as buffs from './category/buffs';

import { CUSTOM_STRING } from "./category/generics";
import {ATK_DOWN_ELE, DEF_DOWN_ELE, BLIND} from "./category/debuff";
import {NUKE_ROMEO, OUGI_ECHO} from "./category/nukes";

import { round } from 'lodash';

export default [
    {
        name: 'Blank',
        picture: '/img/blankSSR.jpg',
        description: 'Empty Slot',
        spec: [],
        strengths: [],
        nukes:[],
        team_buffs: [],
        debuffs: [],
        weaknesses: []
    },
    {
        name: 'Izmir',
        picture: '/img/water/izmir.jpg',
        description: 'Draph Attacker-Buffer, that can do some serious Ougi damage given the opportunity. Shines when granted MA, such as from an Atma Sword.',
        spec: ['sword'],
        strengths: [ new buffs.SERAPH(),
            new buffs.ATTACK_UP_STK_UNIQUE(0.4),
            new buffs.OUGI_SPEC_UP(1.5, 1)],
        nukes:[],
        team_buffs: [new buffs.CRITICAL(0.5, 0.5, 0.6)],
        debuffs: [],
        weaknesses: [
            new CUSTOM_STRING('Difficult to utilize her Icy Blade stacks fully.', -3)
        ]
    },
    {
        name: 'Yuel (Wet)',
        picture: '/img/water/yuel.jpg',
        description: 'Foxy Erune that utilizes flames but is somehow in water. Selling point is the MA Team buff, which Water sorely needs.',
        spec: ['sword', 'katana'],
        strengths: [],
        nukes:[],
        team_buffs: [
            new buffs.MULTIATTACK(0.3, 0.15, 0.5),
            new buffs.DEBUFF_SUCCESS(0.2, 0.5),
            new buffs.ECHO(0.1, round(6/7, 2))
        ],
        debuffs:[
            new ATK_DOWN_ELE(0.1),
            new DEF_DOWN_ELE(0.25),
            new BLIND(0.25, round(6/7, 2))
        ],
        weaknesses: []
    },
    {
        name: 'Romeo',
        picture: '/img/water/romeo.jpg',
        description: 'Former lord turned Batman, he hits hard with stacks and is relatively bursty with his triple nuke while being able to protect the team. Not ideal for long fights, however.',
        spec: ['sword'],
        strengths:[
                new OUGI_ECHO(635000),
                new NUKE_ROMEO(630000, 6),
                new buffs.ATTACK_UP_UNIQUE(0.3, 1, 'romeo'),
                new CUSTOM_STRING('Able to tank multihit Ougis with Substitute and 80% Cut, 6T CD.', 5)
        ],
        nukes:[],
        team_buffs: [
            new buffs.ELE_CUT(0.8, 6)
        ],
        debuffs: [
            new DEF_DOWN_ELE(0.2)
        ],
        weaknesses: [
            new CUSTOM_STRING('Requires stack micromanagement. Hit to ATK when out of stacks.', -2)
        ]
    }
];