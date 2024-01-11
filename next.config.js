const { Domain } = require('domain')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "soroosh.app","media.soroosh.online",
        ]
    }  
}

module.exports = nextConfig
