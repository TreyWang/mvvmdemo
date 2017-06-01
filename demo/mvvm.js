var callback = function(newValue, oldValue){

}

var data = {
	a : 200,
	level1 : {
		b: 'str',
		c: [1,2,3],
		lever2 : {
			d : 90
		}
	}
}

var j = new Jsonob(data, callback);