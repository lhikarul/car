const CreateCars = function(){

	const cars = [];

	function Cars(make,country,img,special,model,price,type,trans,gas){
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

	function makeCar(make,country,img = 'img/car-default.jpeg',special = true,model = 'new model',price = 10000,type = 'sedan',trans = 'automatic',gas = '50'){
		const car = new Cars(make,country,img,special,model,price,type,trans,gas);
		cars.push(car);
	}
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


	const specialCars = cars.filter(function(car){
		return car.special === true
	});
	
	return {
		cars,
		specialCars
	}
}();

const displaySepcialCars = function(CreateCars){
	const specialCars = CreateCars.specialCars;
	
	const info = document.querySelector('.featured-info');

	document.addEventListener('DOMContentLoaded',function(){
		info.innerHTML = '';

		let item = '';

		specialCars.forEach(function(car){
			item += `<!--single item  -->
					<div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
						<span class="featured-icon mr-2">
							<i class="fas fa-car"></i>
						</span>
						<h5 class="font-weight-bold mx-1"><strong class="car-maker" data-carimg=${car.img}>${car.make}</strong></h5>
						<h5 class="mx-1">${car.model}</h5>
					</div>
					<!-- end of single item -->`
		});
		info.innerHTML = item
	});

	info.addEventListener('click',function(e){
		if (e.target.nodeName !== 'STRONG'){
			return
		}
		else{
			const carImg = e.target.dataset.carimg
			document.querySelector('.featured-photo').src = carImg ;
		}
	});

}(CreateCars);

const displayCars = function(CreateCars){
	const cars = CreateCars.cars ;

	const inventory = document.querySelector('.inventory-container');

	document.addEventListener('DOMContentLoaded',function(){
		inventory.innerHTML = '';

		let item = '';

		cars.forEach(function(car){
			item += `<!-- single car item -->
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

		inventory.innerHTML = item
	});
}(CreateCars)

const filterCars = function(){
	const filterBtn = document.querySelectorAll('.filter-btn');

	filterBtn.forEach(function(btn){
		btn.addEventListener('click',function(e){
			const dataFilter = e.target.dataset.filter ;
			const singlecar = document.querySelectorAll('.single-car');

			singlecar.forEach(function(car){
				if (dataFilter === 'all'){
					car.style.display = 'block'
				}
				else{
					if (car.classList.contains(dataFilter)){
						car.style.display = 'block';
					}
					else{
						car.style.display = 'none';
					}
				}
			})
		})
	})

}();

