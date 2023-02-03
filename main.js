// Returns a random DNA base
const returnRandBase = (a = '') => {

  const dnaBases = ['A', 'T', 'C', 'G'];
  var mult = 4
  if ( dnaBases.contains(a)) {
    dnaBases.pop(dnaBases.indexOf(a))
    mult = 3
  }
  return dnaBases[Math.floor(Math.random() * mult)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = ( num , strand) => {
  
  const pAequor = {
    'specimenNum': num,
    'dna' : strand,
    mutate: ()=>{
      const randI = Math.floor(Math.random()*this.dna.length)
      this.dna[randI] = returnRandBase(this.dna[randI])
    },
    compareDNA: (paequor2) => {
      var percent = 0;
      
      for (var base = 0 ; 0 <=4 ; base++){
        if (this.dna[base] == paequor2.dna[base]) {
          percent +=0.25;
        }
      }
      console.log(`Specimen #${this.specimenNum} and Specimen #${paequor2.specimenNum} have ${percent}% DNA in common`)
    },
    willLikelySurvive: () => {
      var matches = 0
      for (var base = 0 ; 0 <=4 ; base++){
        if (['C','D'].contains(this.dna[base])) {
          matches +=1;
        }
      }
      return (matches/this.dna.length > 0.6)
    }
  }
    return pAequor
};

var pAequors = [] 
for (var i = 0 ; i < 30 ; i++){
  pAequors.push(pAequorFactory(i,mockUpStrand))
}

console.log(pAequors)



