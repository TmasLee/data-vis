let dataApi = {
	set data(num) {
		this.dataSet = [num];
	},
	calculateSimilarity: (max, min, person) => {
		person.power = Math.floor(Math.random() * (max - min + 1) + min);
	},
	calculateColor: person => {
		let degree = (person.power * 222) / 100;
		person.color = `hsl(${degree}, 90%, 61%)`;
	},
	dataSet: [
		{
			name: 'The Ancient One',
			power: 85,
			color: 'hsl(200,90%,61%)'
		},
		{
			name: 'Dr. Strange',
			power: 60,
			color: 'hsl(144,90%,61%)'
		},
		{
			name: 'Me',
			power: 70,
			color: 'hsl(155,90%,61%)'
		},
		{
			name: 'Dormammu',
			power: 100,
			color: 'hsl(222,90%,61%)'
		},
		{
			name: 'Mordo',
			power: 10,
			color: 'hsl(334,90%,61%)'
		}
	]
};

export default dataApi;
