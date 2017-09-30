import Vue from 'vue'

const Notice = Vue.extend(require('./noticeTip.vue'));
let b = function() {

	return new Notice({
		el: document.createElement('div')
	})
}
let removeDom = event => {
  if (event) {
    document.body.removeChild(event);
  }
};
Notice.prototype.close = function() {
	removeDom(this.$el);
}
export default function(options){
	options =options ||{};
	let message,duration,type,color,backgroundColor;
	if(typeof(options) === 'string'){
		message = options;
		duration = 3000
		type = "top"
		color = '#fff'
        backgroundColor = '#FFBB2B'
	}else{
		message = options.message || '这里填写信息'
		duration = options.duration || '3000'
		type = options.type || 'top'		
		color = options.color || '#fff'
        backgroundColor = options.backgroundColor || '#FFBB2B'
	}
	let instance = b()
	instance.closed = false;
  	clearTimeout(instance.timer);
  	instance.message = message;
	instance.type = type;
	instance.duration = duration;
	instance.color = color;
	instance.backgroundColor = backgroundColor;
	instance.tipStyle={color:color,backgroundColor:backgroundColor}

	document.body.appendChild(instance.$el);
	if(type=='top'){

	}else{
		Vue.nextTick(function() {
			instance.$el.removeEventListener('transitionend', removeDom);
			instance.timer = setTimeout(()=> {
				instance.close()
			},duration)
		})
	}
	
}