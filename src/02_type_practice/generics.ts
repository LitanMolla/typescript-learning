
// const getFirstItem=<T>(items:T[]) : T => {
//      const frist : T = items[0]
//      return frist
// }

// console.log(getFirstItem([true, false, true]))

interface ApiResponse<T> {
    data: T,
    success: boolean,
    message: string
}

const number : ApiResponse<number> = {
    data: 123,
    message: 'hekk',
    success: true
}

const name : ApiResponse<string> = {
    message: 'hekk',
    success: true,
    data: 'Litan'
}
console.log({number,name})