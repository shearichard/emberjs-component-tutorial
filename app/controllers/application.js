import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    removeController(){
      this.send('removeRoute0');
    },
    resetController(){
      this.send('resetRoute0');
    }
  }
});
