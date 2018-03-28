var data = {
	"name":"test",
	"top_arrow":[
		{
			"name":"rules"
		}
	],
	"bottom_arrow":[
		{
			"name":"employee",
		},
		{
			"name":"client",
			
		},

	],
	"left_arrow":[
		{
			"name":"application",
			"properties":[
				{
					"size":30000
				},
				{
					"period":12
				}
			]
		}
	],
	"right_arrow":[
		{
			"name":"credit"
		}
	]	
}

var registrator = new CredRegistration();
registrator.model = data;
	
	console.log(registrator.model)

//проверяем правильно ли работает генератор чисел
describe("Выдача кредита", function() {

  it("Клиент берет в кредит 30000 рублей на 12 месяцев. Ежемесячная плата составит = 2500 рублей", function() {
	
	console.log("1");
	
  	var credSize = registrator.model.left_arrow[0].properties[0].size;
	var credPeriod = registrator.model.left_arrow[0].properties[1].period;
	
	console.log(credSize, credPeriod);
	
	var credPayment = registrator.VidachaCred(credSize,credPeriod)
	
	
	console.log(credPayment);
		
    assert.equal((credPayment == 2500), true);
  });
});

 