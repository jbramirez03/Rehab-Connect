const { Milestone } = require('../models');

const milestoneData = [
  {
    name: '30 Days - New To The Battle',
    description:
      'This milestone is by far the most important, this is your start, your foot through the door, this is you committing to the change you want to make in your life. Even with just 30 days this is a drastic change from the life one leads from being just a functioning client.',
  },
  {
    name: '90 Days - Gaining Confidence',
    description:
      "Staying in contact with a local recuperation center, or having people to call when you feel like slipping up is highly advised and can help with being confident in the progress you're making. Creating activities for yourself when you feel tempted to return to something can help keep you occupied and your mind at ease.",
  },
  {
    name: 'Half A Year - Seeing The Advantages',
    description:
      'By this point you start to see a change, many begin building a routine in their lives and creating their own ways to help deal with their temptations and remaining calm. Staying productive and being social can help with not keeping troubling emotions bubbled up and helps create new connections that can be beneficial for the future.',
  },
  {
    name: '2 Years - Developing And Evolving',
    description:
      'Many come to look back on their progress and the struggle that came with reaching this milestone, others continue looking forward and rebuilding connections they may have lost before they began their journey. Many also look at themselves and see how much their well-being has improved thus giving more reason to stay committed to being sober.',
  },
  {
    name: '5 Years - Reflecting And Contributing',
    description:
      'Sharing your story and helping others along their journey is what helps grow these networks of recuperation and continues to change peoples lives for the better, this also helps you as a person. Sharing your story can help you reflect on your experience and give you a sense of pride with the change you made with your life.',
  },
  {
    name: '10 Years - A New Lifestyle',
    description:
      "With this new life that you have created for yourself, through all the hardhips, the limit to what you want to achieve moving forward depends strictly on you, you have made it this far and have show to not only your friends and family but most importantly yourself that having a goal and staying dedicated can make all the difference to changing one's life around.",
  },
];

const seedMilestones = () => Milestone.bulkCreate(milestoneData);

module.exports = seedMilestones;
