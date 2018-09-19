let dataApi = {
	set data(num) {
		this.dataSet = [num];
	},
	dataSet: [
		{
			name: 'Peter',
			sameness: 100,
			color: 'green'
		},
		{
			name: 'Antonio',
			sameness: 65,
			color: 'orange'
		},
		{
			name: 'Thomas',
			sameness: 70,
			color: 'red'
		},
		{
			name: 'He who shall not be named',
			sameness: 100,
			color: 'green'
		},
		{
			name: 'Umma',
			sameness: 20,
			color: 'purple'
		}
	]
};

export default dataApi;
