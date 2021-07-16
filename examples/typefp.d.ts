define Decrement < X : number >
    return [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][X]

define CreateArray < L : number >
    if < L : -1 | 0 >
        return []
    else
        return [number, ~CreateArray<Decrement<L>>]

define CreateMatrix < Width : number, Height : number >
    if < Height : -1 | 0 >
        return []
    else
        return [CreateArray<Width>, ~CreateMatrix<Width, Decrement<Height>>]

define GenericMatrix
    return CreateMatrix<number, number>