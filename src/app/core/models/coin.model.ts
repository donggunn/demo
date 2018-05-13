export interface Coin {
    id: number,
    coinName: string,
    exchange: string,
    last: number,
    bid: number,
    ask: number,
    high: number,
    low: number,
    volumeBTC: number,
    volumeUSD: number,
    timeUtc: string,
    timeStamp: string
}