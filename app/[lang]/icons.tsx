import { Locale } from '@/i18n-config'
import { MouseEventHandler } from 'react'

export const DiscordIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 -28.5 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
        className={className}
    >
        <g>
            <path
                d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                fill="#fff"
                fillRule="nonzero"
            ></path>
        </g>
    </svg>
)

export const GithubIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>github</title>
        <rect width="24" height="24" fill="none" />
        <path
            d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
            fill="#fff"
        />
    </svg>
)

export const MailIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path
            d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <path
            d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const NpmIcon = ({ className }: { className?: string }) => (
    <svg width="48" height="32" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>npm</title>
        <rect x="0" y="-5.99993" id="svg_1" fill="none" height="48" width="48" />
        <rect fill="#fff" id="svg_3" height="4.84" width="2.4" y="13.90007" x="21.6" />
        <path
            fill="#fff"
            id="svg_4"
            d="m2,9.00007l0,14.7l12.2,0l0,2.5l9.8,0l0,-2.5l22,0l0,-14.7l-44,0zm12.2,12.2l-2.4,0l0,-7.3l-2.5,0l0,7.3l-4.8,0l0,-9.7l9.7,0l0,9.7zm12.3,0l-4.9,0l0,2.5l-4.9,0l0,-12.2l9.8,0l0,9.7zm17.1,0l-2.4,0l0,-7.3l-2.5,0l0,7.3l-2.5,0l0,-7.3l-2.4,0l0,7.3l-4.9,0l0,-9.7l14.7,0l0,9.7z"
        />
    </svg>
)

export const HamburgerIcon = ({
    onClick,
    className,
}: {
    className?: string
    onClick: MouseEventHandler<SVGSVGElement>
}) => (
    <svg fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
        <path d="M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z" />
    </svg>
)

export const CloseIcon = ({
    onClick,
    className,
}: {
    className?: string
    onClick?: MouseEventHandler<SVGSVGElement>
}) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
            fill="#fff"
        />
    </svg>
)

export const FlagIcon = ({ className, locale }: { className?: string; locale: Locale }) => {
    if (locale === 'pl')
        return (
            <svg
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                className={className}
            >
                <path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z"></path>
                <path fill="#DC143C" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H0v9z"></path>
            </svg>
        )
    return (
        <svg
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            className={className}
        >
            <path
                fill="#00247D"
                d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
            ></path>
            <path
                fill="#CF1B2B"
                d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"
            ></path>
            <path
                fill="#EEE"
                d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"
            ></path>
            <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"></path>
        </svg>
    )
}
