import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    removeController1(){
      this.send('removeRoute0');
    },
    resetController1(){
      this.send('resetRoute0');
    }
  }
});
