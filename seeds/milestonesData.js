const {Milestone} = require('../models');

const milestoneData = [
    {
        name: '30 days - New to the battle',
        description: 'This milestone is by far the most important, this is your start, your foot through the door, this is you committing to the change you want to make in your life.'
    },
    {
        name: '90 days - Gaining confidence',
        description: "Staying in contact with a local recuperation center, or having people to call when you feel like slipping up is highly advised and can help with being confident in the progress you're making."
    },
    {
        name: 'Half a year - Seeing the advantages',
        description: 'By this point you start to see a change, many begin building a routine in their lives and creating their own ways to help deal with their temptations and remaining calm.'
    },
    {
        name: '2 years - Developing and evolving',
        description: 'Many come to look back on their progress and the struggle that came with reaching this milestone, others continue looking forward and rebuilding connections they may have lost before they began their journey.'
    },
    {
        name: '5 years - A new lifestyle',
        description: 'Sharing your story and helping others along their journey is what helps grow these networks of recuperation and continues to change peoples lives for the better'
    }
];

const seedMilestones = () => Milestone.bulkCreate(milestoneData);

module.exports = seedMilestones;