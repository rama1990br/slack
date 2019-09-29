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
  },

  actions: {
    changeChannel(channelName) {
      this.updateMessageList(channelName);
    },

    showProfile(name) {
      this.set('currentChannel', null);
    }
  },

  updateMessageList(channelName) {
    // do an ajax call and update messages
    if (channelName === "home") {
      this.set('messages', [
        {text: 'Happy birthday Shivanji!'},
        {text: 'Thanks Rama!!'}
      ]);
      this.set('currentChannel.description', 'home group');
    } else {
      this.set('messages', [
        {text: 'Hey does anyone know how this works?'},
        {text: 'I had the same issue last week!'}
      ]);
      this.set('currentChannel.description', 'work group');
    }
  }
});
