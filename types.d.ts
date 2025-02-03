import {Connection } from 'mongoose'

declare global {
    var mongoose: {
        conn: Connection | nulll
        promise: Promise<Connection> | null
    }
}

export {}