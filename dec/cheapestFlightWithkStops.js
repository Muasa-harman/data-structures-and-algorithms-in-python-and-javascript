// There are n cities connected by some number of flights.You are given an array flights where flights[i] - [from,to,price]
// indices that there is a flight from city  to city with cost price.
// You are also  given three integers src,dist and k, return the cheapest price from src to dist with at most k stops.
//  if there is no such route. return -1

// E.g1
// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[2,3,600],[2,3,200],src = 0, dst=3,k=1]
// Output:700

// Bellman Ford algorithm
// Time:0(K*E) - K(*1) loops where we process each edge
// Space:0(N) all the n cities stored in prices tables
