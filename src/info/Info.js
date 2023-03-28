import self from "../img/self.png"
import GREM from "../img/GREM.png"
import CompTIANetworkPlus from "../img/CompTIA_Network_Plus.png"
import CompTIASecurityPlus from "../img/CompTIA_Security_Plus.png"
import GitHub from "../img/github.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

//export let colors = ["rgb", "rgb(166,104,255)"];
export let colors = ["rgb(160, 205, 58)", "rgb(40, 218, 131)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Nicolas",
    lastName: "Vanderaveron",
    initials: "NV", // the example uses first and last, but feel free to use three or more if you like.
    position: "Analyste en Cyber Sécurité",
    email: "nicolas.vanderavero@student.umons.ac.be",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: " 🇧🇪 ",
            text: 'Basé en Belgique'
        },
        {
            emoji: '🍵🐈',
            text: 'Du thé, un chat, le bonheur'
        },

        {
            emoji: '🔍',
            text: "Analyste en Cyber Sécurité"
        }
    ],
    socials : [
        {
            link: "https://github.com/vanderaveron-umons",
            icon: "fa fa-github",
            label: 'github'
        }
    ],


    bio: "Bonjour ! Je m'appelle Nicolas. Je suis analyste en Cyber Sécurité. Je me spécialise dans la détection de malwares",
    skills:
        {
            proficientWith: ['C', 'Assembleur', 'Débogueur', 'IDA Pro'],
            exposedTo: ['Python', 'Java', '.NET']
        }
    ,
    hobbies: [
        {
            label: 'jeux vidéos',
            emoji: '🎮'
        },
        {
            label: 'technologies vintage',
            emoji: '💾'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "GitHub dédié aux cours",
            live: "https://github.com/vanderaveron-umons", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/vanderaveron-umons", // this should be a link to the **repository** of the project, where the code is hosted.
            image: GitHub
        }
    ],
    certifications: [
        {
            title: "GIAC Reverse Engineering Malware",
            verification: "https://www.credly.com/badges/8fb20cfa-3f0d-40a1-8bf2-4348c5bd4a67/public_url",
            image: GREM
        },
        {
            title: "CompTIA Security+ ce Certification",
            verification: "https://www.credly.com/badges/7bde8641-ff64-4947-98e1-8841bb116463/public_url",
            image: CompTIASecurityPlus
        },
        {
            title: "CompTIA Network+ ce Certification",
            verification: "https://www.credly.com/badges/b56e3f21-5b72-4671-9fa9-be29df28ea68/public_url",
            image: CompTIANetworkPlus
        }

    ]

}