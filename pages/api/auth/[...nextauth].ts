/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar } from '@chakra-ui/react';
import { url } from 'inspector';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
    // https://next-auth.js.org/configuration/providers
    providers: [
        {
            id: 'discord',
            name: 'Discord',
            type: 'oauth',
            version: '2.0',
            scope: 'identify email',
            params: { grant_type: 'authorization_code' },
            accessTokenUrl: 'https://discord.com/api/oauth2/token',
            authorizationUrl:
                'https://discord.com/api/oauth2/authorize?response_type=code&prompt=none',
            profileUrl: 'https://discord.com/api/users/@me',
            profile: (profile) => {
                if (profile.avatar === null) {
                    const default_avatar_num = parseInt(profile.discriminator) % 5;
                    profile.image_url = `https://cdn.discordapp.com/embed/avatars/${default_avatar_num}.png`;
                } else {
                    const format =
                        profile.premium_type === 1 || profile.premium_type === 2 ? 'gif' : 'png';
                    profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
                }
                return {
                    id: profile.id,
                    user_id: profile.id,
                    bot: profile.bot,
                    name: profile.username,
                    image: profile.image_url,
                    email: profile.email
                };
            },
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        }
    ],
    database: process.env.DATABASE_URL,
    secret: process.env.SECRET,

    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60 // 30 days
    },

    jwt: {},

    pages: {
        // signIn: '/api/auth/signin',  // Displays signin buttons
        // signOut: '/api/auth/signout', // Displays form with sign out button
        // error: '/api/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/api/auth/verify-request', // Used for check email page
        // newUser: null // If set, new users will be directed here on first sign in
    },

    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        // signIn: async (user, account, profile) => { return Promise.resolve(true) },
        // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
        // session: async (session, user, sessionToken) => {
        //     console.log(sessionToken);
        //     session.bar = 'HILL';
        //     return Promise.resolve(session);
        //},
        session: async (session, user) => {
            session.user.name = `${user.name}#${user.profile.discriminator}`;
            session.user.id = user.profile.id;
            session.refreshToken = user.account.refreshToken;
            session.accessToken = user.account.accessToken;
            return Promise.resolve(session);
        },
        jwt: async (token, user, account, profile, isNewUser) => {
            if (profile) {
                token.profile = profile;
                token.account = account;
            }
            return Promise.resolve(token);
        }
    }

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    // events: {
    //     signIn: async (message) => {
    //         console.log(message);
    //     }
    // }

    // Enable debug messages in the console if you are having problems
    //debug: true
};

export default (req, res) => NextAuth(req, res, options);
