import Head from 'next/head'
import React from 'react'
import Cart from '../components/UserCart'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import UserCart from '../components/UserCart'

export default function cart() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Publicizing Portal</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <UserCart/>
        </div>
    )
}
