import Component from '@ember/component';

export default Component.extend({
	tagName:'',
  	messages: null,


  	init(args) {
  		this._super(args);
  		this.messages = args.messages;
  	}
});
