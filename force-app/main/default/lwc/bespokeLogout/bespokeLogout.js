import { LightningElement } from 'lwc';

export default class BespokeLogout extends LightningElement {
    greeting = 'World';
    delayInMilliseconds = '10000'; //10 seconds
    changeHandler(event) {
      this.greeting = event.target.value;
    }
    logout(event) {
        window.location.replace("https://hd3jan20-dev-ed.lightning.force.com/servlet/networks/switch?startURL=%2Fsecur%2Flogout.jsp");
    }
    connectedCallback() {
        alert('connectedCallback has been called');
        setTimeout(function() {
            alert('setTimeout has been called');
            window.location.replace("https://hd3jan20-dev-ed.lightning.force.com/servlet/networks/switch?startURL=%2Fsecur%2Flogout.jsp");
        }, 50000);
    }
}