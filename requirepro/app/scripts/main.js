require.config({
	paths:{
		common:'common'
	}
});
require(['common'],function(common){
	var test = common.checkIsPC();
	console.log(test);
})