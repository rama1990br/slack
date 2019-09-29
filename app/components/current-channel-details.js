import Component from '@ember/component';

export default Component.extend({
	tagName:'',
	currentChannel: null,


  	init(args) {
  		this._super(args);
  		this.currentChannel = args.currentChannel;
  	}
});
