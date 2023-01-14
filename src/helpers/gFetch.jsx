


const items = [{ id: '1', name: 'Small Popcorn ', description: 'Small corn for movies', stock: '12', categorias: 'snacks', img: '../../Images/smallPopcorn.png'  },
{ id: '2', name: 'Medium Popcorn', description: 'Medium corn for movies', stock: '12', categorias: 'snacks', img: '../../Images/mediumPopcorn.png'  },
{ id: '3', name: 'Large Popcorn', description: 'Large corn for movies', stock: '12', categorias: 'snacks', img: '../../Images/largePopcorn.png'  },
{ id: '4', name: 'Small Drink', description: 'Small drink for movies', stock: '12', categorias: 'drinks', img: '../../Images/smallCup.png'  },
{ id: '5', name: 'Medium Drink', description: 'Medium drink for movies', stock: '12', categorias: 'drinks', img: '../../Images/mediumCup.png'  },
{ id: '6', name: 'Large Drink', description: 'Large drink for movies', stock: '12', categorias: 'drinks', img: '../../Images/largeCup.png'  },
{ id: '7', name: 'Large Drink', description: 'Large drink for movies', stock: '12', categorias: 'drinks', img: '../../Images/smallComb.png'  }
]



function gFetch(id) {
    return new Promise ((resolve, reject) => {
      
        setTimeout(() => {
          resolve(id ? items.find(prod => prod.id === id): items)  
          }, 1000);
          
        // reject  ('gone wrong')
        
      })
    
}

export default gFetch