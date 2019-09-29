import Controller from '@ember/controller';

export default Controller.extend({
  channelNames: [
   {channelName: 'work', type: 'group'},
   {channelName: 'home', type: 'group'},
   {channelName: 'rama', type: 'individual'},
   {channelName: 'hrishi', type: 'individual'},
  ],

  messages: [
   		{text: 'Hi, does anyone  know where is my dog?'},
   		{text: 'I will be there in 10 mins!'} 
  	],

  currentChannel: {
  	description: "Group of 2 members",
    highlights: "1 year since the group was created",
    pinnedItems: [
      "project details",
      "steps to submit review",
    ]
  }
});