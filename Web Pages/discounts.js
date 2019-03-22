function calculateSave() {
	for(var i = 1; i < 7; i++) {
		var priceWas = document.getElementById("price_before_"+i).innerHTML; 
		var priceNow = document.getElementById("price_now_"+i).innerHTML;
		priceSave = priceWas - priceNow;
		
		document.getElementById("price_save_"+i).innerHTML = priceSave;
	}
	
}