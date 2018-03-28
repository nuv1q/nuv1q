var App = function(){
	this.modules = {
		registrator: new CredRegistration()
	}

	this.spec = {
		start:function(){
			mocha.run();
		}
	}
}

var app = new App();