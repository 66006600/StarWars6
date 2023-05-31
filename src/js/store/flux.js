const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [
			
			],
			characters: [

			],
			vehicles: [

			],
			favorites: [

			],
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets")
					.then(response => response.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.error(error));
			},
			loadCharacters: () => {
				fetch("https://swapi.dev/api/people")
					.then(response => response.json())
					.then(data => setStore({ characters: data.results }))
					.catch(error => console.error(error));
			},
			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles?page=1&limit=100")
					.then(response => response.json())
					.then(data => setStore({vehicles: data.results}))
					.catch(error => console.error(error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			agregarFavoritos: (index, tipo) => {
				
				const store = getStore()
				const elemento = store[tipo][index] 
				setStore({
					favorites: [...store.favorites, elemento]
				})
			}
		}
	};
};

export default getState;
