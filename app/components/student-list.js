import Component from '@ember/component';

export default Component.extend({
  actions: {
    removeComponent(){
      this.get('onRemove')();
    },
    resetComponent(){
    this.attrs.onReset();
    }
  }
});
