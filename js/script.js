var car={
			maker:"VW",
			type:"Polo",
			color:"Blue",
			seats:["seat1","seat2","seat3","seat4"],
			numOfWheels:4,
			isTurnedOn:false,
			turnOn: function(){
				this.isTurnedOn=true;
			},
			switchOn: function(q){
				if(q=='yes'){
					this.isTurnedOn=true;
				}
				else{
					this.isTurnedOn=false;
				}
			},
			fly: function(){
				alert("Car is flying!!!!");
			}
			};
			console.log('Hello There!');