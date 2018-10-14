const CreateCars = function(){

	// 車的資料
	const cars = [];
	
	// 車的物件
	function Car(make,country,img,special,model,price,type,trans,gas){
		this.make = make;
		this.country = country;
		this.img = img;
		this.special = special;
		this.model = model;
		this.price = price;
		this.type = type;
		this.trans = trans;
		this.gas = gas;
	};

	// push每一筆汽車物件
	function makeCar(make,country,img = 'img/car-default.jpeg',special = true,model = 'new model',price = 10000,type = 'sedan',trans='automatic', gas ='50'){

		const car = new Car(make,country,img,special,model,price,type,trans,gas)
		cars.push(car);
	};
	
	// 生產汽車
	function produceCars(){
		makeCar('chevy','american');
		makeCar('mercedes','german','img/car-german-1.jpeg',true)
		makeCar('bmw','german','img/car-german-2.jpeg',true,'model 2')
		makeCar('bmw','german','img/car-german-3.jpeg',false,'model 3')
		makeCar('bmw','german','img/car-german-4.jpeg',undefined,'model 4')
		makeCar('mercedes','german','img/car-german-5.jpeg',false,'model 5')
		makeCar('chevy','american','img/car-american-1.jpeg',true,'model 1')
		makeCar('chevy','american','img/car-american-2.jpeg',false,'model 2')
		makeCar('chevy','american','img/car-american-3.jpeg',false,'model 3')
		makeCar('chevy','american','img/car-american-4.jpeg',false,'model 4')
		makeCar('chevy','american','img/car-american-5.jpeg',false,'model 5')
	}
	produceCars();

	// special cars
	const specialCars = cars.filter(function(car){
		return car.special === true
	})

	return {
		cars,
		specialCars
	};
}();

const DisplaySpecialCars = function(CreateCars){

	const specialCars = CreateCars.specialCars
	// console.log(specialCars)
	const info = document.querySelector('.featured-info');

	// document loaded event
	document.addEventListener('DOMContentLoaded',function(){
		info.innerHTML = '';

		let data = '';
		specialCars.forEach(item =>{
			data += `<!--single item  -->
					<div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
						<span data-img='${item.img}' class="featured-icon mr-2">
							<i class="fas fa-car"></i>
						</span>
						<h5 class="font-weight-bold mx-1">${item.make}</h5>
						<h5 class="mx-1">${item.model}</h5>
					</div>
					<!-- end of single item -->`
		});
		info.innerHTML = data
	}); // end of document loaded event

	// change img
	info.addEventListener('click',function(e){
		if (e.target.parentElement.classList.contains('featured-item')){
			const img = e.target.previousElementSibling.dataset.img
			document.querySelector('.featured-photo').src = img ;
		}
	});
}(CreateCars);

const DisplayCars = function(CreateCars){
	//  all cars
	const cars = CreateCars.cars;

	// car container
	const inventory = document.querySelector('.inventory-container');

	// content loaded
	document.addEventListener('DOMContentLoaded',function(){
		inventory.innerHTML = '';

		let output = '';
		cars.forEach(function(car){
			output += `				<!-- single car item -->
				<div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
					<div class="card car-card">
						<img src="${car.img}" class="card-img" alt="">
						<!-- card body -->
						<div class="card-body">
							<div class="car-info d-flex justify-content-between">
								<!-- first flex child -->
								<div class="car-text text-uppercase">
									<h6 class="font-weight-bold">${car.make}</h6>
									<h6>${car.model}</h6>
								</div>
								<!-- second flex child -->
								<h5 class="car-value py-2 px-3">
									$<span class="car-price">${car.price}</span>
								</h5>
							</div>
						</div>
						<!-- end of card body -->
						<div class="card-footer text-capitalize d-flex justify-content-between">
							<p><span><i class="fas fa-car"></i>${car.type}</span></p>
							<p><span><i class="fas fa-cogs"></i>${car.trans}</span></p>
							<p><span><i class="fas fa-gas-pump"></i>${car.gas}</span></p>
						</div>
					</div>
				</div>
				<!-- end of single car item -->`
		});

		inventory.innerHTML = output ;
	});

}(CreateCars)

const FilterCars = function(){
	const filter = document.querySelectorAll('.filter-btn');
	
	filter.forEach(function(btn){
		btn.addEventListener('click',function(e){
			const value = e.target.dataset.filter ;
			const singleCar = document.querySelectorAll('.single-car');

			singleCar.forEach(function(car){
				if (value === 'all'){
					car.style.display = 'block';
				}
				else {
					if (!car.classList.contains(value)){
						car.style.display = 'none';
					}
					else {
						car.style.display = 'block';
					}
				}
			});
		});
	});
}();

