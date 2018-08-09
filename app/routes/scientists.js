import Route from '@ember/routing/route';

export default Route.extend({
    model() { //return whatever data you want to make available to the template
        return ['Yuri', 'Carlos', 'Pedro'];
    }//the model() supports promises
});
