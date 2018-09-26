// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let cash = currency;
	const sum = {};
	if (cash >= 10000) {
		sum['error'] = "You are rich, my friend! We don't have so much coins for exchange";
	} else{
			if ( parseInt(cash/50) > 0){
			sum['H']=parseInt(cash/50);
		}
		let tempcoin = cash%50;
		if ( parseInt(tempcoin/25) > 0){
			sum['Q']=parseInt(tempcoin/25);
		}
		tempcoin = tempcoin%25
		if ( parseInt(tempcoin/10) > 0){
				sum['D']=parseInt(tempcoin/10);
			}
		tempcoin = tempcoin%10;
		if ( parseInt(tempcoin/5) > 0){
				sum['N']=parseInt(tempcoin/5);
			}
		tempcoin = tempcoin%5;
		if ( parseInt(tempcoin/1) > 0){
				sum['P']=parseInt(tempcoin/1);
		}
	}
	
	return sum ;
}
