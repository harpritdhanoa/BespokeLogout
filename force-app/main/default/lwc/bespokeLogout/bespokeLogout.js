import { LightningElement,track,api,wire } from 'lwc';

export default class BespokeLogout extends LightningElement {
    timer;
    currSeconds;

    handleChange(event) {
        this.currSeconds = event.target.value;
    }

    connectedCallback() {
        this.timer;
        this.currSeconds = 0;

        var resetTimer = function() {
			clearInterval(this.timer);
			this.currSeconds = 0;
			this.timer = setInterval(startIdleTimer.bind(this), 1000);
		};

		var startIdleTimer = function() {
			this.currSeconds++;
			if(this.currSeconds == 30){
				alert(' Its been 30 seconds of inactivity, you will be logged out');
                window.location.replace("https://hd3jan20-dev-ed.lightning.force.com/servlet/networks/switch?startURL=%2Fsecur%2Flogout.jsp");
            }
		};

        resetTimer;//window.onload = resetTimer;
		window.onmousemove = resetTimer;
		window.onmousedown = resetTimer;
		window.ontouchstart = resetTimer;
		window.onclick = resetTimer;
		window.onkeypress = resetTimer;
    }
}