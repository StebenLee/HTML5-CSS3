var bucketList = ['how','are','you'];
console.log(bucketList);

var listItem = bucketList[2];
console.log(listItem);

console.log(bucketList.length);

bucketList.push('item3', 'item4');
console.log(bucketList);

bucketList.pop()
console.log(bucketList);

// matrix  

Array.matrix = function(m, n, initial) {
  let a, i, j, mat = [];
  for (i=0; i<m; i++) {
  	a = [];
  	for(j=0; j<n; j++) {
  	  a[j] = initial;
  	}
  	mat[i]  = a;
  }
  return mat;
}

var mMatrix = Array.matrix(3,3,0);

Array.identity = function(n) {
  var i, mat = Array.matrix(n, n, 0);
  for(i=0; i<n; i+=1) {
  	mat[i][i]=1;
  }
  return mat;
}

mMatrix = Array.identity(4);
console.log(mMatrix[3][3]);