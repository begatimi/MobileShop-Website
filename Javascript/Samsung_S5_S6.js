function Savings() {
	for(var i = 1; i <=3; i++) {
		var pricebefore = document.getElementById("pricebefore"+i).innerHTML; 
		var pricenow = document.getElementById("pricenow"+i).innerHTML;
		moneysave = +pricebefore - +pricenow;
		
		document.getElementById("moneysave"+i).innerHTML = moneysave;
	}
	
}