import Component from '@ember/component';

export default Component.extend({
  actions: {
    removeComponent2(){
      this.get('onRemove')();
    },
    resetComponent2(){
    this.attrs.onReset();
    }
  }
});
