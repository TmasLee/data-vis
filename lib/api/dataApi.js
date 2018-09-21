let dataApi = {
	set data(num) {
		this.dataSet = [num];
	},
	calculateSimilarity: (max, min, person) => {
		person.sameness = Math.floor(Math.random() * (max - min + 1) + min);
	},
	calculateColor: person => {
		let degree = (person.sameness * 222) / 100;
		person.color = `hsl(${degree}, 90%, 61%)`;
	},
	dataSet: [
		{
			name: 'Peter',
			sameness: 85,
			color: 'hsl(200,90%,61%)'
		},
		{
			name: 'Antonio',
			sameness: 60,
			color: 'hsl(144,90%,61%)'
		},
		{
			name: 'Thomas',
			sameness: 70,
			color: 'hsl(155,90%,61%)'
		},
		{
			name: 'Dormammu',
			sameness: 100,
			color: 'hsl(222,90%,61%)'
		},
		{
			name: 'Umma',
			sameness: 10,
			color: 'hsl(334,90%,61%)'
		}
	]
};

export default dataApi;
