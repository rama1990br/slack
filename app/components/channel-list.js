import Component from '@ember/component';

export default Component.extend({
  tagName:'',
  channels: null,
  individuals: null,
  groups: null,

  init(args)  {
  	this._super(args);
  	this.channels = args.channels;
  	this.individuals = this.channels.filter(channel => channel.type == "individual");
  	this.groups = this.channels.filter(channel => channel.type == "group");
  },
});
