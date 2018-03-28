var CredRegistration = function(){
	this.model_path = './modules/credit_registration/model.json'
	this.model = {};
	this.VidachaCred = (size, period) => {
		var rslt = size/period;
		return rslt;
	}

	this.load_model = () => {
		$.get(this.model_path, (res)=>{
			console.log(res)
			this.model = res;
		})
	}

	this.init = () => {
		this.load_model();
	}
	this.init();
} 